import { ClubModel } from '../models/club-model';
import fs from 'fs/promises';

export const findAllClubs = async (): Promise<ClubModel[]> => {
  const data = await fs.readFile('./src/data/clubs.json', 'utf-8');
  const clubs: ClubModel[] = JSON.parse(data);
  return clubs;
};

/*
export const findClubById = async (
  id: number,
): Promise<ClubModel | undefined> => {
  const data = await fs.readFile("./src/data/clubs.json", "utf-8");
  
  
  return database.find((club) => club.id === id);
};

export const findClubByName = async (
  name: string,
): Promise<ClubModel | undefined> => {
  return database.find((club) => club.name === name);
};
*/
