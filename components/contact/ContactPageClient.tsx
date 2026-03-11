"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { ContactInterestOption } from "@/types";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";

const interestOptions: ContactInterestOption[] = [
  { value: "AI Automation", label: "AI Automation" },
  { value: "Web Application Development", label: "Web Application Development" },
  { value: "AWS Architecture & Implementation", label: "AWS Architecture & Implementation" },
  { value: "Business Modernization & Automation", label: "Business Modernization & Automation" },
  { value: "ClassPoint Product Inquiry", label: "ClassPoint Product Inquiry" },
  { value: "Partnership Opportunity", label: "Partnership Opportunity" },
  { value: "General Inquiry", label: "General Inquiry" },
];

export function ContactPageClient() {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      phone: "",
      interest: "",
      message: "",
      referralSource: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      setSubmitState("idle");
      // TODO: Replace console logging with API submission when backend endpoint is available.
      console.log("TODO: integrate contact form API", values);
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSubmitState("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setSubmitState("error");
    }
  };

  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="space-y-8">
          <SectionHeader
            number="08"
            title="Contact"
            subtitle="Contact"
            description="Start the conversation about your technology needs."
          />

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="surface-panel px-5 py-8 sm:px-8">
              <Form {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@organization.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization</FormLabel>
                          <FormControl>
                            <Input placeholder="Organization name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+234..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {interestOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us what you are trying to build, improve, or evaluate."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="referralSource"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How did you hear about us?</FormLabel>
                        <FormControl>
                          <Input placeholder="Referral, search, LinkedIn, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {submitState === "success" ? (
                    <div className="rounded-2xl border border-secondary/20 bg-secondary/10 px-4 py-3 text-sm text-secondary">
                      Thank you for your message. We&apos;ll respond within 24 hours.
                    </div>
                  ) : null}

                  {submitState === "error" ? (
                    <div className="rounded-2xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      Something went wrong. Please try again or email us directly.
                    </div>
                  ) : null}

                  <Button type="submit" className="rounded-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            <div className="space-y-5">
              <div className="surface-panel px-5 py-6 sm:px-6">
                <h2 className="text-xl font-semibold text-foreground">Contact Methods</h2>
                <div className="mt-5 space-y-4">
                  <a
                    href="mailto:admin@futurelogix.ng"
                    className="flex items-start gap-3 rounded-2xl border border-border/80 bg-background/80 px-4 py-4"
                  >
                    <Mail className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">admin@futurelogix.ng</p>
                    </div>
                  </a>
                  <a
                    href="tel:+23470611006212"
                    className="flex items-start gap-3 rounded-2xl border border-border/80 bg-background/80 px-4 py-4"
                  >
                    <Phone className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+23470611006212</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 rounded-2xl border border-border/80 bg-background/80 px-4 py-4">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-border/80 bg-slate-950 p-6 text-white shadow-soft">
                <h2 className="text-xl font-semibold">Before you reach out</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Share as much context as you can about the problem, current systems, and desired
                  timeline. It helps us route the conversation faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
