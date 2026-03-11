import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(120, "Name is too long."),
  email: z.string().email("Enter a valid email address."),
  organization: z.string().trim().max(160, "Organization is too long.").optional(),
  phone: z.string().trim().max(40, "Phone is too long.").optional(),
  interest: z.string().trim().min(1, "Please select an interest.").max(120, "Interest is too long."),
  message: z.string().trim().min(20, "Message must be at least 20 characters.").max(4000, "Message is too long."),
  referralSource: z.string().trim().max(160, "Referral source is too long.").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
