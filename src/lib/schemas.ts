import { z } from "zod";

export const ContactMeSchema = z.object({
  name: z.string().min(2, "Name is required"),
  title: z.string().nullable(),
  email: z.string().email("Invalid email"),
  message: z.string().min(2, "Message is required"),
});

export type ContactMe = z.infer<typeof ContactMeSchema>;
