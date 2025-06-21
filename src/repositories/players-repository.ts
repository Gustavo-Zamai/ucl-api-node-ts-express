import { PrismaClient } from '@prisma/client';
import { PlayerModel } from '../models/player-model';

const prisma = new PrismaClient();

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return await prisma.player.findMany();
};

/*export const findPlayerById = async (
  id: number,
): Promise<PlayerModel | undefined> => {
  return prisma.player.findUnique((player) => player.id === id);
};

export const findPlayerByName = async (
  name: string,
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.name === name);
};*/


export const insertPlayer = async (player: PlayerModel) => {
  return await prisma.player.create({data});
};

/*export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex((player) => player.id === id);

  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }

  return false;
};

export const findAndModifyPlayer = async (
  id: number,
  statistics: StatisticsModel,
): Promise<PlayerModel> => {
  // find player
  const playerIndex = database.findIndex((player) => player.id === id);

  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
};
*/