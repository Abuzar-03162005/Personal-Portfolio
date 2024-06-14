import Image from "next/image";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <div className="flex flex-col gap-2">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
