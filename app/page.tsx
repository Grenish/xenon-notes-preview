import NotifyMe from "@/components/notify-me";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="w-full h-screen flex flex-col items-center justify-center  relative overflow-hidden">
        {/* Subtle background elements - using darker blues for subtle effect */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-900/10 blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-indigo-900/10 blur-[120px]" />

        <div className="mb-10 text-center max-w-5xl px-6">
          <h2 className="text-6xl font-bold mb-6 text-white">Xenon Notes</h2>
          <p className="text-sm text-gray-200/50 leading-relaxed">
            Creating high-quality notes just got easier. Xenon Notes helps you
            turn your ideas into well-structured, summarized, and enhanced notes
            with the power of AI. Whether you're jotting down class content,
            brainstorming projects, or capturing important insights. Xenon takes
            care of the formatting, organizing, and refining.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-blue-900/20 rounded-full blur-xl -z-10 scale-110" />
          <Image
            src={"/download.png"}
            alt="Xenon Notes"
            width={200}
            height={200}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
      
    </div>
  );
}
