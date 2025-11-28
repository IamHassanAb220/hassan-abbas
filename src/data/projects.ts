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
    description: "Orchestrated automated ETL workflows with Apache Airflow for data acquisition, transformation, and loading. Engineered Kimball-style dimensional data warehouse with star schema, transforming OLTP records into optimized OLAP structures.",
    tech: ["Apache Airflow", "MySQL", "Python", "Star Schema"],
    links: [
      { type: 'github', label: 'GitHub Repository', url: '#' },
      { type: 'demo', label: 'Live Demo', url: '#' },
      { type: 'docs', label: 'Documentation', url: '#' },
    ],
  },
  {
    slug: "cloud-etl",
    title: "Cloud ETL & Distributed Processing",
    description: "Built serverless ETL pipelines on AWS using Lambda and Glue with S3-triggered event-driven architecture. Processed 300k+ records using PySpark across multiple cloud platforms (GCP Dataflow/Dataproc, Databricks).",
    tech: ["AWS Glue", "Lambda", "S3", "PySpark", "GCP", "Databricks"],
    links: [
      { type: 'github', label: 'GitHub Repository', url: '#' },
      { type: 'demo', label: 'Live Demo', url: '#' },
      { type: 'blog', label: 'Technical Blog Post', url: '#' },
    ],
  },
  {
    slug: "realtime-streaming",
    title: "Real-Time Streaming Platform",
    description: "Developed end-to-end real-time data pipeline with custom Kafka producers and consumers. Architected low-latency Streamlit dashboard for monitoring message flow, throughput, and system performance.",
    tech: ["Apache Kafka", "Python", "Streamlit", "Event-Driven Architecture"],
    links: [
      { type: 'github', label: 'GitHub Repository', url: '#' },
      { type: 'demo', label: 'Live Demo', url: '#' },
      { type: 'video', label: 'Demo Video', url: '#' },
    ],
  },
  {
    slug: "ai-rag-pipeline",
    title: "AI Data Systems & RAG Pipeline",
    description: "Engineered RAG-based AI query system using FAISS vector retrieval and LangChain orchestration. Implemented multi-layer caching with Redis for both chat memory and vector storage. Containerized application using Docker.",
    tech: ["LangChain", "FAISS", "Docker", "Redis", "OpenAI", "GROQ"],
    links: [
      { type: 'github', label: 'GitHub Repository', url: '#' },
      { type: 'demo', label: 'Live Demo', url: '#' },
      { type: 'docs', label: 'Architecture Docs', url: '#' },
      { type: 'blog', label: 'Technical Write-up', url: '#' },
    ],
  },
];
