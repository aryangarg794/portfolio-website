'use client';

import Image from "next/image";
import Footer from "@/components/footer";
import ButtonScrollTop from "@/components/backtotop";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-[#0d1b2a] items-center justify-between p-8 text-[#e0e1dd]">
        <section id="landing" className="py-96">Landing</section>
        <section id="about" className="py-96">About</section>
        <section id="projects" className="py-96">Projects</section>
        <section id="contact" className="py-96">Contact</section>
        <ButtonScrollTop />
        <Footer />
    </main>
  );
}
