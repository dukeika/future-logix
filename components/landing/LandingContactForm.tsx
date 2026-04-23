"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";

type LandingContactFormProps = {
  interest: string;
  source: string;
  title: string;
  intro: string;
  messagePlaceholder: string;
  submitLabel: string;
};

export function LandingContactForm({
  interest,
  source,
  title,
  intro,
  messagePlaceholder,
  submitLabel,
}: LandingContactFormProps) {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      phone: "",
      interest,
      message: "",
      referralSource: `Landing page: ${source}`,
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      setSubmitState("idle");
      setSubmitMessage("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          interest,
          source: `landing-${source}`,
          companyWebsite: "",
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Something went wrong. Please call or email us directly.");
      }

      setSubmitState("success");
      setSubmitMessage(data.message ?? "Thank you for your message. We'll respond within 24 hours.");
      form.reset({
        name: "",
        email: "",
        organization: "",
        phone: "",
        interest,
        message: "",
        referralSource: `Landing page: ${source}`,
      });
    } catch (error) {
      console.error(error);
      setSubmitState("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please call or email us directly."
      );
    }
  };

  return (
    <div className="surface-panel scroll-mt-28 px-5 py-6 sm:px-7" id="contact-form">
      <div className="mb-6 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
        <p className="text-sm leading-7 text-muted-foreground">{intro}</p>
      </div>

      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)} noValidate>
          <div className="hidden" aria-hidden="true">
            <label htmlFor={`${source}-companyWebsite`}>Company website</label>
            <input
              id={`${source}-companyWebsite`}
              name="companyWebsite"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <input type="hidden" value={interest} {...form.register("interest")} />
          <input type="hidden" value={`Landing page: ${source}`} {...form.register("referralSource")} />

          <div className="grid gap-4 sm:grid-cols-2">
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

          <div className="grid gap-4 sm:grid-cols-2">
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
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea className="min-h-32" placeholder={messagePlaceholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {submitState === "success" ? (
            <div
              className="rounded-2xl border border-secondary/20 bg-secondary/10 px-4 py-3 text-sm text-secondary"
              role="status"
              aria-live="polite"
            >
              {submitMessage}
            </div>
          ) : null}

          {submitState === "error" ? (
            <div
              className="rounded-2xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              role="alert"
            >
              {submitMessage}
            </div>
          ) : null}

          <Button type="submit" className="w-full gap-2 sm:w-auto" disabled={form.formState.isSubmitting}>
            <Send className="h-4 w-4" />
            {form.formState.isSubmitting ? "Sending..." : submitLabel}
          </Button>
        </form>
      </Form>
    </div>
  );
}
