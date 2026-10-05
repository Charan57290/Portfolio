"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certsData = [
  {
    title: "Web Development Internship",
    issuer: "Webstack Academy",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://drive.google.com/file/d/1iqQ2D960h8wi1AGRx43GhsH243JZqM4y/view?usp=sharing",
  },
  {
    title: "Graph Camp",
    issuer: "AlgoUniversity",
    skills: ["Graph Algorithms", "Problem Solving", "C++"],
    link: "https://drive.google.com/file/d/1IMslF617kmlwuxdiW6IwetLhQ3qGBtun/view?usp=sharing",
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full text-primary mb-4">
            <Award className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Licenses & <span className="text-primary">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/50 transition-colors group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="text-primary font-medium mb-4">{cert.issuer}</p>
              
              <div className="flex flex-wrap gap-2 mb-6 flex-1">
                {cert.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-secondary text-foreground/80 rounded text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full md:w-auto px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
              >
                View Certificate <ExternalLink className="w-4 h-4 ml-2 text-muted-foreground" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
