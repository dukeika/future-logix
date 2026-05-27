import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

type SectionHeaderProps = {
  /**
   * Optional ordinal label (e.g. "01"). Currently not rendered; retained for
   * backwards-compatible call sites and possible future use.
   */
  number?: string;
  title: string;
  subtitle: string;
  description?: string;
  supportingCopy?: ReactNode;
  inverted?: boolean;
  headingAs?: ElementType;
};

export function SectionHeader({
  title,
  subtitle,
  description,
  supportingCopy,
  inverted = false,
  headingAs: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <div className="section-header-content">
      <p
        className={cn(
          "text-sm font-semibold tracking-[0.12em] text-muted-foreground",
          inverted && "text-slate-300"
        )}
      >
        {title}
      </p>
      <Heading className={cn("section-header-title", inverted && "text-white")}>{subtitle}</Heading>
      {description ? (
        <p className={cn("section-header-subtitle", inverted && "text-slate-100")}>{description}</p>
      ) : null}
      {supportingCopy ? (
        <div className={cn("section-header-copy", inverted && "text-slate-300")}>
          {supportingCopy}
        </div>
      ) : null}
    </div>
  );
}
