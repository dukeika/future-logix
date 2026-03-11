import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  showTagline?: boolean;
};

export function BrandLogo({
  className,
  priority = false,
  showTagline = true,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      aria-label="Future Logix homepage"
    >
      <div className="flex flex-col">
        <Image
          src="/images/future-logix-logo.png"
          alt="Future Logix"
          width={160}
          height={40}
          priority={priority}
          sizes="(max-width: 640px) 128px, 160px"
          className="h-8 w-auto sm:h-10"
        />
        {showTagline ? (
          <span className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground sm:text-[0.72rem]">
            Products &amp; Technology Services
          </span>
        ) : null}
      </div>
    </Link>
  );
}
