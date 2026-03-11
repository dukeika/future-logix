"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageSquare, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteContainer } from "@/components/shared/site-container";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY.current;

      setIsVisible(scrollingUp || currentScrollY < 24);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const focusableElements = overlayRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

    firstElement?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const isItemActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-xl"
      >
        <SiteContainer className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Future Logix homepage"
          >
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                Future Logix
              </span>
              <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground sm:text-[0.72rem]">
                Products &amp; Technology Services
              </span>
            </div>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = isItemActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="gap-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/contact">
                <MessageSquare className="h-4 w-4" />
                Talk to Us
              </Link>
            </Button>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-11 w-11 rounded-full lg:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SiteContainer>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            ref={overlayRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/65 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="ml-auto flex h-full w-full max-w-sm flex-col bg-background px-6 pb-8 pt-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-base font-semibold text-foreground">Future Logix</span>
                  <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Products &amp; Technology Services
                  </span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-11 w-11 rounded-full"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav aria-label="Mobile navigation" className="mt-10 flex flex-1 flex-col gap-3">
                {navItems.map((item, index) => {
                  const isActive = isItemActive(item.href);

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-2xl border px-4 py-4 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          isActive
                            ? "border-primary/30 bg-primary/10 text-primary"
                            : "border-border bg-white/60 text-foreground"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <Button
                asChild
                className="mt-6 h-12 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <Link href="/contact">Talk to Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
