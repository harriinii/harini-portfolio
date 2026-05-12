import SectionHeader from "./SectionHeader";
import { Brain, Lightbulb, Users, Target } from "lucide-react";

const values = [
  { icon: Brain, label: "Continuous Learning" },
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: Users, label: "Leadership & Teamwork" },
  { icon: Target, label: "Impact-Driven" },
];

const About = () => (
  <section id="about" className="section-pad bg-background">
    <div className="container-px max-w-7xl mx-auto">
      <SectionHeader eyebrow="About Me" title={<>Designing intelligent solutions, <span className="italic text-accent">not just code</span></>} />

      <div className="mt-14 grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-3 space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p>
            I am a <span className="text-primary font-medium">pre-final year Artificial Intelligence and Machine Learning</span> student
            with a strong interest in Generative AI, Large Language Models, RAG, and AI Agents. I enjoy building
            practical AI solutions that solve real-world problems and improve user experience.
          </p>
          <p>
            I'm passionate about continuous learning, problem-solving, and creating impactful technology. Along with
            technical skills, I value <span className="text-primary font-medium">communication, leadership, adaptability, and teamwork</span>.
          </p>
          <p>
            My goal is to build a strong career in technology by contributing to innovative and meaningful solutions.
          </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {values.map(({ icon: Icon, label }) => (
            <div key={label} className="card-elevated p-5">
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <div className="text-sm font-semibold text-primary">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
