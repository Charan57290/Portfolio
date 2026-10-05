"use client";

import { motion } from "framer-motion";
import { researchData } from "@/data/timeline";
import { FileText, ExternalLink } from "lucide-react";

export default function Research() {
  return (
    <section id="research" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Research & <span className="text-primary">Publications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto md:mx-0 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:border-primary/50 transition-colors group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <FileText className="w-32 h-32" />
          </div>
          
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-secondary text-primary rounded-full text-xs font-medium mb-4">
              {researchData.area}
            </span>
            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
              {researchData.title}
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-6 max-w-2xl">
              {researchData.summary}
            </p>
            <a
              href={researchData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-medium hover:underline bg-primary/10 px-4 py-2 rounded-lg transition-colors"
            >
              View Paper <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
