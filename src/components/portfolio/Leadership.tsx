import SectionHeader from "./SectionHeader";
import { Trophy, Users, Mic, FileText } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Class Representative",
    description:
      "Served three semesters during 1st and 2nd year — managing communication between faculty and students and coordinating academic activities.",
  },
  {
    icon: Mic,
    title: "Symposium Event Head",
    description:
      "Led the college symposium as student head — managing participant coordination, event schedules, communication, and certificate distribution.",
  },
  {
    icon: Trophy,
    title: "1st Prize — College Hackathon",
    description:
      "Won first place in an internal college hackathon as part of a three-member team for an innovative technical solution.",
    url: "https://drive.google.com/file/d/1CEGvdq7z9C2vR-d5LkFBxcQuWVjqworb/view?usp=drive_link",
  },
  {
    icon: FileText,
    title: "Paper Presentation",
    description:
      "Presented an IoT-Based LPG Gas Leakage Detection System at an inter-college symposium.",
  },
];

const Leadership = () => (
  <section id="leadership" className="section-pad bg-background">
    <div className="container-px max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Leadership & Achievements"
        title={<>Initiative beyond the <span className="italic text-accent">classroom</span></>}
      />

      <div className="mt-14 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {items.map((it) => {
          const Wrapper: any = it.url ? "a" : "article";
          const wrapperProps = it.url
            ? { href: it.url, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Wrapper
              key={it.title}
              {...wrapperProps}
              className={`card-elevated p-7 flex gap-5 ${it.url ? "hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                <it.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.description}</p>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </div>
  </section>
);

export default Leadership;
