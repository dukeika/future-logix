import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Enter a valid email address."),
  organization: z.string().optional(),
  phone: z.string().optional(),
  interest: z.string().min(1, "Please select an interest."),
  message: z.string().min(20, "Message must be at least 20 characters."),
  referralSource: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
