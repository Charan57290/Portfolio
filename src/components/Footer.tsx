import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-10 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/#home" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-md overflow-hidden border border-primary/20 shadow-sm group-hover:shadow-[0_0_15px_rgba(189,195,199,0.6)] group-hover:border-primary/60 transition-all duration-300">
              <img src="/assets/a.png" alt="KC Logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-xl text-foreground group-hover:text-primary transition-colors duration-300" style={{ fontFamily: "var(--font-pacifico), cursive" }}>Charan</h1>
          </Link>
          <p className="text-muted-foreground text-sm text-center md:text-left">
            Building digital products, brands, and experience.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/Charan57290" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary rounded-full text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-colors">
            <GithubIcon className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/thota-kalicharan-4828392a2/" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary rounded-full text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-colors">
            <LinkedinIcon className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:thota.kalicharan@gmail.com" className="p-2 bg-secondary rounded-full text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
      
      <div className="mt-8 text-center text-xs text-muted-foreground">
        <p>&copy; {year} Charan. All Rights Reserved.</p>
        <p className="mt-1">Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
