"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "@/data/skills";
import { cn } from "@/lib/utils";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].name);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto md:mx-0 rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Categories Sidebar */}
          <div className="w-full md:w-64 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar">
            {skillsData.map((category, idx) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  "whitespace-nowrap px-6 py-4 rounded-xl text-left font-medium transition-all",
                  activeCategory === category.name
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-card/50 text-foreground/70 hover:bg-secondary hover:text-foreground"
                )}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="flex-1 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                {skillsData
                  .find((c) => c.name === activeCategory)
                  ?.skills.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-card border border-border rounded-xl p-4 flex items-center justify-center text-center shadow-sm hover:border-primary/40 hover:shadow-primary/10 transition-all cursor-default"
                    >
                      <span className="font-medium">{skill}</span>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
