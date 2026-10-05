"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Download, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
  "AI Developer"
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-10 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-background/90" style={{ maskImage: 'radial-gradient(ellipse at center, transparent 20%, black 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black 80%)'}}></div>

      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative w-40 h-40 md:w-56 md:h-56 mx-auto"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-2 border-primary/50 overflow-hidden shadow-[0_0_30px_rgba(189,195,199,0.3)] hover:shadow-[0_0_50px_rgba(189,195,199,0.5)] transition-shadow duration-500">
              <Image src="/assets/profile_new.jpg" alt="Thota Kalicharan" fill className="object-cover" priority />
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary font-mono mb-4 text-lg"
          >
            Hi, It's Me
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight group cursor-pointer"
          >
            <span className="block group-hover:hidden transition-all duration-300">Charan</span>
            <span className="hidden group-hover:block transition-all duration-300 text-primary">Thota KaliCharan</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-12 md:h-16 mb-4 flex justify-center items-center"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentRole}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
              >
                {roles[currentRole]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto font-mono"
          >
            React • Next.js • TypeScript • AI
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Link 
              href="/#projects" 
              className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all w-full sm:w-auto justify-center shadow-[0_0_15px_rgba(189,195,199,0.3)] hover:shadow-[0_0_25px_rgba(189,195,199,0.5)]"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="/assets/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-border bg-card/50 backdrop-blur-sm px-8 py-3 rounded-full font-medium hover:border-primary/50 hover:bg-secondary/50 transition-all w-full sm:w-auto justify-center"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex items-center justify-center gap-6"
          >
            <a href="https://github.com/Charan57290" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary hover:-translate-y-1 transition-all">
              <GithubIcon className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/thota-kalicharan-4828392a2/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary hover:-translate-y-1 transition-all">
              <LinkedinIcon className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:thota.kalicharan@gmail.com" className="text-foreground/60 hover:text-primary hover:-translate-y-1 transition-all">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 animate-bounce mt-8 hidden sm:flex"
      >
        <div className="w-8 h-12 rounded-full border-2 border-foreground/20 flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
