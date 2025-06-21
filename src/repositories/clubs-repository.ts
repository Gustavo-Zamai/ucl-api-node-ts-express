import { PrismaClient } from '@prisma/client';
import { ClubModel } from '../models/club-model';

const prisma = new PrismaClient();

export const findAllClubs = async () => {
  return await prisma.club.findMany();
};

export const findClubById = async (id: string) => {
  return await prisma.club.findUnique({
    where: { id },
  });
};

export const findClubByName = async (name: string): Promise<ClubModel[]> => {
  const club = await prisma.club.findMany({
    where: {
      name: {
        contains: name,
        mode: 'insensitive',
      },
    },
  });
  return club;
};

export const findClubByLeague = async (
  league: string,
): Promise<ClubModel[]> => {
  const clubs = await prisma.club.findMany({
    where: {
      league: {
        equals: league.trim(),
        mode: 'insensitive',
      },
    },
  });

  return clubs;
};

export const insertClub = async (
  data: Omit<ClubModel, 'id'>,
): Promise<ClubModel> => {
  return await prisma.club.create({ data });
};

export const deleteById = async (id: string) => {
  const club = await prisma.club.delete({ where: { id } });
  return club;
};
