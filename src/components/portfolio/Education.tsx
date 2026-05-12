import SectionHeader from "./SectionHeader";
import { GraduationCap, School } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    period: "2023 – 2027",
    title: "Bachelor of Engineering — Computer Science (AI & ML)",
    place: "Rathinam Technical Campus, Coimbatore",
    detail: "Pursuing Honours in Cybersecurity and Data Privacy.",
  },
  {
    icon: School,
    period: "2021 – 2023",
    title: "Higher Secondary Education",
    place: "National Model Matriculation Higher Secondary School",
    detail: "Mathematics and Computer Science stream.",
  },
];

const Education = () => (
  <section id="education" className="section-pad bg-secondary/40">
    <div className="container-px max-w-7xl mx-auto">
      <SectionHeader eyebrow="Education" title="Academic Journey" />

      <div className="mt-14 max-w-4xl mx-auto relative">
        <div aria-hidden className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px bg-border md:-translate-x-1/2" />
        <div className="space-y-10">
          {items.map((it, i) => (
            <div key={it.title} className={`relative md:grid md:grid-cols-2 md:gap-12 items-start ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className={`pl-16 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                <span className="eyebrow">{it.period}</span>
                <h3 className="mt-2 text-xl md:text-2xl font-semibold text-primary">{it.title}</h3>
                <p className="mt-2 text-sm text-accent font-medium">{it.place}</p>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{it.detail}</p>
              </div>
              <div aria-hidden className="absolute left-0 md:left-1/2 top-1 md:-translate-x-1/2 w-12 h-12 rounded-full bg-card border border-border shadow-md flex items-center justify-center">
                <it.icon className="w-5 h-5 text-accent" />
              </div>
              <div />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
