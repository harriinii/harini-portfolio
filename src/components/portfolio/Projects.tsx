import SectionHeader from "./SectionHeader";
import { ArrowUpRight, Bot, Eye, Leaf, MessagesSquare } from "lucide-react";

const projects = [
  {
    icon: MessagesSquare,
    title: "Cura AI – Smart Complaint Management System",
    tag: "RAG + LLM",
    description:
      "A retrieval-augmented complaint management system that prioritizes urgent issues and streamlines complaint resolution using LLM-powered analysis.",
    stack: ["React", "FastAPI", "Twilio API", "LLM"],
    url: "https://github.com/harriinii/Cura-Ai",
  },
  {
    icon: Bot,
    title: "Gmail-to-WhatsApp AI Agent",
    tag: "AI Agent",
    description:
      "Autonomous agent that summarizes incoming emails using an LLM and pushes concise notifications to WhatsApp via Gmail and Twilio APIs.",
    stack: ["LLM", "Gmail API", "Twilio", "Python"],
    url: "https://github.com/harriinii/Gmail-to-WhatsApp-AI-Agent",
  },
  {
    icon: Eye,
    title: "Gaze-Control Virtual Mouse",
    tag: "Computer Vision",
    description:
      "Real-time hands-free cursor control system using eye tracking and blink detection — built for accessibility scenarios.",
    stack: ["OpenCV", "Python", "CV", "Real-time"],
    url: "https://github.com/harriinii/Gaze-Control-Virtual-Mouse",
  },
  {
    icon: Leaf,
    title: "Potato Disease Detection",
    tag: "Deep Learning",
    description:
      "CNN-based image classifier identifying potato leaf diseases, deployed via Streamlit for interactive real-time predictions.",
    stack: ["CNN", "TensorFlow", "Streamlit"],
    url: "https://github.com/harriinii/Potato-Disease-Detection",
  },
];

const Projects = () => (
  <section id="projects" className="section-pad bg-background">
    <div className="container-px max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Projects"
        title={<>Selected work in <span className="italic text-accent">Applied AI</span></>}
        subtitle="A curated selection of projects spanning Generative AI, computer vision, and deep learning."
      />

      <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-elevated p-7 md:p-8 group flex flex-col hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-500">
                <p.icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                {p.tag}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed flex-1">{p.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">View on GitHub</span>
              <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-accent group-hover:rotate-12 transition-all" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
