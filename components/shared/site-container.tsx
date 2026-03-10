import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type SiteContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function SiteContainer({ children, className }: SiteContainerProps) {
  return <div className={cn("container", className)}>{children}</div>;
}
