"use client";

import { motion } from "framer-motion";
import { FolderGit2, Code2, Award, FileText } from "lucide-react";

const stats = [
  { label: "Projects", value: "5+", icon: FolderGit2 },
  { label: "Languages", value: "3+", icon: Code2 },
  { label: "Certifications", value: "2", icon: Award },
  { label: "Research Paper", value: "1", icon: FileText },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto md:mx-0 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/80 leading-relaxed space-y-6"
          >
            <p>
              I’m a Full Stack Developer passionate about crafting seamless, intuitive digital experiences. My core strengths lie in developing scalable web applications, implementing elegant UI/UX designs, and solving complex technical problems.
            </p>
            <p>
              I bring a versatile skill set spanning both frontend and backend technologies including React, Next.js, Node.js, Python, and Java. Recently, I have been expanding my expertise in <span className="text-primary font-medium">AI/GenAI</span>, building intelligent applications that leverage modern LLM APIs and RAG architectures.
            </p>
            <p>
              With hands-on experience leading team projects, conducting research, and constantly learning, I thrive in dynamic environments where innovation meets practicality. Whether it's building custom solutions or optimizing performance, I aim to bridge creativity with code.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 hover:shadow-[0_0_20px_rgba(189,195,199,0.15)] transition-all"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
