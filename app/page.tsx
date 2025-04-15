"use client";
import React from "react";
import MetalLogo from "@/components/metal-logo";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GoogleGeminiEffectDemo } from "@/components/scroll";
import { LineShadowText } from "@/components/ui/lineShadowText";
import { TextAnimate } from "@/components/ui/textAnimate";
import { BentoPageTwo } from "@/components/bentoPageTwo";

export default function Home() {
  const navItems = [
    {
      name: "About",
      link: "#",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Release Notes",
      link: "#release-notes",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Notify Me</NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Notify Me
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <div className="bg-black min-h-screen hero-background">
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center max-w-5xl px-4 md:px-6">
            <h2 className="text-4xl md:text-6xl capitalize font-bold text-white bg-clip-text bg-gradient-to-r from-white to-gray-300 text-center">
              <LineShadowText
                className="italic text-[#E7CEE3]"
                shadowColor="#D2FF96"
              >
                change
              </LineShadowText>{" "}
              the way <br /> you make{" "}
              <LineShadowText
                className="italic text-[#E7CEE3]"
                shadowColor="#D2FF96"
              >
                notes
              </LineShadowText>
            </h2>
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
              className="text-sm md:text-md text-center w-full md:w-10/12 text-gray-200/70 leading-relaxed mt-4"
              as="p"
            >
              Effortlessly create, organize, and share your notes—all in one
              place. Xenon Notes leverages AI to help you capture ideas,
              generate insights, and unlock the full potential of your
              knowledge.
            </TextAnimate>
          </div>

          <div className="w-10/12 sm:w-3/4 md:w-1/2 h-[180px] md:h-[250px]">
            <MetalLogo />
          </div>
        </div>
      </div>
      <div className="min-h-screen w-full bg-offer flex flex-col items-center justify-center">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white capitalize">
                Making notes just got easier <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  with Xenon Notes
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/ipad-chat.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      {/* Xenon Intro 2 */}
      <div className="w-full bg-black min-h-screen  flex flex-col gap-8 py-8">
        <section className="flex flex-col md:flex-row items-center">
          <ScrollReveal className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8 py-4">
            Unleash the power of AI to transform your notes into structured
            knowledge.
          </ScrollReveal>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={"/woman-notes.jpeg"}
              alt="Hero"
              width={1000}
              height={1000}
              className="w-full max-w-md md:max-w-none object-cover rounded-lg"
              style={{ height: "auto" }}
            />
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
            <Image
              src={"/lib2.jpeg"}
              alt="Hero"
              width={1000}
              height={1000}
              className="w-full max-w-md md:max-w-none object-cover rounded-lg"
              style={{ height: "auto" }}
            />
          </div>
          <ScrollReveal className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8 py-4 order-1 md:order-2">
            Unlock deeper insights with your library and accelerate your
            understanding.
          </ScrollReveal>
        </section>
      </div>
      <div className="w-full bg-black min-h-screen flex flex-col items-center justify-center gap-8 py-8 text-white">
        <BentoPageTwo />
      </div>

      <div className="">
        <GoogleGeminiEffectDemo />
      </div>
    </div>
  );
}
