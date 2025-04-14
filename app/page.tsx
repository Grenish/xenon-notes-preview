import Hero from "@/components/hero";
import MetalLogo from "@/components/metal-logo";
import FloatingParticles from "@/components/ui/floatingParticles";

export default function Home() {
  return (
    <div className="">
      <div className="bg-black min-h-screen relative">
        <div className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden z-10">
          <div className="flex flex-col items-center justify-center max-w-5xl px-6 relative z-20">
            <h2 className="text-6xl font-bold text-white bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Xenon Notes
            </h2>
            <p className="text-md text-center w-10/12 text-gray-200/70 leading-relaxed mt-4">
              Xenon Notes uses AI to instantly structure, summarize, and enhance
              your raw thoughts, meeting minutes, or study material. Stop
              organizing, start understanding.
            </p>
          </div>

          <div className="w-1/2 h-[250px] relative z-20">
            <MetalLogo />
          </div>
        </div>
      </div>
      <Hero />
    </div>
  );
}
