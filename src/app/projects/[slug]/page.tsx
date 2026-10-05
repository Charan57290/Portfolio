import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} | Charan`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/#projects" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
        
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.category.map(cat => (
              <span key={cat} className="px-3 py-1 bg-secondary text-primary rounded-full text-xs font-medium">
                {cat}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>

        <div className="relative aspect-video rounded-xl overflow-hidden mb-12 border border-border bg-secondary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Overview</h2>
              <p className="text-foreground/80 leading-relaxed">{project.overview}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">The Problem</h2>
              <p className="text-foreground/80 leading-relaxed">{project.problem}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">The Solution</h2>
              <p className="text-foreground/80 leading-relaxed">{project.solution}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            {project.architecture && (
               <section>
                 <h2 className="text-2xl font-bold mb-4 text-foreground">Architecture</h2>
                 <p className="text-foreground/80 leading-relaxed">{project.architecture}</p>
               </section>
            )}
            
            {project.challenges && (
               <section>
                 <h2 className="text-2xl font-bold mb-4 text-foreground">Challenges</h2>
                 <p className="text-foreground/80 leading-relaxed">{project.challenges}</p>
               </section>
            )}
            
            {project.results && (
               <section>
                 <h2 className="text-2xl font-bold mb-4 text-foreground">Results</h2>
                 <p className="text-foreground/80 leading-relaxed">{project.results}</p>
               </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 border-b border-border pb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-secondary/50 border border-border text-foreground px-3 py-1 rounded-md text-sm font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 border-b border-border pb-2">Links</h3>
              <div className="space-y-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group">
                    <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Source Code</span>
                  </a>
                )}
                {project.live && project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group">
                    <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
