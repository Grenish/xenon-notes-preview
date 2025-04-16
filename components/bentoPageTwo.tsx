import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import { Marquee } from "./ui/marquee";
import { AnimatedBeamMultipleOutputDemo } from "./AnimatedBeamMultipleOutputDemo";
import { TextAnimate } from "./ui/textAnimate";

export function BentoPageTwo() {
  const features = [
    {
      title: "Effortless AI-Powered Note Generation",
      description:
        "Create polished, high-quality notes in seconds using advanced AI tools — all with just a click.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Real-Time Collaboration with AI",
      description:
        "Unlock Canvas Mode and co-create with AI — brainstorm, refine, and finalize your notes together in real time.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Flexible Export Options",
      description:
        "Download your notes in multiple formats — PDF, Markdown, and more — with just one click.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Secure Cloud Sync",
      description:
        "Your notes are always safe. Xenon auto-saves everything to the cloud so you never lose a word.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <TextAnimate
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              rotate: 45,
              scale: 0.5,
            },
            show: (i) => ({
              opacity: 1,
              y: 0,
              rotate: 0,
              scale: 1,
              transition: {
                delay: i * 0.1,
                duration: 0.4,
                y: {
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                  mass: 0.8,
                },
                rotate: {
                  type: "spring",
                  damping: 8,
                  stiffness: 150,
                },
                scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 300,
                },
              },
            }),
            exit: (i) => ({
              opacity: 0,
              y: 30,
              rotate: 45,
              scale: 0.5,
              transition: {
                delay: i * 0.1,
                duration: 0.4,
              },
            }),
          }}
          by="character"
          as="h4"
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white"
        >
          Why Xenon Notes?
        </TextAnimate>

        <TextAnimate
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              rotate: 45,
              scale: 0.5,
            },
            show: (i) => ({
              opacity: 1,
              y: 0,
              rotate: 0,
              scale: 1,
              transition: {
                delay: i * 0.1,
                duration: 0.4,
                y: {
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                  mass: 0.8,
                },
                rotate: {
                  type: "spring",
                  damping: 8,
                  stiffness: 150,
                },
                scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 300,
                },
              },
            }),
            exit: (i) => ({
              opacity: 0,
              y: 30,
              rotate: 45,
              scale: 0.5,
              transition: {
                delay: i * 0.1,
                duration: 0.4,
              },
            }),
          }}
          by="word"
          as="p"
          delay={0.1}
          className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
        >
          Creating notes can be messy, time consuming, and easy to lose track
          of. That's why we built Xenon Notes, your AI-powered partner that
          helps you capture, organize, and revisit your ideas effortlessly. It's
          not just easier, it's the smarter way to do notes.
        </TextAnimate>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-[50vh]">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src="/chat-update.png"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="h-auto">
      <AnimatedBeamMultipleOutputDemo className="-mt-10" />
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-[50vh]">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src="/canvas.webp"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  const files = [
    {
      name: "Summarize this doc...",
      body: "The user needs a brief and meaningful summary of the content inside a document they've uploaded.",
    },
    {
      name: "Generate a graph from...",
      body: "The user is asking for a visual representation of data found within an uploaded image, table, or document.",
    },
    {
      name: "Break down this PDF...",
      body: "The user wants to extract key points, headings, or structured notes from the uploaded PDF file.",
    },
    {
      name: "Turn image to notes...",
      body: "The user has uploaded an image (like handwritten notes or a slide) and needs it converted into clean, editable notes.",
    },
    {
      name: "Extract key terms from...",
      body: "The user is requesting to find and list important terms, keywords, or concepts from the provided file.",
    },
  ];
  return (
    <div className="h-60 md:h-50  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Marquee
        pauseOnHover
        className="absolute [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    </div>
  );
};
