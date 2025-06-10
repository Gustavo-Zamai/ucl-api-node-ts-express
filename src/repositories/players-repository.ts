import { PlayerModel } from '../models/player-model';

const database: PlayerModel[] = [
  { id: 1, name: 'Ronaldo' },
  { id: 2, name: 'Messi' },
];

export const getAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const getPlayerById = async (
  id: number,
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};
