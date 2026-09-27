import { z } from "zod";

// ---------------------------------------------------------------------------
// Login schema
// ---------------------------------------------------------------------------

export const LoginSchema = z.object({
  username: z.string().min(1, "Username is required").trim(),
  password: z.string().min(1, "Password is required"),
});

export type LoginInput = z.infer<typeof LoginSchema>;

// ---------------------------------------------------------------------------
// Project schema (used for both create and update)
// ---------------------------------------------------------------------------

export const ProjectSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters")
    .max(120, "Title is too long")
    .trim(),
  slug: z
    .string()
    .min(2, "Slug must be at least 2 characters")
    .max(100, "Slug is too long")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must be lowercase letters, numbers, and hyphens only"
    )
    .trim(),
  category: z
    .string()
    .min(2, "Category is required")
    .max(100, "Category is too long")
    .trim(),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description is too long")
    .trim(),
  tags: z
    .array(z.string().min(1).max(50))
    .min(1, "At least one tag is required"),
  image: z.string().url("Primary image must be a valid URL"),
  liveLink: z.union([z.literal("#"), z.string().url("Must be a valid URL")]),
  whyBuilt: z.string().max(1000, "Why Built is too long").trim().optional(),
  gallery: z.array(z.string().url("Each gallery image must be a valid URL")),
  year: z
    .number()
    .int()
    .min(2000)
    .max(2100)
    .optional()
    .or(z.nan().transform(() => undefined)),
  order: z.number().int().default(0),
  isVisible: z.boolean().default(true),
});

export type ProjectInput = z.infer<typeof ProjectSchema>;

// ---------------------------------------------------------------------------
// Form state type shared by Server Actions
// ---------------------------------------------------------------------------

export type ActionErrors = Partial<Record<keyof ProjectInput | "root", string[]>>;

export type ActionState = {
  success?: boolean;
  message?: string;
  errors?: ActionErrors;
} | null;
