import { BentoPage } from "@/components/bento-page";
import MetalLogo from "@/components/metal-logo";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="bg-black min-h-screen hero-background">
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center max-w-5xl px-6">
            <h2 className="text-6xl font-bold text-white bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Xenon Notes
            </h2>
            <p className="text-md text-center w-10/12 text-gray-200/70 leading-relaxed mt-4">
              Xenon Notes uses AI to instantly structure, summarize, and enhance
              your raw thoughts, meeting minutes, or study material. Stop
              organizing, start understanding.
            </p>
          </div>

          <div className="w-1/2 h-[250px]">
            <MetalLogo />
          </div>
        </div>
      </div>
      {/* Xenon Intro 2 */}
      <div className="w-full min-h-screen bg-black flex flex-col">
        <section className="flex">
          <ScrollReveal>
            Unleash the power of AI to transform your notes into structured
            knowledge.
          </ScrollReveal>
          <Image
            src={"/woman-notes.jpeg"}
            alt="Hero"
            width={1000}
            height={1000}
            className="w-1/2 object-cover"
          />
        </section>
        <section className="flex">
          <Image
            src={"/lib2.jpeg"}
            alt="Hero"
            width={1000}
            height={1000}
            className="w-1/2 object-cover"
          />
          <ScrollReveal>
            Unlock deeper insights with yout library and accelerate your
            understanding.
          </ScrollReveal>
        </section>
      </div>

      {/* what we offer */}
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center">
        {/* <div className="">
          <BentoPage />
        </div> */}
      </div>
    </div>
  );
}
