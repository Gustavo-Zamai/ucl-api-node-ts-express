import { z } from 'zod';
import { StatisticsModel } from './statistics';
import { ClubModel } from './club-model';

export const PlayerModel = z.object({
  id: z.string().uuid(),
  name: z.string(),
  club: ClubModel.omit({ players: true }),
  clubId: z.string(),
  nationality: z.string().length(3),
  position: z.string(),
  statistics: StatisticsModel,
});

export type PlayerModel = z.infer<typeof PlayerModel>;
