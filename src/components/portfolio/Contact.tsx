import { forwardRef } from "react";
import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { Mail, Github, Download, FolderOpen, ArrowUpRight, Phone } from "lucide-react";

const RESUME_URL = "https://drive.google.com/file/d/1xeFbkOfaXIFhwgPgHm9wDwk9zyNdAmRX/view?usp=sharing";
const CERTS_URL = "https://drive.google.com/drive/folders/1pwBFadyo7Mr4Q2p8R2DBtVLZWTm2VGZZ?usp=sharing";

// Official LinkedIn brand glyph
const LinkedInIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(({ className, ...props }, ref) => (
  <svg ref={ref} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
  </svg>
));
LinkedInIcon.displayName = "LinkedInIcon";

const links = [
  { icon: Mail, label: "Email", value: "harriiiinii@gmail.com", href: "mailto:harriiiinii@gmail.com" },
  { icon: LinkedInIcon, label: "LinkedIn", value: "linkedin.com/in/harini-h28", href: "https://linkedin.com/in/harini-h28" },
  { icon: Github, label: "GitHub", value: "github.com/harriinii", href: "https://github.com/harriinii" },
  { icon: FolderOpen, label: "Certificates", value: "Drive Folder", href: CERTS_URL },
];

const Contact = () => (
  <section id="contact" className="section-pad bg-hero-gradient relative overflow-hidden">
    <div aria-hidden className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-accent/15 blur-3xl" />
    <div aria-hidden className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-accent/10 blur-3xl" />

    <div className="container-px max-w-6xl mx-auto relative">
      <div className="text-center max-w-4xl mx-auto">
        <span className="eyebrow">Let's Connect</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-primary-foreground text-balance">
          Open to internships &amp; <span className="italic text-accent">full-time roles</span>
        </h2>
        <div className="gold-divider mx-auto mt-5" />
        <p className="mt-5 text-primary-foreground/75 text-sm sm:text-base md:text-lg md:whitespace-nowrap">
          Feel free to reach out for opportunities, collaborations, or a quick chat about AI.
        </p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group bg-primary-foreground/[0.04] border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/[0.08] hover:border-accent/40 transition-all duration-500 backdrop-blur-sm"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="w-11 h-11 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                <l.icon className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-primary-foreground/50 group-hover:text-accent group-hover:rotate-12 transition-all" />
            </div>
            <div className="text-xs uppercase tracking-widest text-primary-foreground/60">{l.label}</div>
            <div className="mt-1 text-sm font-medium text-primary-foreground truncate">{l.value}</div>
          </a>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Button variant="gold" size="lg" asChild>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer"><Download className="w-4 h-4" /> Download Resume</a>
        </Button>
        <Button variant="outlineLight" size="lg" asChild>
          <a href="mailto:harriiiinii@gmail.com"><Mail className="w-4 h-4" /> Send Email</a>
        </Button>
      </div>

      <div className="mt-14 max-w-2xl mx-auto">
        <div className="text-center text-xs uppercase tracking-widest text-primary-foreground/60 mb-4">Phone</div>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="tel:+919003539843"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-foreground/[0.04] border border-primary-foreground/10 hover:bg-primary-foreground/[0.08] hover:border-accent/40 transition-all text-primary-foreground text-sm font-medium"
          >
            <Phone className="w-4 h-4 text-accent" /> +91 90035 39843
          </a>
          <a
            href="tel:+917904296815"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-foreground/[0.04] border border-primary-foreground/10 hover:bg-primary-foreground/[0.08] hover:border-accent/40 transition-all text-primary-foreground text-sm font-medium"
          >
            <Phone className="w-4 h-4 text-accent" /> +91 79042 96815
          </a>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
        © 2026 Harini H
      </footer>
    </div>
  </section>
);

export default Contact;
