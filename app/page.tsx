"use client";

import React, { useState } from "react";
import MetalLogo from "@/components/metal-logo";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GoogleGeminiEffectDemo } from "@/components/scroll";
import { LineShadowText } from "@/components/ui/lineShadowText";
import { TextAnimate } from "@/components/ui/textAnimate";
import { BentoPageTwo } from "@/components/bentoPageTwo";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Pointer } from "@/components/ui/pointer";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const placeholders = [
    "Write your email here!!",
    "Yess you can do it...",
    "C'mon.. I Know you want it...",
    "Here... example@yourgreatdomain.com",
    "Please? Meow?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/waitlist/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await res.json();
      console.log(result);
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="">
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
              by="word"
              className="text-lg md:text-md text-center w-full md:w-10/12 text-gray-200/70 leading-relaxed mt-4"
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

      <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center py-16 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
          <TextAnimate
            as={"h2"}
            by="word"
            className="text-4xl md:text-6xl font-bold text-white capitalize mb-6 leading-tight"
          >
            Intelligence Multiplied
          </TextAnimate>
          <div className="h-0.5 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <TextAnimate
            as={"p"}
            by="word"
            className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto font-light"
          >
            Why rely on a single AI when you can harness the collective
            intelligence of multiple models?
          </TextAnimate>
        </div>

        {/* Simplified central element */}
        <div className="flex items-center justify-center w-full max-w-5xl mb-16 relative z-10">
          <div className="flex items-center px-6 py-3 bg-neutral-900/80 rounded-full border border-neutral-700">
            <span className="text-neutral-300 text-sm mr-3">Powered by</span>
            <div className="flex space-x-3 items-center">
              <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <div className="w-2 h-2 rounded-full bg-pink-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            <span className="text-white text-sm ml-3 font-medium">
              Intelligent Model Switching
            </span>
          </div>
        </div>

        {/* 2x2 grid for 4 AI models */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl relative z-10">
          {/* Cohere Card */}
          <div className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-indigo-500/40 transition-all duration-300 group">
            <div className="h-40 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10"></div>
              <div className="absolute top-3 right-3 z-20 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-indigo-300">
                Integrated
              </div>
              <Image
                src="/ai/cohere-color.svg"
                alt="Cohere AI"
                width={400}
                height={300}
                className="w-full h-full object-contain p-10 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-medium text-white">Cohere</h3>
                <div className="ml-auto flex items-center">
                  <span className="bg-indigo-500/20 text-indigo-300 text-xs px-2 py-1 rounded">
                    Text
                  </span>
                </div>
              </div>
              <p className="text-neutral-400 text-sm">
                Expert in natural language comprehension and generating
                coherent, contextual content for your notes.
              </p>
            </div>
            <Pointer>
              <svg
                width="40"
                height="40"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clipPath="url(#clip0_105_300)">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M188.941 100C192.769 100 196.477 99.4861 200 98.5234C197.199 97.9327 194.295 97.622 191.319 97.622H141.855C133.685 97.622 126.061 95.2811 119.619 91.2334C121.027 82.9896 124.913 75.0866 131.277 68.7229L162.891 37.1094C165.598 34.4024 167.856 31.4169 169.667 28.2452C167.268 29.8079 164.995 31.6416 162.891 33.7463L127.914 68.7229C122.137 74.4999 115.091 78.2351 107.674 79.9285C102.84 73.1033 100 64.7671 100 55.7675V11.0593C100 7.23107 99.4861 3.5229 98.5234 0C97.9327 2.80071 97.622 5.70466 97.622 8.68118L97.622 58.1456C97.622 66.3155 95.2811 73.9388 91.2335 80.3812C82.9897 78.9727 75.0866 75.0865 68.7229 68.7228L37.1094 37.1094C34.4024 34.4024 31.4169 32.1437 28.2452 30.3334C29.8079 32.7315 31.6416 35.0047 33.7463 37.1094L68.7229 72.086C74.4999 77.8631 78.2352 84.9088 79.9285 92.3263C73.1033 97.1596 64.7671 100 55.7675 100H11.0593C7.23105 100 3.52289 100.514 0 101.477C2.80073 102.067 5.70469 102.378 8.68122 102.378H58.1456C66.3156 102.378 73.9388 104.719 80.3812 108.767C78.9727 117.01 75.0866 124.913 68.7229 131.277L37.1094 162.891C34.4025 165.598 32.1438 168.583 30.3335 171.755C32.7316 170.192 35.0047 168.358 37.1094 166.254L72.086 131.277C77.863 125.5 84.9088 121.765 92.3263 120.071C97.1596 126.897 100 135.233 100 144.233V188.941C100 192.769 100.514 196.477 101.477 200C102.067 197.199 102.378 194.295 102.378 191.319V141.854C102.378 133.684 104.719 126.061 108.767 119.619C117.01 121.027 124.913 124.913 131.277 131.277L162.891 162.891C165.598 165.598 168.583 167.856 171.755 169.667C170.192 167.268 168.358 164.995 166.254 162.891L131.277 127.914C125.5 122.137 121.765 115.091 120.072 107.674C126.897 102.84 135.233 100 144.233 100H188.941Z"
                    fill="url(#paint0_linear_105_300)"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_105_300"
                    x1="100"
                    y1="0"
                    x2="100"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stopColor="#B8DBFC" />{" "}
                    <stop offset="1" stopColor="#F8FBFE" />{" "}
                  </linearGradient>{" "}
                  <clipPath id="clip0_105_300">
                    {" "}
                    <rect width="200" height="200" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </Pointer>
          </div>

          {/* Gemini Card */}
          <div className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-purple-500/40 transition-all duration-300 group">
            <div className="h-40 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10"></div>
              <div className="absolute top-3 right-3 z-20 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-purple-300">
                Integrated
              </div>
              <Image
                src="/ai/gemini-color.svg"
                alt="Gemini AI"
                width={400}
                height={300}
                className="w-full h-full object-contain p-10 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-medium text-white">Gemini</h3>
                <div className="ml-auto flex items-center">
                  <span className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded">
                    Multimodal
                  </span>
                </div>
              </div>
              <p className="text-neutral-400 text-sm">
                Processes text, code, and visual content to provide
                comprehensive insights and organize related information.
              </p>
            </div>

            <Pointer>
              <svg
                width="40"
                height="40"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clipPath="url(#clip0_104_40)">
                  {" "}
                  <path
                    d="M100.254 200C97.0998 200 94.4337 197.716 93.6699 194.656C91.2352 184.903 86.5744 174.531 79.6875 163.542C71.5278 150.347 59.8958 138.108 44.7917 126.823C31.6549 116.894 18.5181 110.123 5.38138 106.511C2.27005 105.656 0 102.897 0 99.6702V99.6702C0 96.5066 2.18273 93.7795 5.22473 92.9109C18.1045 89.2335 30.5122 83.2631 42.4479 75C56.1632 65.4514 67.6215 53.993 76.8229 40.625C84.9629 28.7165 90.5507 16.9388 93.5863 5.29207C94.3815 2.24095 97.0676 0 100.221 0V0C103.409 0 106.114 2.29058 106.89 5.3833C108.642 12.3654 111.38 19.512 115.104 26.8229C119.792 35.8507 125.781 44.5312 133.073 52.8646C140.538 61.0243 148.872 68.4028 158.073 75C170.097 83.5231 182.32 89.5111 194.744 92.964C197.792 93.8109 200 96.5244 200 99.6874V99.6874C200 102.898 197.725 105.634 194.629 106.483C186.754 108.642 178.648 112.124 170.313 116.927C160.243 122.83 150.868 129.861 142.187 138.021C133.507 146.007 126.389 154.427 120.833 163.281C113.933 174.293 109.267 184.745 106.837 194.639C106.083 197.708 103.413 200 100.254 200V200Z"
                    fill="url(#paint0_linear_104_40)"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_104_40"
                    x1="27.5"
                    y1="19"
                    x2="149"
                    y2="174.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stopColor="#FFD9A0" />{" "}
                    <stop offset="1" stopColor="#FFF5F1" />{" "}
                  </linearGradient>{" "}
                  <clipPath id="clip0_104_40">
                    {" "}
                    <rect width="200" height="200" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </Pointer>
          </div>

          {/* Gemma Card */}
          <div className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-green-500/40 transition-all duration-300 group">
            <div className="h-40 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10"></div>
              <div className="absolute top-3 right-3 z-20 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-green-300">
                Integrated
              </div>
              <Image
                src="/ai/gemma-color.svg"
                alt="Gemma AI"
                width={400}
                height={300}
                className="w-full h-full object-contain p-10 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-medium text-white">Gemma</h3>
                <div className="ml-auto flex items-center">
                  <span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded">
                    Efficient
                  </span>
                </div>
              </div>
              <p className="text-neutral-400 text-sm">
                Lightweight but powerful model for quick summarization and
                on-device processing of your notes.
              </p>
            </div>
            <Pointer>
              <svg
                width="40"
                height="40"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clipPath="url(#clip0_231_240)">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 49H27.5H28V48.9943C39.6432 48.7286 49 39.207 49 27.5V0H55V28C55 39.598 64.402 49 76 49C87.598 49 97 39.598 97 28V0H103V28C103 39.598 112.402 49 124 49C135.598 49 145 39.598 145 28V0H152V28C152 39.598 161.402 49 173 49H200V55H172C160.402 55 151 64.402 151 76C151 87.598 160.402 97 172 97H200V103H172C160.402 103 151 112.402 151 124C151 135.598 160.402 145 172 145H200V151H173C161.402 151 152 160.402 152 172V173V200H145V172C145 160.402 135.598 151 124 151C112.402 151 103 160.402 103 172V200H97V172C97 160.402 87.598 151 76 151C64.402 151 55 160.402 55 172V200H49V172.5C49 160.793 39.6432 151.271 28 151.006V151H27.5H0V145H28C39.598 145 49 135.598 49 124C49 112.402 39.598 103 28 103L0 103V97L28 97C39.598 97 49 87.598 49 76C49 64.402 39.598 55 28 55L0 55V49ZM76 97C87.598 97 97 87.598 97 76C97 64.402 87.598 55 76 55C64.402 55 55 64.402 55 76C55 87.598 64.402 97 76 97ZM124 97C135.598 97 145 87.598 145 76C145 64.402 135.598 55 124 55C112.402 55 103 64.402 103 76C103 87.598 112.402 97 124 97ZM97 124C97 135.598 87.598 145 76 145C64.402 145 55 135.598 55 124C55 112.402 64.402 103 76 103C87.598 103 97 112.402 97 124ZM124 145C135.598 145 145 135.598 145 124C145 112.402 135.598 103 124 103C112.402 103 103 112.402 103 124C103 135.598 112.402 145 124 145Z"
                    fill="url(#paint0_linear_231_240)"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_231_240"
                    x1="20.5"
                    y1="16"
                    x2="100"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stopColor="#ACAAFF" />{" "}
                    <stop offset="1" stopColor="#C0E8FF" />{" "}
                  </linearGradient>{" "}
                  <clipPath id="clip0_231_240">
                    {" "}
                    <rect width="200" height="200" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </Pointer>
          </div>

          {/* Meta Card */}
          <div className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-blue-500/40 transition-all duration-300 group">
            <div className="h-40 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10"></div>
              <div className="absolute top-3 right-3 z-20 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-blue-300">
                Integrated
              </div>
              <Image
                src="/ai/meta-color.svg"
                alt="Meta AI"
                width={400}
                height={300}
                className="w-full h-full object-contain p-10 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-medium text-white">Meta</h3>
                <div className="ml-auto flex items-center">
                  <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded">
                    Advanced
                  </span>
                </div>
              </div>
              <p className="text-neutral-400 text-sm">
                Excels at abstract reasoning and connecting ideas across your
                knowledge base for deeper insights.
              </p>
            </div>
            <Pointer>
              <svg
                width="40"
                height="40"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clipPath="url(#clip0_104_55)">
                  {" "}
                  <path
                    d="M100 200C91.6667 200 84.7222 197.309 79.1667 191.927C73.6111 186.545 70.8333 180.035 70.8333 172.396C70.8333 168.056 71.7014 164.149 73.4375 160.677C75.1736 157.205 78.2118 153.385 82.5521 149.219C87.066 145.052 90.625 141.146 93.2292 137.5C96.0069 133.681 97.3958 130.382 97.3958 127.604V118.229C93.5764 117.361 90.191 115.625 87.2396 113.021C84.4618 110.243 82.6389 106.944 81.7708 103.125H72.3958C69.4444 103.125 65.9722 104.514 61.9792 107.292C57.9861 110.069 54.1667 113.455 50.5208 117.448C46.875 121.441 43.2292 124.392 39.5833 126.302C36.1111 128.212 32.1181 129.167 27.6042 129.167C19.7917 129.167 13.1944 126.389 7.8125 120.833C2.60417 115.278 0 108.333 0 100C0 91.6667 2.60417 84.7222 7.8125 79.1667C13.1944 73.6111 19.7917 70.8333 27.6042 70.8333C34.8958 70.8333 41.1458 73.4375 46.3542 78.6458C51.5625 83.8542 56.25 88.2812 60.4167 91.9271C64.5833 95.5729 68.5764 97.3958 72.3958 97.3958H81.7708C82.6389 93.4028 84.4618 90.1041 87.2396 87.5C90.191 84.7222 93.5764 82.9861 97.3958 82.2916V72.9167C97.3958 68.4028 93.9236 62.6736 86.9792 55.7292L81.5104 50.2604C74.3924 43.1424 70.8333 35.5903 70.8333 27.6042C70.8333 19.7917 73.6111 13.2812 79.1667 8.07291C84.8958 2.69097 91.8403 0 100 0C108.333 0 115.278 2.69097 120.833 8.07291C126.389 13.4549 129.167 19.9653 129.167 27.6042C129.167 36.4583 124.826 44.7917 116.146 52.6042C107.465 60.5903 103.125 67.3611 103.125 72.9167V82.2916C107.118 82.9861 110.417 84.7222 113.021 87.5C115.799 90.1041 117.535 93.4028 118.229 97.3958H127.604C133.507 97.3958 140.278 92.9687 147.917 84.1146C155.729 75.2604 163.889 70.8333 172.396 70.8333C180.208 70.8333 186.719 73.6979 191.927 79.4271C197.309 84.9826 200 91.8403 200 100C200 108.333 197.309 115.278 191.927 120.833C186.545 126.389 180.035 129.167 172.396 129.167C165.104 129.167 158.941 126.649 153.906 121.615C148.872 116.58 144.184 112.24 139.844 108.594C135.503 104.948 131.424 103.125 127.604 103.125H118.229C116.84 111.458 111.806 116.493 103.125 118.229V127.604C103.125 132.812 107.465 139.497 116.146 147.656C124.826 155.816 129.167 164.062 129.167 172.396C129.167 180.208 126.302 186.719 120.573 191.927C115.017 197.309 108.16 200 100 200Z"
                    fill="url(#paint0_linear_104_55)"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_104_55"
                    x1="157.5"
                    y1="32"
                    x2="44"
                    y2="147.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop offset="0.0509862" stopColor="#FFB6E1" />{" "}
                    <stop offset="1" stopColor="#FBE3EA" />{" "}
                  </linearGradient>{" "}
                  <clipPath id="clip0_104_55">
                    {" "}
                    <rect width="200" height="200" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </Pointer>
          </div>
        </div>

        <div className="mt-12 text-center relative z-10 max-w-3xl">
          <h4 className="text-white text-xl mb-4">Better Together</h4>
          <p className="text-neutral-400 mb-6 text-sm md:text-base">
            Our model switching technology intelligently selects the optimal AI
            for each task, delivering results no single model can match.
          </p>
        </div>
      </div>

      <div className="">
        <GoogleGeminiEffectDemo />
      </div>
      <div id="waitlist" className="w-full h-screen bg-wait flex flex-col items-center justify-center">
        <div className="text-center px-4 mb-8 relative z-10">
          <h2 className="text-white text-4xl md:text-5xl font-bold capitalize mb-4">
            What are you waiting for?
          </h2>
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto">
            Be among the first to experience Xenon Notes. Sign up now to get
            notified when we launch to the public.
          </p>
        </div>
        {/* Fixed height container with proper z-index management */}
        <div className="w-full max-w-xl px-4 h-16 relative z-0">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
            variant="cosmic"
          />
        </div>
        {submitted && (
          <p className="text-white/50 mt-2 relative z-10">
            You're all set. If you don't believe me… check your email.
          </p>
        )}
      </div>
    </div>
  );
}
