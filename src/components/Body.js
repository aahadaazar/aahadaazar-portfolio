import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
    description: "Designed and deployed a conversational career guidance system using FastAPI and Gradio, integrating structured LLM prompting with guardrails to prevent hallucination and ensure reliable recommendations.",
    image: "/projects/student-ai.svg",
  },
  {
    title: "Smart Note Summarizer + Semantic Search",
    role: "Full-Stack Developer",
    tech: ["React", "FastAPI", "Ollama", "Supabase", "Pinecone", "Docker"],
    description: "Implemented a FastAPI backend integrating LLMs through Ollama to distill notes and produce topic tags, reducing manual tagging efforts by 70% and accelerating data organization.",
    image: "/projects/smart-notes.svg",
  },
];

const skillsList = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["JavaScript", "Next.js", "React", "Redux", "GraphQL", "Tailwind", "TypeScript", "Material UI"],
  },
  {
    category: "Backend",
    icon: Terminal,
    items: ["Node.js", "NestJS", "Python", "FastAPI", "Django", "PostgreSQL", "Supabase", "AWS"],
  },
  {
    category: "AI Engineering",
    icon: BrainCircuit,
    items: [
      "Google ADK",
      "OpenAI SDK",
      "Ollama",
      "Pinecone",
      "LangChain",
      "Hugging Face",
      "LlamaIndex",
      "Vercel AI SDK"
    ],
  },
  {
    category: "Data & Analytics",
    icon: Cpu,
    items: ["Power BI", "SQL", "Python", "AWS Athena", "Tableau", "Google Analytics"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex-1 flex flex-col gap-16 pb-20"
    >
      {/* Intro Section */}
      <motion.section variants={itemVariants} className="text-center max-w-2xl mx-auto">
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
          Hi! I'm <span className="text-cyan-400 font-bold">Aahad</span>. I'm currently a Senior Software Engineer at{" "}
          <span className="font-bold text-white">Scalers</span>.
          <br />
          I specialize in elevating startups through <span className="text-violet-400 font-mono">Engineering</span>,{" "}
          <span className="text-cyan-400 font-mono">AI</span>, and <span className="text-emerald-400 font-mono">Data</span>.
        </p>
      </motion.section>

      {/* Experience Section */}
      <motion.section variants={itemVariants}>
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="text-cyan-400" />
          <h2 className="text-2xl font-bold text-white">Experience</h2>
          <div className="h-px bg-slate-800 flex-1" />
        </div>
        <div className="grid gap-6">
          {workExperienceList.map((job, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-cyan-500/50 transition-colors overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {job.title}
                </h3>
                <span className="text-sm font-mono text-slate-500">{job.period}</span>
              </div>
              <p className="text-slate-400 font-medium mb-2">{job.role}</p>
              <p className="text-slate-500 text-sm">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section variants={itemVariants}>
        <div className="flex items-center gap-3 mb-8">
          <Cpu className="text-violet-400" />
          <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
          <div className="h-px bg-slate-800 flex-1" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {skillsList.map((skillGroup) => {
            const Icon = skillGroup.icon;
            return (
              <div key={skillGroup.category} className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4 text-slate-200">
                  <Icon size={20} className="text-violet-400" />
                  <h3 className="font-bold">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-slate-800 text-slate-300 border border-slate-700 hover:border-violet-500/50 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section variants={itemVariants}>
        <div className="flex items-center gap-3 mb-8">
          <Rocket className="text-fuchsia-400" />
          <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
          <div className="h-px bg-slate-800 flex-1" />
        </div>
        <div className="grid gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-fuchsia-500/50 transition-all"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Container */}
                <div className="relative w-full md:w-2/5 h-56 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-300" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Container */}
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="flex flex-col mb-2">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-fuchsia-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-fuchsia-400 mt-1">
                      {project.role}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/50 group-hover:border-fuchsia-500/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Blogs Section */}
      <motion.section variants={itemVariants}>
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-emerald-400" />
          <h2 className="text-2xl font-bold text-white">Latest Writing</h2>
          <div className="h-px bg-slate-800 flex-1" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <motion.a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="block bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all group"
            >
              <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                {blog.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mt-4">
                <span>Read on Medium</span>
                <span>→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Body;
