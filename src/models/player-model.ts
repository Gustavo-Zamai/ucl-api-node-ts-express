import { z } from "zod";
import { StatisticsModel } from "./statistics";

export const PlayerModel = z.object({
  name: z.string().min(3),
  club: z.string().min(3),
  nationality: z.string().length(3), // Ex: "BRA"
  position: z.string().min(2), // Ex: "RW"
  statistics: StatisticsModel,
});

export type PlayerModel = z.infer<typeof PlayerModel>;