import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "./home";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  gap-16  font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="w-full relative top-0 h-full">
        <Hero />
      </main>
    </div>
  );
}
