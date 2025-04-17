"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Mail, AlertCircle, ArrowRight } from "lucide-react";

export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
  onSubmit,
  variant = "default",
}: {
  placeholders: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  variant?: "default" | "gradient" | "minimal" | "outlined" | "glass" | "neumorphic" | "glow" | "accent" | "frosted" | "layered" | "elegant" | "cosmic";
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const clearPlaceholderInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  const startAnimation = () => {
    clearPlaceholderInterval();
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
  };
  const handleVisibilityChange = () => {
    if (document.visibilityState !== "visible") {
      clearPlaceholderInterval();
    } else {
      startAnimation();
    }
  };

  useEffect(() => {
    startAnimation();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearPlaceholderInterval();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [placeholders]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);
  const [focused, setFocused] = useState(false);

  const [isEmail, setIsEmail] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleFocus = () => setFocused(true);
  const handleBlur = () => {
    setFocused(false);
    if (value) setTouchedEmail(true);
  };

  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (animating) return;
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    const val = e.target.value;
    setValue(val); // Update immediately for responsiveness
    
    debounceTimeout.current = setTimeout(() => {
      setIsEmail(validateEmail(val));
      if (val) setTouchedEmail(true);
      onChange && onChange(e);
    }, 150); // Increased debounce time for better performance
  };

  // Only generate canvas data when needed instead of on every value change
  const draw = useCallback(() => {
    if (!inputRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);
    const computedStyles = getComputedStyle(inputRef.current);

    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = "#FFF";
    ctx.fillText(value, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800);
    const pixelData = imageData.data;
    const newData: any[] = [];

    // Optimize pixel parsing by taking every other pixel for performance
    for (let t = 0; t < 800; t += 2) {
      let i = 4 * t * 800;
      for (let n = 0; n < 800; n += 2) {
        let e = i + 4 * n;
        if (
          pixelData[e] !== 0 &&
          pixelData[e + 1] !== 0 &&
          pixelData[e + 2] !== 0
        ) {
          newData.push({
            x: n,
            y: t,
            color: [
              pixelData[e],
              pixelData[e + 1],
              pixelData[e + 2],
              pixelData[e + 3],
            ],
          });
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }));
  }, [value]);

  // Only draw when animating starts, not on every render or value change
  useEffect(() => {
    if (animating) {
      draw();
    }
  }, [animating, draw]);

  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setValue("");
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !animating && isEmail) {
      vanishAndSubmit();
    }
  };

  const vanishAndSubmit = () => {
    setAnimating(true);
    draw(); // Only draw when submitting

    const value = inputRef.current?.value || "";
    if (value && inputRef.current) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0
      );
      animate(maxX);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmail) return;
    vanishAndSubmit();
    onSubmit && onSubmit(e);
  };

  const getContainerStyles = () => {
    const baseStyles =
      "w-full relative max-w-xl mx-auto h-12 sm:h-14 rounded-full overflow-hidden transition-all duration-300 z-10";

    switch (variant) {
      case "gradient":
        return cn(
          baseStyles,
          "bg-gradient-to-r from-zinc-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900",
          "shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.05)]",
          focused &&
            "shadow-[0px_4px_12px_-2px_rgba(0,0,0,0.12),_0px_2px_0px_0px_rgba(25,28,33,0.05),_0px_0px_0px_2px_rgba(99,102,241,0.05)]"
        );
      case "minimal":
        return cn(
          baseStyles,
          "bg-gray-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800",
          focused && "border-zinc-300 dark:border-zinc-700"
        );
      case "outlined":
        return cn(
          baseStyles,
          "bg-transparent border-2 border-zinc-200 dark:border-zinc-700",
          focused && "border-zinc-400 dark:border-zinc-500"
        );
      case "glass":
        return cn(
          baseStyles,
          "bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md border border-white/20 dark:border-zinc-700/30",
          "shadow-[0px_8px_16px_-6px_rgba(0,0,0,0.1),_0px_0px_0px_1px_rgba(255,255,255,0.1)]",
          focused && "bg-white/80 dark:bg-zinc-800/80 border-white/30 dark:border-zinc-600/40"
        );
      case "neumorphic":
        return cn(
          baseStyles,
          "bg-[#f0f0f3] dark:bg-[#1a1a1d]",
          "shadow-[6px_6px_10px_0px_rgba(0,0,0,0.1),-6px_-6px_10px_0px_rgba(255,255,255,0.8)] dark:shadow-[6px_6px_10px_0px_rgba(0,0,0,0.5),-6px_-6px_10px_0px_rgba(255,255,255,0.05)]",
          focused && "shadow-[inset_4px_4px_8px_0px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_0px_rgba(255,255,255,0.8)] dark:shadow-[inset_4px_4px_8px_0px_rgba(0,0,0,0.5),inset_-4px_-4px_8px_0px_rgba(255,255,255,0.05)]"
        );
      case "glow":
        return cn(
          baseStyles,
          "bg-white dark:bg-zinc-900/80",
          "border border-gray-100 dark:border-zinc-800",
          "shadow-[0_0_15px_2px_rgba(99,102,241,0.2)]",
          focused && "shadow-[0_0_20px_4px_rgba(99,102,241,0.3)] border-blue-200/50 dark:border-blue-500/30"
        );
      case "accent":
        return cn(
          baseStyles,
          "bg-white dark:bg-zinc-900",
          "border-2 border-blue-500/30 dark:border-blue-500/20",
          "shadow-[0px_2px_5px_-1px_rgba(0,0,0,0.05)]",
          focused && "border-blue-500/60 dark:border-blue-500/40 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]"
        );
      case "frosted":
        return cn(
          baseStyles,
          "bg-white/20 dark:bg-white/5 backdrop-blur-xl",
          "border border-white/40 dark:border-white/10",
          "shadow-[0px_8px_16px_-6px_rgba(0,0,0,0.08),inset_0_0_0_1px_rgba(255,255,255,0.5)] dark:shadow-[0px_8px_16px_-6px_rgba(0,0,0,0.2),inset_0_0_0_1px_rgba(255,255,255,0.1)]",
          focused && "bg-white/30 dark:bg-white/10 border-white/60 dark:border-white/20"
        );
      case "layered":
        return cn(
          baseStyles,
          "bg-white dark:bg-zinc-800",
          "border border-gray-100 dark:border-zinc-700",
          "shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)]",
          "after:content-[''] after:absolute after:-z-10 after:top-[4px] after:left-[5px] after:w-[calc(100%-10px)] after:h-full after:bg-gray-50 dark:after:bg-zinc-700 after:rounded-full",
          "before:content-[''] before:absolute before:-z-20 before:top-[8px] before:left-[10px] before:w-[calc(100%-20px)] before:h-full before:bg-gray-100 dark:before:bg-zinc-600 before:rounded-full",
          focused && "shadow-[0_3px_6px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.23)]"
        );
      case "elegant":
        return cn(
          baseStyles,
          "bg-gradient-to-r from-white to-gray-50 dark:from-zinc-800 dark:to-zinc-900",
          "border border-gray-200/80 dark:border-zinc-700/80",
          "shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05),0_4px_6px_-2px_rgba(0,0,0,0.01)]",
          focused && "shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_10px_10px_-5px_rgba(0,0,0,0.01)] border-gray-300/80 dark:border-zinc-600/80"
        );
      case "cosmic":
        return cn(
          baseStyles, 
          "bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950",
          "border border-indigo-200/30 dark:border-indigo-800/30",
          "shadow-[0_0_15px_rgba(99,102,241,0.15)]",
          "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.15),transparent_50%)] after:rounded-full after:pointer-events-none",
          focused && "border-indigo-300/50 dark:border-indigo-700/50 shadow-[0_0_20px_rgba(99,102,241,0.25)]"
        );
      default:
        return cn(
          baseStyles,
          "bg-white dark:bg-zinc-800",
          "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          focused &&
            "shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.1),_0px_2px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.05),_0px_0px_0px_4px_rgba(99,102,241,0.1)]",
          value && "bg-gray-50 dark:bg-zinc-800/90"
        );
    }
  };

  return (
    <form 
      className={getContainerStyles()} 
      onSubmit={handleSubmit}
      onMouseEnter={() => !focused && setFocused(true)}
      onMouseLeave={() => !document.activeElement?.isSameNode(inputRef.current) && setFocused(false)}
      style={{ isolation: 'isolate', zIndex: 0 }}
    >
      <canvas
        className={cn(
          "absolute pointer-events-none text-base transform scale-50 top-[20%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20",
          !animating ? "opacity-0" : "opacity-100"
        )}
        ref={canvasRef}
      />
      <div className="relative h-full flex items-center">
        {/* Always show the mail icon, but fade it when animating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: animating ? 0 : 1, 
            scale: 1 
          }}
          transition={{ duration: 0.2 }}
          className="absolute left-4 sm:left-5 text-gray-400 dark:text-zinc-500 z-10"
        >
          <Mail className="h-4 w-4" />
        </motion.div>
        
        <input
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          value={value}
          type="email"
          className={cn(
            "w-full relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-10 sm:pl-12 pr-20",
            animating && "text-transparent dark:text-transparent",
            touchedEmail && !isEmail && value ? "caret-red-500" : "caret-blue-500",
            "transition-all duration-200"
          )}
          aria-invalid={touchedEmail && !isEmail && value.length > 0}
          placeholder=""
        />
      </div>

      {touchedEmail && value && !isEmail && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-16 top-1/2 -translate-y-1/2 text-red-500"
        >
          <AlertCircle className="h-4 w-4" />
        </motion.div>
      )}

      <button
        disabled={!value || !isEmail}
        type="submit"
        className={cn(
          "absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 sm:h-10 w-8 sm:w-10 rounded-full transition-all duration-300 flex items-center justify-center",
          value && isEmail
            ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-sm hover:shadow-md"
            : "bg-gray-200 dark:bg-zinc-700"
        )}
      >
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight 
            className={cn(
              "h-4 w-4 transition-colors duration-300",
              value && isEmail ? "text-white" : "text-gray-500 dark:text-gray-400"
            )}
            strokeWidth={value && isEmail ? 2.5 : 2}
          />
        </motion.div>
      </button>

      <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
        <AnimatePresence mode="wait">
          {/* Only show placeholder when no value is present */}
          {!value && (
            <motion.p
              initial={{
                y: 5,
                opacity: 0,
              }}
              key={`current-placeholder-${currentPlaceholder}`}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -15,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-10 sm:pl-12 text-left w-[calc(100%-5rem)] truncate"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
