import SectionHeader from "./SectionHeader";
import { Sparkles, Brain, Code2, Cloud, Heart } from "lucide-react";

const groups = [
  {
    icon: Sparkles,
    title: "Generative AI & AI Agents",
    skills: ["LLMs", "RAG", "Prompt Engineering", "Embeddings", "Vector Databases", "LangChain"],
  },
  {
    icon: Brain,
    title: "ML, NLP & Computer Vision",
    skills: ["Model Training", "TF-IDF", "NER", "CNN", "OpenCV"],
  },
  {
    icon: Code2,
    title: "Programming",
    skills: ["Java", "Python", "C", "SQL", "NumPy", "Pandas"],
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    skills: ["AWS (Basics)", "APIs", "Git", "GitHub", "Streamlit"],
  },
  {
    icon: Heart,
    title: "Soft Skills",
    skills: ["Communication", "Leadership", "Teamwork", "Analytical Thinking", "Organization", "Persistence"],
  },
];

const Skills = () => (
  <section id="skills" className="section-pad bg-secondary/40">
    <div className="container-px max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Skills"
        title={<>A toolkit built for <span className="italic text-accent">real-world AI</span></>}
        subtitle="Five focused capability areas combining modern AI engineering with strong fundamentals."
      />

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, i) => (
          <article
            key={g.title}
            className={`card-elevated p-7 ${i === 0 ? "lg:col-span-2 bg-primary text-primary-foreground border-primary [&_*]:!text-primary-foreground" : ""}`}
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${i === 0 ? "bg-accent text-accent-foreground" : "bg-accent/15 text-accent"}`}>
              <g.icon className="w-5 h-5" />
            </div>
            <h3 className={`text-xl font-semibold mb-4 ${i === 0 ? "" : "text-primary"}`}>{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
                    i === 0
                      ? "bg-primary-foreground/10 border-primary-foreground/20"
                      : "bg-background border-border text-muted-foreground"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
