import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Terminal, Code2, BookOpen, Briefcase, Cpu, BrainCircuit, Rocket } from "lucide-react";

const workExperienceList = [
  {
    title: "Scalers",
    role: "Software Engineer",
    period: "Oct 2023 - Present",
    description: "Driving engineering excellence and building scalable solutions for startups.",
  },
  {
    title: "Chikoo",
    role: "Senior Software Engineer",
    period: "May 2023 - Oct 2023",
    description: "Led development initiatives and optimized core platform performance.",
  },
  {
    title: "Sudofy",
    role: "Software Engineer",
    period: "July 2022 - May 2023",
    description: "Full-stack development delivering robust applications for diverse clients.",
  },
  {
    title: "Sudofy",
    role: "Associate Software Engineer",
    period: "May 2018 - June 2022",
    description: "Started as an intern and grew into a key engineering role.",
  },
];

const projectsList = [
  {
    title: "DevConnect",
    role: "Full-Stack Developer",
    tech: ["React", "Next.js", "Django", "Postgres", "GraphQL", "Material UI"],
    description: "Built a developer collaboration platform enabling users to connect, share portfolios, and form teams.",
    image: "/projects/devconnect.svg",
  },
  {
    title: "Student Guidance AI Chat Agent",
    role: "Full-Stack Developer",
    tech: ["FastAPI", "Gradio", "OpenAI", "Guardrails", "JSON Prompting"],
    description: "Designed and deployed a conversational career guidance system using FastAPI and Gradio, integrating structured LLM prompting with guardrails to prevent hallucination.",
    image: "/projects/student-ai.svg",
  },
  {
    title: "Smart Note Summarizer",
    role: "Full-Stack Developer",
    tech: ["React", "FastAPI", "Ollama", "Supabase", "Pinecone", "Docker"],
    description: "Implemented a FastAPI backend integrating LLMs through Ollama to distill notes and produce topic tags.",
    image: "/projects/smart-notes.svg",
  },
];

const skillsList = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["JavaScript", "Next.js", "React", "Redux", "GraphQL", "Tailwind", "TypeScript"],
  },
  {
    category: "Backend",
    icon: Terminal,
    items: ["Node.js", "NestJS", "Python", "FastAPI", "Django", "PostgreSQL", "Supabase", "AWS"],
  },
  {
    category: "AI Engineering",
    icon: BrainCircuit,
    items: ["Google ADK", "OpenAI SDK", "Ollama", "Pinecone", "LangChain", "Hugging Face"],
  },
  {
    category: "Data & Analytics",
    icon: Cpu,
    items: ["Power BI", "SQL", "Python", "AWS Athena", "Tableau", "Google Analytics"],
  },
];

function Body() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@abdulaahadaazar"
      )
      .then((res) => {
        setBlogs(res.data.items);
      });
  }, []);

  return (
    <section className="bento-grid w-full pb-20">
      {/* Intro Section - Wide cell */}
      <article className="cell span-4x1 reveal flex flex-col justify-center text-center py-10 bg-paper-2" style={{ '--i': 1 }}>
        <p className="text-xl md:text-2xl text-muted leading-relaxed font-light">
          Hi! I'm <span className="text-accent font-medium">Aahad</span>. I'm currently a Senior Software Engineer at{" "}
          <span className="font-medium text-ink">Scalers</span>.
          <br />
          I specialize in elevating startups through <span className="text-accent font-mono tracking-tight">Engineering</span>,{" "}
          <span className="text-accent font-mono tracking-tight">AI</span>, and <span className="text-accent font-mono tracking-tight">Data</span>.
        </p>
      </article>

      {/* Experience - Tall cell */}
      <article className="cell span-2x2 reveal flex flex-col bg-paper-2" style={{ '--i': 2 }}>
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="text-accent w-5 h-5" />
          <h2 className="text-xl font-medium text-ink tracking-tight">Experience</h2>
        </div>
        <div className="grid gap-5 flex-1">
          {workExperienceList.map((job, index) => (
            <div key={index} className="flex flex-col gap-1 border-b border-rule pb-4 last:border-0 last:pb-0">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-medium text-ink">{job.title}</h3>
                <span className="text-xs font-mono text-muted">{job.period}</span>
              </div>
              <p className="text-accent text-sm font-medium">{job.role}</p>
              <p className="text-muted text-sm leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>
      </article>

      {/* Tech Stack - Tall cell */}
      <article className="cell span-2x2 reveal flex flex-col bg-paper-2" style={{ '--i': 3 }}>
        <div className="flex items-center gap-3 mb-6">
          <Cpu className="text-accent w-5 h-5" />
          <h2 className="text-xl font-medium text-ink tracking-tight">Tech Stack</h2>
        </div>
        <div className="grid gap-6 flex-1">
          {skillsList.map((skillGroup) => {
            const Icon = skillGroup.icon;
            return (
              <div key={skillGroup.category} className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-ink">
                  <Icon className="text-accent w-4 h-4" />
                  <h3 className="font-medium text-sm uppercase tracking-wider text-muted">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-paper text-muted border border-rule hover:border-accent hover:text-ink transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </article>

      {/* Featured Projects - Each is a wide cell */}
      <article className="cell span-4x1 reveal flex items-center justify-center bg-transparent border-none p-0" style={{ '--i': 4 }}>
         <div className="flex items-center gap-3 w-full">
           <Rocket className="text-accent w-5 h-5" />
           <h2 className="text-xl font-medium text-ink tracking-tight">Featured Projects</h2>
           <div className="h-px bg-rule flex-1 ml-4" />
         </div>
      </article>

      {projectsList.map((project, index) => (
        <article key={project.title} className="cell span-2x1 reveal flex flex-col justify-between bg-paper-2" style={{ '--i': 5 + index }}>
          <div>
            <h3 className="text-lg font-medium text-ink group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-accent mt-1 block mb-3">
              {project.role}
            </span>
            <p className="text-muted text-sm mb-4 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs font-mono rounded bg-paper text-muted border border-rule"
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      ))}

      {/* Blogs - wide header then individual cells */}
      <article className="cell span-4x1 reveal flex items-center justify-center bg-transparent border-none p-0 mt-4" style={{ '--i': 8 }}>
         <div className="flex items-center gap-3 w-full">
           <BookOpen className="text-accent w-5 h-5" />
           <h2 className="text-xl font-medium text-ink tracking-tight">Latest Writing</h2>
           <div className="h-px bg-rule flex-1 ml-4" />
         </div>
      </article>
      
      {blogs.map((blog, index) => (
        <a
          key={blog.title}
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cell span-1x1 reveal group flex flex-col justify-between bg-paper-2"
          style={{ '--i': 9 + index }}
        >
          <h3 className="text-base font-medium text-ink group-hover:text-accent transition-colors line-clamp-3">
            {blog.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-muted font-mono mt-4 group-hover:text-accent transition-colors">
            <span>Read on Medium</span>
            <span>→</span>
          </div>
        </a>
      ))}
    </section>
  );
}

export default Body;
