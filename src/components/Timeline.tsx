"use client";

import { motion } from "framer-motion";
import { experienceData, educationData, TimelineItem } from "@/data/timeline";
import { Briefcase, GraduationCap, ExternalLink } from "lucide-react";

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:hidden absolute left-[11px] top-1 bottom-0 w-0.5 bg-border -z-10" />
      
      <div className="md:grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
        {/* Left Side (Empty on mobile, alternating on desktop) */}
        <div className={`hidden md:block ${index % 2 === 0 ? "text-right" : "col-start-3 text-left"}`}>
          {index % 2 === 0 ? (
            <div className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors shadow-sm group">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-primary font-medium mb-2">{item.organization}</p>
              {item.location && <p className="text-sm text-muted-foreground mb-3">{item.location}</p>}
              <p className="text-foreground/80 text-sm">{item.description}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-sm font-medium text-primary hover:underline">
                  {item.linkText || "View"} <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              )}
            </div>
          ) : null}
        </div>

        {/* Center Dot */}
        <div className="absolute left-0 md:relative md:col-start-2 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shadow-[0_0_10px_rgba(189,195,199,0.5)] z-10">
          <div className="w-2 h-2 bg-primary rounded-full" />
        </div>

        {/* Right Side / Mobile View */}
        <div className={`${index % 2 !== 0 ? "md:text-left" : "md:hidden"}`}>
          <div className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors shadow-sm group mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
            <p className="text-primary font-medium mb-2">{item.organization}</p>
            {item.location && <p className="text-sm text-muted-foreground mb-3">{item.location}</p>}
            <p className="text-foreground/80 text-sm">{item.description}</p>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-sm font-medium text-primary hover:underline">
                {item.linkText || "View"} <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Timeline() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Experience Section */}
        <div id="experience" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full text-primary mb-4">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
              Professional <span className="text-primary">Experience</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
            
            <div className="space-y-0 md:space-y-12">
              {experienceData.map((item, idx) => (
                <TimelineCard key={item.id} item={item} index={idx} />
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div id="education">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full text-primary mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
              Education <span className="text-primary">Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
            
            <div className="space-y-0 md:space-y-12">
              {educationData.map((item, idx) => (
                <TimelineCard key={item.id} item={item} index={idx} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
