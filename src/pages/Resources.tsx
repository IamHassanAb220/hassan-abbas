import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Linkedin, Mail, FileText, FileCode, Video, BookOpen } from "lucide-react";
import { projects, ProjectLink } from "@/data/projects";
import { FloatingCircle, FloatingTriangle } from "@/components/FloatingShapes";

const Resources = () => {
  useEffect(() => {
    // Check if there's a hash in the URL and scroll to it
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          // Add highlight animation
          element.classList.add("ring-2", "ring-foreground/20");
          setTimeout(() => {
            element.classList.remove("ring-2", "ring-foreground/20");
          }, 2000);
        }, 100);
      }
    }
  }, []);

  const getLinkIcon = (type: ProjectLink['type']) => {
    switch (type) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'demo':
        return <ExternalLink className="w-4 h-4" />;
      case 'docs':
        return <BookOpen className="w-4 h-4" />;
      case 'blog':
        return <FileText className="w-4 h-4" />;
      case 'video':
        return <Video className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="relative border-b border-border overflow-hidden">
        {/* Subtle floating shapes in header */}
        <FloatingCircle size="150px" className="absolute -top-10 right-10 opacity-[0.05] animate-float" />
        <FloatingTriangle size="50px" className="absolute top-5 left-20 opacity-10 animate-float-slow" />
        
        <div className="relative z-10 container max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4 sm:mb-6 touch-target"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Hassan Abbas</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">Resources & Links</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Projects Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 sm:mb-6">Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.slug}
                id={project.slug}
                className="border border-border bg-card rounded-sm p-4 sm:p-5 md:p-6 transition-all duration-200 hover:border-foreground/40 hover:bg-muted/20"
              >
                <h3 className="text-base sm:text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/90 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-between p-3 border border-border rounded-sm bg-background hover:border-foreground/40 hover:bg-muted/20 transition-all duration-300 hover:scale-[1.01] touch-target"
                    >
                      {/* Tiny accent shape */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 border border-white/20 rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        {getLinkIcon(link.type)}
                        <span className="text-xs sm:text-sm truncate">{link.label}</span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social & Professional Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 sm:mb-6">Social & Professional</h2>
          <div className="space-y-2">
            <a
              href="mailto:hassanab220.work@gmail.com"
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 border border-border rounded-sm bg-card hover:border-foreground/40 hover:bg-muted/20 transition-all duration-200 group touch-target gap-2"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Email</span>
              </div>
              <span className="text-xs text-muted-foreground break-all sm:text-right">hassanab220.work@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/hassan-abbas-848549209"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 sm:p-4 border border-border rounded-sm bg-card hover:border-foreground/40 hover:bg-muted/20 transition-all duration-200 group touch-target"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">LinkedIn</span>
              </div>
              <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
            </a>
            <a
              href="https://github.com/hassanabbas16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 sm:p-4 border border-border rounded-sm bg-card hover:border-foreground/40 hover:bg-muted/20 transition-all duration-200 group touch-target"
            >
              <div className="flex items-center gap-3">
                <Github className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">GitHub Profile</span>
              </div>
              <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
            </a>
            <a
              href="https://medium.com/@hassanabbasg220"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 sm:p-4 border border-border rounded-sm bg-card hover:border-foreground/40 hover:bg-muted/20 transition-all duration-200 group touch-target"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Medium Blog</span>
              </div>
              <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
            </a>
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 sm:mb-6">Certifications</h2>
          <div className="space-y-2">
            <div className="p-3 sm:p-4 border border-border rounded-sm bg-card">
              <div className="flex items-start gap-3">
                <FileCode className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Certified Data Engineer</p>
                  <p className="text-xs text-muted-foreground">Karachi AI</p>
                </div>
              </div>
            </div>
            <div className="p-3 sm:p-4 border border-border rounded-sm bg-card">
              <div className="flex items-start gap-3">
                <FileCode className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">AWS Educate: Cloud 101</p>
                  <p className="text-xs text-muted-foreground">Amazon Web Services</p>
                </div>
              </div>
            </div>
            <div className="p-3 sm:p-4 border border-border rounded-sm bg-card">
              <div className="flex items-start gap-3">
                <FileCode className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">AWS Educate: Machine Learning Foundations</p>
                  <p className="text-xs text-muted-foreground">Amazon Web Services</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 sm:py-8 mt-12 sm:mt-16">
        <div className="container max-w-2xl mx-auto px-4 sm:px-6">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Hassan Abbas. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Resources;
