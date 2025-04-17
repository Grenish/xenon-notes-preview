"use client";

import Image from "next/image";
import { TextAnimate } from "@/components/ui/textAnimate";
import { LineShadowText } from "@/components/ui/lineShadowText";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState } from "react";

export default function About() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const Teams = [
    {
      id: 1,
      name: "Grenish Rai",
      role: "Founder & Developer",
      image: "/team/grenish.jpg",
    },
    {
      id: 2,
      name: "Gagan Sarmah",
      role: "Co-founder & Developer",
      image: "/team/gagan.jpg",
    },
  ];

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
    <div className="bg-black min-h-screen text-gray-200">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center bg-about justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-gray-800/20 to-transparent opacity-20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            About{" "}
            <LineShadowText
              className="italic text-white"
              shadowColor="rgba(255,255,255,0.2)"
            >
              Xenon
            </LineShadowText>{" "}
            Notes
          </h1>
          <div className="h-px w-24 md:w-32 mx-auto bg-gradient-to-r from-transparent via-white to-transparent mb-8"></div>
          <TextAnimate
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: (i) => ({
                opacity: 1,
                y: 0,
                transition: { delay: i * 0.1, duration: 0.4 },
              }),
            }}
            by="word"
            className="max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed"
            as="p"
          >
            We're trying to reshape how students create and work with notes in a
            way that actually makes sense.
          </TextAnimate>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gray-800/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white inline-block">
                  Our <span className="text-gray-300">Story</span>
                </h2>
                <div className="h-px w-16 bg-gradient-to-r from-white to-transparent mt-4"></div>
              </div>

              <p className="text-gray-300 leading-relaxed text-md">
                Making good notes takes time. And when you're studying, that
                time adds up. With AI becoming more capable, the idea of
                creating notes in one click started to feel possible. But most
                tools today still miss the mark. They generate text, sure, but
                they don't really understand what you need or how you want it.
              </p>

              <p className="text-gray-300 leading-relaxed text-md">
                This started with a question I couldn't get out of my head:{" "}
                <br />
                <span className="font-medium text-white">
                  "What if AI could actually understand what I want to create
                  and do it my way?"
                </span>
              </p>

              <p className="text-gray-300 leading-relaxed text-md">
                That's how this project began. The goal isn't just to generate
                notes. It's to give users control over what gets created.
                Whether that's clean, focused academic notes or visual elements
                like graphs and charts pulled from data, everything should
                happen in one place. And it should only do what you ask it to.
                No extra noise. No off-topic paragraphs. No guessing.
              </p>

              <p className="text-gray-300 leading-relaxed text-md">
                We're still early, but the idea is simple. Use AI in a way that
                feels natural, flexible, and helpful. Not overwhelming or
                overhyped. Just something that makes studying a little less
                frustrating and a lot more efficient.
              </p>
            </div>

            <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              <Image
                src="/woman-notes.jpeg"
                alt="Our story"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gray-800/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-white inline-block">
              Our Core <span className="text-gray-300">Values</span>
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-4"></div>
            <p className="max-w-2xl mx-auto text-gray-300 mt-6">
              These principles guide everything we do at Xenon Notes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "User Privacy First",
                desc: "We believe your notes are yours alone. We employ industry-leading security practices.",
              },
              {
                title: "Thoughtful Design",
                desc: "Every pixel and interaction is crafted with intention to support your creative process.",
              },
              {
                title: "Continuous Improvement",
                desc: "We're always listening, learning, and iterating to make Xenon Notes better.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-black border border-gray-800 p-8 rounded-xl transition-all duration-300 hover:border-white/30 group"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-black border border-gray-800 group-hover:border-white/30 mb-6">
                  <span className="text-white text-xl font-medium">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Redesigned for 2 members */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-white inline-block">
              Meet The <span className="text-gray-300">Founders</span>
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-4"></div>
            <p className="max-w-2xl text-md mx-auto text-gray-300 mt-6">
              The minds behind Xenon Notes, working to reshape the future of
              note-taking.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 justify-center items-center max-w-4xl mx-auto">
            {Teams.map((team) => (
              <div key={team.id} className="group w-full max-w-sm">
                <div className="mb-8 relative">
                  <div className="aspect-square bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-all duration-300">
                    <Image
                      src={team.image}
                      alt={team.name}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-6 py-2 rounded-full border border-gray-800">
                    <p className="text-white text-sm whitespace-nowrap">
                      {team.role}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-medium text-white mb-3">
                    {team.name}
                  </h3>
                  <p className="text-gray-400 max-w-xs mx-auto text-sm">
                    {team.id === 1
                      ? "Passionate about creating tools that help people think better and work smarter."
                      : "Focused on building elegant solutions to complex problems in knowledge management."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-launch Section - Replacing CTA */}
      <section id="waitlist" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-gray-800/10 to-transparent opacity-20"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Coming Soon
          </h2>
          <p className="text-gray-300 mb-8 text-md">
            Xenon Notes is currently under active development. We're working
            hard to create an exceptional note-taking experience. Join our
            waitlist to be among the first to know when we launch.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1 px-4">
            <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white text-sm">In development</span>
          </div>
          <div className="w-full max-w-xl mx-auto mt-5 px-4 h-16 relative z-0">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
              variant="glass"
            />
          </div>
          {submitted && (
            <p className="text-white/50 mt-2 relative z-10">
              You're all set. If you don't believe me… check your email.
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-600">
            © 2023 Xenon Notes. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
