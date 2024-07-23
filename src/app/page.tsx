'use client';

import Image from "next/image";
import Footer from "@/components/footer";
import ButtonScrollTop from "@/components/backtotop";
import Landing from "@/components/landing";
import About from "@/components/aboutme";
import Projects from "@/components/projects";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-[#0d1b2a] items-center justify-between p-8 text-[#e0e1dd]">
        <Landing />
        <About />
        <Projects />
        <ButtonScrollTop />
        <Footer />
    </main>
  );
}
