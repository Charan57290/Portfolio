import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thota Mohana Naga Venkata Kalicharan | Portfolio",
  description: "Portfolio of Thota Mohana Naga Venkata Kalicharan, Computer Science student and developer showcasing projects in web development and AI.",
  keywords: ["Charan", "Thota Kali charan", "Full Stack Developer", "Next.js", "React", "AI"],
  authors: [{ name: "Thota Mohana Naga Venkata Kalicharan" }],
  verification: {
    google: "vYGNo7YotPG3d1FA13hulGaD-GUhfiNI2OP9A2loU5Y",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${pacifico.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30 min-h-screen flex flex-col`}
      >
        <CommandPalette />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
