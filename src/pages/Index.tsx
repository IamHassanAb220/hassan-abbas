import { useState, useEffect } from "react";
import { ExternalLink, Github, Linkedin, Mail, FileText } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ["Data Engineer", "Software Engineer AI/ML"];

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
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About Me" },
    { id: "contact", label: "Contact" },
  ];

  const projects = [
    {
      title: "On-Prem ETL & Data Warehousing",
      description: "Orchestrated automated ETL workflows with Apache Airflow for data acquisition, transformation, and loading. Engineered Kimball-style dimensional data warehouse with star schema, transforming OLTP records into optimized OLAP structures.",
      tech: ["Apache Airflow", "MySQL", "Python", "Star Schema"],
      github: "#", // Replace with actual GitHub link
      demo: "#",  // Replace with actual demo link
    },
    {
      title: "Cloud ETL & Distributed Processing",
      description: "Built serverless ETL pipelines on AWS using Lambda and Glue with S3-triggered event-driven architecture. Processed 300k+ records using PySpark across multiple cloud platforms (GCP Dataflow/Dataproc, Databricks).",
      tech: ["AWS Glue", "Lambda", "S3", "PySpark", "GCP", "Databricks"],
      github: "#",
      demo: "#",
    },
    {
      title: "Real-Time Streaming Platform",
      description: "Developed end-to-end real-time data pipeline with custom Kafka producers and consumers. Architected low-latency Streamlit dashboard for monitoring message flow, throughput, and system performance.",
      tech: ["Apache Kafka", "Python", "Streamlit", "Event-Driven Architecture"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Data Systems & RAG Pipeline",
      description: "Engineered RAG-based AI query system using FAISS vector retrieval and LangChain orchestration. Implemented multi-layer caching with Redis for both chat memory and vector storage. Containerized application using Docker.",
      tech: ["LangChain", "FAISS", "Docker", "Redis", "OpenAI", "GROQ"],
      github: "#",
      demo: "#",
    },
  ];

  const skills = {
    "Languages & Databases": ["Python", "SQL", "Java", "MySQL"],
    "Distributed Systems": ["Kafka", "PySpark", "Docker", "REST Services"],
    "Cloud & Data Engineering": ["AWS (Glue, Lambda, S3)", "Airflow", "ETL/ELT"],
    "ML Data Systems": ["LangChain", "Redis", "Pandas"],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-semibold tracking-tight hover:text-muted-foreground transition-colors"
            >
              Hassan Abbas
            </button>
            <div className="flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs tracking-wide transition-colors ${
                    activeSection === item.id
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">Hassan Abbas</h1>
            <div className="h-12 md:h-16 flex items-center">
              <p
                key={currentTitle}
                className="text-2xl md:text-3xl text-muted-foreground font-light animate-fade-in"
              >
                {titles[currentTitle]}
              </p>
            </div>
            <div className="flex gap-6 pt-4">
              <a
                href="mailto:hassanab220.work@gmail.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="https://linkedin.com/in/hassan-abbas-848549209"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://medium.com/@hassanabbasg220"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Medium
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center px-6 py-20">
        <div className="container max-w-4xl">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12">Experience</h2>
          <div className="space-y-12">
            <div className="border-l-2 border-border pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Software Design Engineer</h3>
                  <p className="text-muted-foreground">TeReSol Pvt. Ltd., Karachi</p>
                </div>
                <span className="text-sm text-muted-foreground mt-1 md:mt-0">Nov 2023 – Present</span>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-foreground/90">
                <li>
                  • Developed microservice-based data services in Quarkus and Flask, integrating multiple
                  banking APIs and orchestrating financial data flows.
                </li>
                <li>
                  • Improved IFRS 9 data ingestion performance by 10× (4 hours → 30 minutes) using JSON
                  TABLE, multi-threading, and optimized SQL pipelines.
                </li>
                <li>
                  • Engineered multi-step CTE-based SQL transformations for ECL and financial risk
                  calculations across datasets of 100k+ records.
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
      <section id="skills" className="min-h-screen flex items-center px-6 py-20">
        <div className="container max-w-4xl">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12">Core Skills & Competencies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-3">
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
      <section id="projects" className="min-h-screen flex items-center px-6 py-20">
        <div className="container max-w-4xl">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12">Selected Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="border border-border p-6 rounded-sm bg-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-foreground/90 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                    >
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
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="container max-w-4xl">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">About Me</h2>
          <p className="text-lg leading-relaxed text-foreground/90">
            Results-driven Data and Systems Engineer with hands-on experience building distributed data
            pipelines, optimizing ETL processes (10× speedup on financial workloads), and deploying scalable
            cloud-based infrastructure. Skilled in batch/stream processing, workflow orchestration, SQL
            performance tuning, and end-to-end data system design across on-premise and cloud environments.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="container max-w-4xl">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12">Contact</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <a
                href="mailto:hassanab220.work@gmail.com"
                className="text-lg hover:text-muted-foreground transition-colors"
              >
                hassanab220.work@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Location</p>
              <p className="text-lg">Karachi, Pakistan</p>
              <p className="text-sm text-muted-foreground">+92 312 2215921</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Links</p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://linkedin.com/in/hassan-abbas-848549209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:text-muted-foreground transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  linkedin.com/in/hassan-abbas-848549209
                </a>
                <a
                  href="https://medium.com/@hassanabbasg220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:text-muted-foreground transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  medium.com/@hassanabbasg220
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container max-w-4xl px-6">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Hassan Abbas. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
