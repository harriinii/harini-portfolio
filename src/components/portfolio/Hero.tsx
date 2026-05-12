import portrait from "@/assets/harini-portrait.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden bg-soft-gradient">
      {/* Decorative blobs */}
      <div aria-hidden className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-px max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-7 animate-fade-up">
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] text-primary text-balance">
              <span className="italic text-accent">HARINI H</span>
              <br />
              Aspiring AI &amp; ML Engineer
            </h1>

            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Building practical AI solutions using Generative AI, LLMs, RAG pipelines,
              and AI Agents with a focus on clean engineering and real-world impact.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button variant="premium" size="lg" asChild>
                <a href="https://drive.google.com/file/d/1xeFbkOfaXIFhwgPgHm9wDwk9zyNdAmRX/view?usp=sharing" target="_blank" rel="noopener noreferrer"><Download className="w-4 h-4" /> Download Resume</a>
              </Button>
              <Button variant="outlineDark" size="lg" asChild>
                <a href="https://drive.google.com/drive/folders/1pwBFadyo7Mr4Q2p8R2DBtVLZWTm2VGZZ?usp=sharing" target="_blank" rel="noopener noreferrer"><Award className="w-4 h-4" /> View Certifications</a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="#contact"><Mail className="w-4 h-4" /> Contact Me <ArrowRight className="w-4 h-4" /></a>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg border-t border-border pt-8">
              <div>
                <div className="font-serif text-3xl font-semibold text-primary">8+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Certifications</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-semibold text-primary">4+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">AI Projects</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-semibold text-primary">1</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Internship</div>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "150ms" }}>
            <div className="relative mx-auto w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] md:w-[26rem] md:h-[26rem]">
              {/* Outer gold halo */}
              <div
                aria-hidden
                className="absolute -inset-6 rounded-full bg-gold-gradient opacity-70 blur-2xl"
              />
              {/* High-contrast gold ring */}
              <div
                aria-hidden
                className="absolute -inset-2 rounded-full bg-gold-gradient shadow-gold"
              />
              {/* Inner thin border ring */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-full ring-1 ring-accent/40 z-20 pointer-events-none"
              />
              {/* Circular portrait */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-card shadow-elegant">
                <img
                  src={portrait}
                  alt="Portrait of Harini H, Aspiring AI and ML Engineer"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover object-top scale-[1.02]"
                />
                {/* Subtle inner glow */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    boxShadow:
                      "inset 0 0 40px hsl(var(--accent) / 0.18), inset 0 0 90px hsl(var(--primary) / 0.18)",
                  }}
                />
              </div>

              <div className="absolute -top-2 -right-2 md:-right-6 bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-elegant z-30">
                <div className="font-serif text-2xl font-semibold leading-none">AI/ML</div>
                <div className="text-[10px] uppercase tracking-widest text-primary-foreground/70 mt-1">Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
