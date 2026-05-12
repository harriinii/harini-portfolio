import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

const CERTS_DRIVE_URL = "https://drive.google.com/drive/folders/1pwBFadyo7Mr4Q2p8R2DBtVLZWTm2VGZZ?usp=sharing";

const certs = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=FAE7FAF7A96D9D1EB51372A46CFEFA2C56433C7FFDA4BEF42F3AED246A3EB5E6",
  },
  {
    name: "Google Cybersecurity Professional Certificate (v2)",
    issuer: "Google",
    url: "https://www.credly.com/go/LjUbxyY8",
  },
  {
    name: "AWS Academy Graduate – Machine Learning for NLP",
    issuer: "AWS Academy",
    url: "https://www.credly.com/go/yS76W0ho",
  },
  {
    name: "AWS Academy Graduate – Machine Learning Foundations",
    issuer: "AWS Academy",
    url: "https://www.credly.com/go/gcxdrC7M",
  },
  {
    name: "Building RAG Apps Using MongoDB",
    issuer: "MongoDB",
    url: "https://www.credly.com/badges/67d8b167-f0d5-4282-98e0-28541ab0784e/print",
  },
  {
    name: "Introduction to Ethical Hacking (Specialization)",
    issuer: "Coursera",
    url: "https://coursera.org/verify/specialization/Q6IZKGP4K5LI",
  },
  {
    name: "Advanced Cybersecurity Techniques",
    issuer: "Coursera",
    url: "https://coursera.org/verify/0W0VTVUI8UM7",
  },
  {
    name: "Cybersecurity Fundamentals",
    issuer: "Coursera",
    url: "https://coursera.org/verify/RA2UC75YL9HM",
  },
];

const Certifications = () => (
  <section id="certifications" className="section-pad bg-secondary/40">
    <div className="container-px max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Certifications"
        title="Verified Credentials"
        subtitle="Continuously upskilling across Generative AI, Cloud, and Cybersecurity."
      />

      <div className="mt-14 grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {certs.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-elevated p-5 flex items-start gap-4 hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm md:text-base font-semibold text-primary leading-snug">{c.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="premium" size="lg" asChild>
          <a href={CERTS_DRIVE_URL} target="_blank" rel="noopener noreferrer">
            View All Certifications <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default Certifications;
