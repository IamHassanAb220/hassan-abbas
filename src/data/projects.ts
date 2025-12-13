export interface ProjectLink {
  type: 'github' | 'demo' | 'docs' | 'blog' | 'video';
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: "on-prem-etl",
    title: "On-Prem ETL & Data Warehousing",
    description:
      "A collection of on-premise data engineering projects, including a Kimball-style dimensional data modeling project and a production-grade ETL orchestration pipeline.",
    tech: ["Apache Airflow", "MySQL", "Python", "Star Schema"],
    links: [
      {
        type: "demo",
        label: "Dimensional Data Modeling Project",
        url: "https://www.loom.com/share/9c900a2ac0cf42a98ba9881e15399314",
      },
      {
        type: "demo",
        label: "Airflow-Based ETL Project",
        url: "https://youtu.be/M2peozO1-N4",
      },
    ],
  },
  {
    slug: "cloud-etl",
    title: "Cloud ETL & Distributed Processing",
    description:
      "A set of cloud-based data engineering projects showcasing both serverless ETL and large-scale distributed processing.",
    tech: ["AWS Glue", "Lambda", "S3", "PySpark", "GCP", "Databricks"],
    links: [
      {
        type: "demo",
        label: "AWS Serverless ETL Project",
        url: "https://youtu.be/AM5AUbgFbsE",
      },
      {
        type: "demo",
        label: "Distributed PySpark Processing Project",
        url: "https://youtu.be/y9MkjKb1WqA",
      },
    ],
  },
  {
    slug: "realtime-streaming",
    title: "Real-Time Streaming Platform",
    description:
      "An end-to-end real-time data streaming project demonstrating event-driven architectures. Includes custom Kafka producers and consumers for streaming ingestion and a low-latency Streamlit dashboard for real-time monitoring and analytics.",
    tech: ["Apache Kafka", "Python", "Streamlit", "Event-Driven Architecture"],
    links: [
      {
        type: "video",
        label: "Real-Time Streaming Demo",
        url: "https://youtu.be/dWyXsXsicxU",
      },
    ],
  },
  {
    slug: "ai-rag-pipeline",
    title: "AI Data Systems & RAG Pipeline",
    description:
      "A collection of AI-focused data system projects centered on prompt engineering, adaptive query routing, and Retrieval-Augmented Generation (RAG). These projects include a simple startup idea generator and an end-to-end RAG pipeline and a RAG pipeline that dynamically adjusts its execution flow based on query intent. The system covers data ingestion through LLM response generation and demonstrates vector search with RedisVL, LLM orchestration using LangChain, intent-aware prompt routing, semantic caching, and chat memory—highlighting scalable and modular AI system design.",
    tech: ["LangChain", "FAISS", "Docker", "Redis", "OpenAI", "GROQ", "RedisVL", "Streamlit", "n8n", "KNIME", "FastAPI"],
    links: [
      {
        type: "demo",
        label: "Complete RAG Pipeline (n8n, KNIME, FastAPI) | Upcoming",
        url: "/upcoming",
      },
      {
        type: "demo",
        label: "Startup Idea Generator (Streamlit + Groq API)",
        url: "https://youtu.be/HNHVn5k6HeI",
      },
      {
        type: "github",
        label: "Adaptive Query Routing Pipeline for LLM Applications",
        url: "https://github.com/IamHassanAb/chatbot_utility_service",
      },
    ],
  },
];
