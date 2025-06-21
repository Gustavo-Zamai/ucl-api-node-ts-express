import { z } from 'zod';

export const ClubModel = z.object({
  id: z.string().min(3),
  name: z.string(),
  badge: z.string().url(), // Assuming badge is a URL
  foundation: z.number().min(1800).max(new Date().getFullYear()),
  city: z.string(),
  league: z.string(),
  // Optional: include players when needed
  //players: z.array(z.any()).optional(),
});

export type ClubModel = z.infer<typeof ClubModel>;
