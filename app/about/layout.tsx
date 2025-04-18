import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "About Xenon Notes | Our Story and Mission",
  description:
    "Learn about the team behind Xenon Notes, our journey, mission, and how we're revolutionizing note-taking with AI technology. Discover what makes our approach unique.",
  keywords: [
    "about Xenon Notes",
    "Xenon team",
    "our mission",
    "company story",
    "AI note-taking history",
    "team behind Xenon",
  ],
  robots: "index, follow",
  openGraph: {
    title: "About Xenon Notes | Our Story and Mission",
    description:
      "Meet the team behind Xenon Notes and discover our journey to create the most intelligent note-taking application.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${montserrat.className} antialiased`}>{children}</main>
  );
}
