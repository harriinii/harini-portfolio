import SectionHeader from "./SectionHeader";
import { Briefcase, MapPin } from "lucide-react";

const Internship = () => (
  <section id="internship" className="section-pad bg-background">
    <div className="container-px max-w-7xl mx-auto">
      <SectionHeader eyebrow="Experience" title="Internship" />

      <div className="mt-14 max-w-4xl mx-auto">
        <a
          href="https://drive.google.com/drive/folders/1cn40JufIeBHTQU-7Xw7M51O9An4GDHQP?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="card-elevated p-8 md:p-10 relative overflow-hidden block hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300"
        >
          <div aria-hidden className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

          <div className="flex flex-col md:flex-row md:items-start gap-6 relative">
            <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-3">
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-accent" /> NoviTech R&amp;D Private Limited</span>
              </div>

              <h3 className="text-2xl font-semibold text-primary">AI &amp; Machine Learning Intern</h3>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Completed an immersive internship in Artificial Intelligence, Machine Learning, and Data Science with
                practical exposure to ML concepts, data analysis pipelines, and Python-based implementation of
                production-style models.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Python", "Machine Learning", "Data Analysis", "Model Training"].map((t) => (
                  <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default Internship;
