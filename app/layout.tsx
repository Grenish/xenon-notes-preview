import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import NavbarRoot from "@/components/navbar-root";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xenon Notes | Smart AI-Powered Note Taking App",
  description: "Streamline your workflow with Xenon Notes, the intelligent AI note-taking application that organizes, summarizes, and enhances your ideas. Boost productivity with seamless synchronization across all your devices.",
  keywords: ["note taking app", "AI notes", "productivity tool", "digital notes", "smart notes"],
  robots: "index, follow",
  openGraph: {
    title: "Xenon Notes | Smart AI-Powered Note Taking App",
    description: "Streamline your workflow with Xenon Notes, the intelligent AI note-taking application that organizes your ideas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <NavbarRoot />
        {children}
      </body>
    </html>
  );
}
