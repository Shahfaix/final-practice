import { z } from "zod";

export const loremSchema = z.object({
    name: z.string().min(2).max(50),
  })