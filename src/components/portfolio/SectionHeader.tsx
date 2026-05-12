interface Props {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeader = ({ eyebrow, title, subtitle, align = "center" }: Props) => (
  <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-primary text-balance">
      {title}
    </h2>
    <div className={`gold-divider mt-5 ${align === "center" ? "mx-auto" : ""}`} />
    {subtitle && (
      <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;
