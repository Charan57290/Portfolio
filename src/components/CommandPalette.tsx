"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Home, User, Code, Folder, Briefcase, GraduationCap, Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isOpen) return null;

  const commands = [
    { name: "Go to Home", href: "/#home", icon: Home },
    { name: "Go to About", href: "/#about", icon: User },
    { name: "Go to Skills", href: "/#skills", icon: Code },
    { name: "Go to Projects", href: "/#projects", icon: Folder },
    { name: "Go to Experience", href: "/#experience", icon: Briefcase },
    { name: "Go to Education", href: "/#education", icon: GraduationCap },
    { name: "Go to Contact", href: "/#contact", icon: Mail },
    { name: "Open GitHub", href: "https://github.com/Charan57290", icon: GithubIcon, external: true },
    { name: "Open LinkedIn", href: "https://www.linkedin.com/in/thota-kalicharan-4828392a2/", icon: LinkedinIcon, external: true },
    { name: "Download Resume", href: "/assets/resume.pdf", icon: FileDown, external: true },
  ];

  const filteredCommands = query === "" 
    ? commands 
    : commands.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));

  const handleSelect = (command: typeof commands[0]) => {
    setIsOpen(false);
    if (command.external) {
      window.open(command.href, "_blank");
    } else {
      if (command.href.startsWith("/#") && window.location.pathname === "/") {
        const targetId = command.href.substring(2);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(command.href);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm p-4">
      <div 
        className="w-full max-w-xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground mr-3" />
          <input
            autoFocus
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
            placeholder="Search portfolio... (e.g., 'Projects', 'GitHub')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="text-xs text-muted-foreground border border-border px-1.5 py-0.5 rounded">ESC</div>
        </div>
        
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <p className="text-sm text-center py-6 text-muted-foreground">No commands found.</p>
          ) : (
            filteredCommands.map((command, idx) => (
              <button
                key={idx}
                className="w-full flex items-center px-4 py-3 hover:bg-secondary/50 rounded-lg transition-colors text-left group"
                onClick={() => handleSelect(command)}
              >
                <command.icon className="w-5 h-5 mr-3 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium">{command.name}</span>
              </button>
            ))
          )}
        </div>
      </div>
      <div className="absolute inset-0 z-[-1]" onClick={() => setIsOpen(false)}></div>
    </div>
  );
}
