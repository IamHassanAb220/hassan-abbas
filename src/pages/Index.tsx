import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, FileText, ArrowRight, Link as LinkIcon } from "lucide-react";
import { projects } from "@/data/projects";
import { MobileNav } from "@/components/MobileNav";
import { FloatingCircle, FloatingTriangle } from "@/components/FloatingShapes";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = ["Software Design Engineer", "Data Engineer", "AI/ML"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "experience", "skills", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentText = titles[currentTitle];

    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayedText !== currentText) {
          // Typing
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else if (!isDeleting && displayedText === currentText) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayedText !== "") {
          // Deleting
          setDisplayedText(displayedText.slice(0, -1));
        } else if (isDeleting && displayedText === "") {
          // Move to next title
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitle]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll animations for sections
  const experienceAnimation = useScrollAnimation(0.1);
  const skillsAnimation = useScrollAnimation(0.1);
  const projectsAnimation = useScrollAnimation(0.1);
  const aboutAnimation = useScrollAnimation(0.1);
  const contactAnimation = useScrollAnimation(0.1);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About Me" },
    { id: "contact", label: "Contact" },
    { id: "resources", label: "Resources", isExternal: true },
  ];

  const skills = {
    "Languages & Databases": ["Python", "SQL", "Java", "MySQL"],
    "Distributed Systems": ["Kafka", "PySpark", "Docker", "REST Services"],
    "Cloud & Data Engineering": ["AWS (Glue, Lambda, S3)", "Airflow", "ETL/ELT"],
    "ML Data Systems": ["LangChain", "Redis", "Pandas", "Scikit-learn", "Keras", "Tensorflow"],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-semibold tracking-tight hover:text-muted-foreground transition-colors"
            >
              Hassan Abbas
            </button>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-6">
              {navItems.map((item) =>
                item.isExternal ? (
                  <Link
                    key={item.id}
                    to="/resources"
                    className="text-xs tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-xs tracking-wide transition-colors ${activeSection === item.id
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {item.label}
                  </button>
                ),
              )}
            </div>
            {/* Mobile Navigation */}
            <MobileNav navItems={navItems} activeSection={activeSection} onNavigate={scrollToSection} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 md:px-8 pt-20 overflow-hidden"
      >
        {/* Floating shapes - behind content */}
        <FloatingCircle size="300px" className="absolute top-20 left-10 animate-float opacity-35" />
        <FloatingCircle size="200px" className="absolute bottom-40 right-20 animate-float-slow opacity-30" />
        {/* <FloatingCircle size="150px" className="absolute top-1/2 right-1/4 animate-float-reverse opacity-30" /> */}
        <FloatingTriangle size="80px" className="absolute -top-5 -right-5 rotate-45 opacity-30" />
        <FloatingTriangle size="60px" className="absolute -bottom-3 left-10 rotate-12 opacity-40" />

        <div className="relative z-10 container max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              Hassan Abbas
            </h1>
            <div className="h-10 sm:h-12 md:h-14 lg:h-16 flex items-center">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
                {displayedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 pt-4">
              <a
                href="mailto:hassanab220.work@gmail.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 touch-target"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden xs:inline">Email</span>
              </a>
              <a
                href="https://linkedin.com/in/hassan-abbas-848549209"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 touch-target"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden xs:inline">LinkedIn</span>
              </a>
              <a
                href="https://medium.com/@hassanabbasg220"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 touch-target"
              >
                <FileText className="w-4 h-4" />
                <span className="hidden xs:inline">Medium</span>
              </a>
              <Link
                to="/resources"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 touch-target"
              >
                <LinkIcon className="w-4 h-4" />
                <span className="hidden xs:inline">Resources</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-8 py-20 bg-[#111] overflow-hidden"
      >
        {/* Subtle corner shapes */}
        <FloatingTriangle size="40px" className="absolute top-10 right-10 opacity-10 animate-float-slow" />
        <FloatingCircle size="60px" className="absolute bottom-20 left-5 opacity-[0.08] animate-float" />

        <div className="container max-w-4xl" ref={experienceAnimation.ref}>
          <h2
            className={`text-sm uppercase tracking-widest text-muted-foreground mb-8 sm:mb-12 transition-all duration-700 ${experienceAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Experience
          </h2>
          <div
            className={`space-y-12 transition-all duration-700 delay-100 ${experienceAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="border-l-2 border-border pl-4 sm:pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">Software Design Engineer</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">TeReSol Pvt. Ltd., Karachi</p>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground mt-1 md:mt-0 whitespace-nowrap">
                  Nov 2023 – Present
                </span>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-foreground/90">
                <li>
                  • Developed microservice-based data services in Quarkus and Flask, integrating multiple banking APIs
                  and orchestrating financial data flows.
                </li>
                <li>
                  • Improved IFRS 9 data ingestion performance by 10× (4 hours → 30 minutes) using JSON TABLE,
                  multi-threading, and optimized SQL pipelines.
                </li>
                <li>
                  • Engineered multi-step CTE-based SQL transformations for ECL and financial risk calculations across
                  datasets of 100k+ records.
                </li>
                <li>• Built Dockerized environments enabling reproducible development, testing, and deployment.</li>
                <li>
                  • <span className="text-muted-foreground">Tools:</span> Docker, MySQL, Flask, Pandas, Quarkus,
                  Airflow, Kafka, Distributed Systems
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">Certifications</h4>
                <div className="space-y-2 text-sm text-foreground/90">
                  <p>• Certified Data Engineer — Karachi AI</p>
                  <p>• AWS Educate: Cloud 101, Machine Learning Foundations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-8 py-20 bg-black overflow-hidden"
      >
        <FloatingTriangle size="30px" className="absolute top-20 right-16 opacity-[0.12] animate-float" />
        <FloatingCircle size="40px" className="absolute bottom-32 left-10 opacity-10 animate-float-slow" />

        <div className="container max-w-4xl" ref={skillsAnimation.ref}>
          <h2
            className={`text-sm uppercase tracking-widest text-muted-foreground mb-8 sm:mb-12 transition-all duration-700 ${skillsAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Core Skills & Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={category}
                className={`space-y-3 transition-all duration-700 ${skillsAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-base font-semibold text-foreground">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border bg-card text-foreground/90 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-8 py-20 bg-black overflow-hidden"
      >
        <FloatingTriangle size="35px" className="absolute top-16 left-12 opacity-10 animate-float-reverse" />
        <FloatingCircle size="50px" className="absolute bottom-24 right-8 opacity-[0.08] animate-float" />

        <div className="container max-w-4xl" ref={projectsAnimation.ref}>
          <h2
            className={`text-sm uppercase tracking-widest text-muted-foreground mb-8 sm:mb-12 transition-all duration-700 ${projectsAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Selected Projects
          </h2>
          <div className="space-y-8 sm:space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative border border-border p-4 sm:p-5 md:p-6 rounded-sm bg-card transition-all duration-700 hover:scale-[1.02] hover:border-foreground/30 ${projectsAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Accent shape that moves on hover */}
                <div className="absolute -top-2 -right-2 w-4 h-4 border border-white/20 rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                  <h3 className="text-base sm:text-lg font-semibold">{project.title}</h3>
                  <Link
                    to={`/resources#${project.slug}`}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 whitespace-nowrap touch-target"
                  >
                    View Links
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <p className="text-sm leading-relaxed text-foreground/90 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-8 py-20 bg-black overflow-hidden"
      >
        {/* Large background shapes for depth */}
        <FloatingCircle size="400px" className="absolute -top-32 -right-32 opacity-[0.05] animate-float-slow" />
        <FloatingCircle size="300px" className="absolute -bottom-24 -left-24 opacity-[0.06] animate-float" />
        <FloatingTriangle
          size="100px"
          className="absolute top-1/2 right-1/4 opacity-[0.08] rotate-12 animate-float-reverse"
        />

        <div className="relative z-10 container max-w-4xl" ref={aboutAnimation.ref}>
          <h2
            className={`text-sm uppercase tracking-widest text-muted-foreground mb-6 sm:mb-8 transition-all duration-700 ${aboutAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            About Me
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed text-foreground/90 transition-all duration-700 delay-100 ${aboutAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Data and Systems Engineer with a strong software engineering foundation and hands-on experience building scalable systems across on-premise and cloud environments. Brings a systems-thinking approach to designing and optimizing ETL pipelines, workflow orchestration, and batch/stream data processing, while applying core software engineering principles to data engineering problems.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-8 py-20 bg-black overflow-hidden"
      >
        {/* Large background shapes for depth */}
        <FloatingCircle size="350px" className="absolute top-16 left-16 opacity-[0.06] animate-float" />
        <FloatingTriangle
          size="120px"
          className="absolute bottom-20 right-20 opacity-10 rotate-45 animate-float-slow"
        />
        <FloatingCircle size="200px" className="absolute bottom-32 left-1/3 opacity-[0.05] animate-float-reverse" />

        <div className="relative z-10 container max-w-4xl" ref={contactAnimation.ref}>
          <h2
            className={`text-sm uppercase tracking-widest text-muted-foreground mb-8 sm:mb-12 transition-all duration-700 ${contactAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Contact
          </h2>
          <div
            className={`space-y-6 transition-all duration-700 delay-100 ${contactAnimation.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div>
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <a
                href="mailto:hello@hassanab.com"
                className="text-base sm:text-lg hover:text-muted-foreground transition-colors break-all"
              >
                hello@hassanab.com
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Location</p>
              <p className="text-base sm:text-lg">Karachi, Pakistan</p>
              <p className="text-sm text-muted-foreground">+92 312 2215921</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Links</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://linkedin.com/in/hassan-abbas-848549209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base hover:text-muted-foreground transition-colors flex items-center gap-2 touch-target break-all"
                >
                  <Linkedin className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden sm:inline">linkedin.com/in/hassan-abbas-848549209</span>
                  <span className="sm:hidden">LinkedIn Profile</span>
                </a>
                <a
                  href="https://medium.com/@hassanabbasg220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base hover:text-muted-foreground transition-colors flex items-center gap-2 touch-target break-all"
                >
                  <FileText className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden sm:inline">medium.com/@hassanabbasg220</span>
                  <span className="sm:hidden">Medium Blog</span>
                </a>
                <Link
                  to="/resources"
                  className="text-sm sm:text-base hover:text-muted-foreground transition-colors flex items-center gap-2 touch-target"
                >
                  <LinkIcon className="w-4 h-4 flex-shrink-0" />
                  All Resources & Links
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container max-w-4xl px-4 sm:px-6 md:px-8">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Hassan Abbas. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
