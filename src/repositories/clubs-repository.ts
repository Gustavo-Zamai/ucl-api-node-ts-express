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

export const insertClub = async (
  data: Omit<ClubModel, 'id'>,
): Promise<ClubModel> => {
  return await prisma.club.create({ data });
};
