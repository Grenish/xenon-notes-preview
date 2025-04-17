import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Release Notes | Xenon Notes Updates and Changes",
  description:
    "Stay updated with the latest features, improvements, and bug fixes in Xenon Notes. Our release notes provide detailed information about each update to enhance your note-taking experience.",
  keywords: [
    "Xenon Notes release notes",
    "Xenon updates",
    "changelog",
    "new features",
    "app improvements",
    "version history",
    "product updates",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Release Notes | Xenon Notes Updates and Changes",
    description:
      "Discover the latest features and improvements in Xenon Notes through our detailed release notes and changelog.",
    type: "website",
  },
};

export default function ReleaseNotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${montserrat.variable} antialiased`}>{children}</main>
  );
}
