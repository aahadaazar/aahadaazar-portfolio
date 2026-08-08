import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Briefcase,
  ChevronDown,
  Code2,
  Database,
  Github,
  LoaderCircle,
  Mail,
  RefreshCw,
  Rocket,
} from "lucide-react";

const MEDIUM_FEED_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@abdulaahadaazar";
const MEDIUM_PROFILE_URL = "https://medium.com/@abdulaahadaazar";
const EMAIL_URL = "mailto:aahadaazar@hotmail.com";
const GITHUB_URL = "https://github.com/aahadaazar";

const surfaceClassName =
  "bg-paper-2 border border-rule rounded-xl p-6";

const workExperienceList = [
  {
    title: "Scalers",
    role: "Software Engineer",
    period: "Oct 2023 - Present",
    description:
      "Driving engineering excellence and building scalable solutions for startups.",
  },
  {
    title: "Chikoo",
    role: "Senior Software Engineer",
    period: "May 2023 - Oct 2023",
    description:
      "Led development initiatives and optimized core platform performance.",
  },
  {
    title: "Sudofy",
    role: "Software Engineer",
    period: "July 2022 - May 2023",
    description:
      "Full-stack development delivering robust applications for diverse clients.",
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
    title: "PSX Researcher",
    role: "AI Research Tool",
    disciplines: ["Product", "Data", "AI"],
    tech: ["Next.js", "TypeScript", "FastAPI", "CrewAI", "Clerk", "PostgreSQL"],
    description:
      "Research assistant focused on Pakistan Stock Exchange workflows, helping analyze companies, surface signals, and speed up market research.",
    href: "https://github.com/aahadaazar/psx-researcher",
  },
  {
    title: "Reception Agent",
    role: "AI Voice Agent",
    disciplines: ["Product", "Software", "AI"],
    tech: ["FastAPI", "Next.js", "Redis", "ElevenLabs"],
    description:
      "AI-powered reception workflow for handling inbound calls, collecting caller details, and streamlining front-desk interactions.",
    href: "https://github.com/aahadaazar/reception-agent",
  },
  {
    title: "Smart Notes",
    role: "AI Productivity App",
    disciplines: ["Product", "Data", "AI"],
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "Ollama",
      "Supabase",
      "Pinecone",
      "RAG",
    ],
    description:
      "Note-taking and summarization app built to turn raw notes into concise insights, organized takeaways, and more useful knowledge capture.",
    href: "https://github.com/aahadaazar/smart-notes",
  },
];

const capabilitiesList = [
  {
    title: "Software Engineering",
    icon: Code2,
    defining: ["React", "Next.js", "FastAPI"],
    remaining: [
      "React Hooks",
      "Redux",
      "TypeScript",
      "JavaScript",
      "Material UI",
      "Tailwind CSS",
      "Storybook",
      "Jest",
      "React Testing Library",
      "Playwright",
      "Cypress",
      "Node.js",
      "Django",
      "NestJS",
      "GraphQL",
      "Pytest",
      "Git",
      "GitHub",
      "CI/CD",
      "GitHub Actions",
      "Docker",
      "Sentry",
      "AWS",
    ],
  },
  {
    title: "Data Engineering",
    icon: Database,
    defining: ["PostgreSQL", "Redis"],
    remaining: [
      "Supabase",
      "MongoDB",
      "SQL",
      "AWS ElastiCache",
      "DynamoDB",
      "Pinecone",
      "PgVector",
      "HelixDB",
      "Neo4j",
    ],
  },
  {
    title: "AI Engineering",
    icon: BrainCircuit,
    defining: ["OpenAI API", "CrewAI", "RAG Pipelines"],
    remaining: [
      "Google ADK",
      "Gemini",
      "LangChain",
      "LangGraph",
      "Ollama",
      "Gradio",
      "Hugging Face",
    ],
  },
];

function SectionDivider({ icon: Icon, id, title, action }) {
  return (
    <div className="section-divider flex min-w-0 items-center gap-3">
      <Icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
      <h2 id={id} className="text-xl font-medium tracking-tight text-ink">
        {title}
      </h2>
      <div
        className="h-px min-w-4 flex-1 bg-rule"
        data-section-rule
        aria-hidden="true"
      />
      {action}
    </div>
  );
}

function SkillChip({ children }) {
  return (
    <span className="min-w-0 max-w-full rounded border border-rule bg-paper px-2.5 py-1 font-mono text-xs text-muted [overflow-wrap:anywhere]">
      {children}
    </span>
  );
}

function Body() {
  const [blogs, setBlogs] = useState([]);
  const [blogStatus, setBlogStatus] = useState("loading");
  const [blogRequestKey, setBlogRequestKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    setBlogStatus("loading");
    setBlogs([]);

    axios
      .get(MEDIUM_FEED_URL, { signal: controller.signal })
      .then((res) => {
        const items = Array.isArray(res.data?.items)
          ? res.data.items
              .filter((item) => item?.title && item?.link)
              .slice(0, 3)
          : [];

        setBlogs(items);
        setBlogStatus(items.length > 0 ? "success" : "empty");
      })
      .catch((error) => {
        if (axios.isCancel(error) || error?.code === "ERR_CANCELED") return;
        setBlogStatus("error");
      });

    return () => controller.abort();
  }, [blogRequestKey]);

  return (
    <section className="flex w-full min-w-0 flex-col gap-16 pb-20 md:gap-24">
      <section
        id="selected-work"
        aria-labelledby="selected-work-heading"
        className="flex min-w-0 scroll-mt-8 flex-col gap-5"
      >
        <SectionDivider
          icon={Rocket}
          id="selected-work-heading"
          title="Selected Work"
        />
        <div className="bento-grid min-w-0">
          {projectsList.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View the ${project.title} repository on GitHub`}
              className={`cell project-card ${
                index === 0
                  ? "project-card--lead span-2x2"
                  : "project-card--support span-2x1"
              } group flex min-w-0 flex-col justify-between`}
            >
              <div className="min-w-0">
                <div className="project-card__topline flex min-w-0 items-start justify-between gap-4">
                  <span className="project-card__number font-mono text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="project-card__role font-mono text-xs">
                    {project.role}
                  </span>
                  <ArrowUpRight
                    className="project-card__arrow h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
                <div className="project-card__body">
                  <div className="min-w-0">
                    <h3 className="project-card__title font-medium [overflow-wrap:anywhere]">
                      {project.title}
                    </h3>
                  </div>
                  <p className="project-card__description text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 min-w-0">
                <div className="project-card__disciplines flex flex-wrap gap-x-4 gap-y-2 border-y py-3">
                  {project.disciplines.map((discipline) => (
                    <span key={discipline} className="font-mono text-xs uppercase tracking-[0.1em]">
                      {discipline}
                    </span>
                  ))}
                </div>
                <div className="project-card__tech flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <SkillChip key={technology}>{technology}</SkillChip>
                  ))}
                </div>
                <span className="project-card__link mt-5 inline-flex items-center gap-2 font-mono text-xs transition-colors">
                  View repository
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="flex min-w-0 scroll-mt-8 flex-col gap-4"
      >
        <SectionDivider
          icon={Briefcase}
          id="experience-heading"
          title="Experience"
        />
        <article className="experience-ledger min-w-0">
          <ol className="min-w-0">
            {workExperienceList.map((job, index) => (
              <li
                key={`${job.title}-${job.period}`}
                className="experience-entry min-w-0"
              >
                <span className="experience-entry__number font-mono text-xs text-muted" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="job-heading min-w-0">
                  <div className="min-w-0">
                    <h3 className="text-lg font-medium text-ink [overflow-wrap:anywhere]">
                      {job.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {job.role}
                    </p>
                  </div>
                </div>
                <p className="max-w-3xl text-sm leading-relaxed text-muted [overflow-wrap:anywhere]">
                  {job.description}
                </p>
                <span className="experience-entry__period shrink-0 font-mono text-xs text-muted">
                  {job.period}
                </span>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section
        id="capabilities"
        aria-labelledby="capabilities-heading"
        className="flex min-w-0 scroll-mt-8 flex-col gap-4"
      >
        <SectionDivider
          icon={Code2}
          id="capabilities-heading"
          title="Capabilities"
        />
        <article className="capability-index min-w-0">
          <div className="capability-grid min-w-0">
            {capabilitiesList.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <section
                  key={capability.title}
                  aria-labelledby={`capability-${index}`}
                  className="capability-column min-w-0"
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <Icon
                      className="h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <h3
                      id={`capability-${index}`}
                      className="font-mono text-sm font-medium uppercase tracking-wider text-muted [overflow-wrap:anywhere]"
                    >
                      {capability.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {capability.defining.map((skill) => (
                      <SkillChip key={skill}>{skill}</SkillChip>
                    ))}
                  </div>
                  <details className="capability-details mt-5 min-w-0 border-t border-rule pt-4">
                    <summary className="flex min-h-[44px] cursor-pointer items-center gap-3 py-3 font-mono text-xs text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper-2">
                      <span>Show {capability.remaining.length} more tools</span>
                      <ChevronDown
                        className="capability-details__chevron h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="capability-details__content flex min-w-0 flex-wrap gap-2 pb-1 pt-2">
                      {capability.remaining.map((skill) => (
                        <SkillChip key={skill}>{skill}</SkillChip>
                      ))}
                    </div>
                  </details>
                </section>
              );
            })}
          </div>
        </article>
      </section>

      <section
        id="writing"
        aria-labelledby="writing-heading"
        aria-busy={blogStatus === "loading"}
        className="flex min-w-0 scroll-mt-8 flex-col gap-4"
      >
        <SectionDivider
          icon={BookOpen}
          id="writing-heading"
          title="Latest Writing"
          action={
            <a
              href={MEDIUM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-[44px] shrink-0 items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:inline-flex"
            >
              Medium profile
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          }
        />

        <div className="min-w-0" aria-live="polite">
          {blogStatus === "loading" && (
            <div
              className={`${surfaceClassName} flex min-h-[140px] items-center gap-3 text-sm text-muted`}
              role="status"
            >
              <LoaderCircle
                className="h-5 w-5 shrink-0 animate-spin text-accent"
                aria-hidden="true"
              />
              Loading recent Medium articles…
            </div>
          )}

          {blogStatus === "error" && (
            <div className={`${surfaceClassName} min-h-[140px]`} role="alert">
              <h3 className="font-medium text-ink">
                Medium articles couldn&apos;t load
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                Try the feed again, or read Aahad&apos;s writing directly on
                Medium.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setBlogRequestKey((key) => key + 1)}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded border border-rule px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <RefreshCw className="h-4 w-4" aria-hidden="true" />
                  Try again
                </button>
                <a
                  href={MEDIUM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 px-2 py-2 text-sm font-medium text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Read on Medium
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          )}

          {blogStatus === "empty" && (
            <div className={`${surfaceClassName} min-h-[140px]`}>
              <h3 className="font-medium text-ink">
                No recent articles are available from the feed
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                Aahad&apos;s published writing is still available directly on
                Medium.
              </p>
              <a
                href={MEDIUM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Read on Medium
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          )}

          {blogStatus === "success" && (
            <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3">
              {blogs.map((blog) => (
                <a
                  key={blog.guid || blog.link || blog.title}
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cell writing-card group flex min-h-[160px] min-w-0 flex-col justify-between bg-paper-2"
                >
                  <h3 className="line-clamp-3 text-base font-medium text-ink transition-colors group-hover:text-accent [overflow-wrap:anywhere]">
                    {blog.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors group-hover:text-accent">
                    Read on Medium
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>

        <a
          href={MEDIUM_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center gap-2 self-start font-mono text-xs text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:hidden"
        >
          Medium profile
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </section>

      <footer
        className="contact-folio contact-folio--ink flex min-w-0 flex-col gap-8 md:flex-row md:items-end md:justify-between"
      >
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.12em]">
            Next / Conversation
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-medium tracking-[-0.035em] md:text-4xl">
            Have a product problem worth untangling?
          </h2>
          <p className="contact-folio__copy mt-3 max-w-2xl text-sm leading-relaxed">
            For roles, product work, or collaboration, email Aahad directly.
          </p>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={EMAIL_URL}
            className="contact-folio__primary inline-flex min-h-[44px] items-center justify-center gap-2 rounded border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email Aahad
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-folio__secondary inline-flex min-h-[44px] items-center justify-center gap-2 rounded border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </section>
  );
}

export default Body;
