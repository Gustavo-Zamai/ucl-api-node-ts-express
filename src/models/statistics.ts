import { z } from "zod";

export const StatisticsModel  = z.object({
  Overall: z.number().min(0).max(99),
  Pace: z.number().min(0).max(99),
  Shooting: z.number().min(0).max(99),
  Passing: z.number().min(0).max(99),
  Dribbling: z.number().min(0).max(99),
  Defending: z.number().min(0).max(99),
  Physical: z.number().min(0).max(99),
});

export type StatisticsModel = z.infer<typeof StatisticsModel>;