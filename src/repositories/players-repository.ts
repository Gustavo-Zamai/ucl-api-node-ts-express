import { PrismaClient } from '@prisma/client';
import { PlayerModel } from '../models/player-model';
import { StatisticsModel } from '../models/statistics';

const prisma = new PrismaClient();

export const findAllPlayers = async () => {
  return await prisma.player.findMany();
};

export const findPlayerById = async (id: string) => {
  return await prisma.player.findUnique({
    where: { id },
  });
};

export const findPlayerByName = async (name: string): Promise<PlayerModel> => {
  const player = await prisma.player.findMany({
    where: {
      name: {
        contains: name, // busca parcial
        mode: 'insensitive',
      },
    },
  });
  return player;
};

export const findPlayerByPosition = async (
  position: string,
): Promise<PlayerModel[]> => {
  const player = await prisma.player.findMany({
    where: {
      position: {
        contains: position,
        mode: 'insensitive',
      },
    },
  });
  return player;
};

export const findPlayerByNationality = async (
  nationality: string,
): Promise<PlayerModel[]> => {
  const player = await prisma.player.findMany({
    where: {
      nationality: {
        contains: nationality,
        mode: 'insensitive',
      },
    },
  });
  return player;
};

export const findPlayerByClub = async (
  club: string,
): Promise<PlayerModel[]> => {
  const player = await prisma.player.findMany({
    where: {
      club: {
        contains: club,
        mode: 'insensitive',
      },
    },
  });

  return player;
};

export const insertPlayer = async (data: unknown) => {
  const validatedData = PlayerModel.parse(data);

  const player = await prisma.player.create({
    data: {
      ...validatedData,
      statistics: validatedData.statistics,
    },
  });

  return player;
};

export const deleteById = async (id: string): Promise<void> => {
  const player = await prisma.player.delete({ where: { id } });
  player;
};

export const findAndModifyStatsPlayer = async (
  id: string,
  statistics: StatisticsModel,
): Promise<PlayerModel> => {
  // find player
  try {
    const player = await prisma.player.update({
      where: { id },
      data: { statistics }, // Prisma converte automaticamente para JSON
    });

    return player;
  } catch (error) {
    return null; // Caso o ID não exista
  }
};
