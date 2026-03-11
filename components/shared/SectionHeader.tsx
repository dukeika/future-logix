import type { ReactNode } from "react";

type SectionHeaderProps = {
  number: string;
  title: string;
  subtitle: string;
  description?: string;
  supportingCopy?: ReactNode;
};

export function SectionHeader({
  number,
  title,
  subtitle,
  description,
  supportingCopy,
}: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div className="section-header-number" aria-hidden="true">
        {number}
      </div>
      <div className="section-header-content">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">{title}</p>
        <h2 className="section-header-title">{subtitle}</h2>
        {description ? <p className="section-header-subtitle">{description}</p> : null}
        {supportingCopy ? <div className="section-header-copy">{supportingCopy}</div> : null}
      </div>
    </div>
  );
}
