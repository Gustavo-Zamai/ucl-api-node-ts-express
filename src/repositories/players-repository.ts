import { PlayerModel } from '../models/player-model';
import { StatisticsModel } from '../models/statistics';

const database: PlayerModel[] = [
  {
    id: 1,
    name: 'Cristiano Ronaldo',
    club: 'Manchester United',
    nationality: 'Portugal',
    position: 'Forward',
    statistics: {
      Overall: 94,
      Pace: 87,
      Shooting: 94,
      Passing: 88,
      Dribbling: 85,
      Defending: 38,
      Physical: 80,
    },
  },
  {
    id: 2,
    name: 'Lionel Messi',
    club: 'Paris Saint-Germain',
    nationality: 'Argentina',
    position: 'Forward',
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 92,
      Passing: 91,
      Dribbling: 95,
      Defending: 35,
      Physical: 65,
    },
  },
  {
    id: 3,
    name: 'Kylian Mbappé',
    club: 'Paris Saint-Germain',
    nationality: 'France',
    position: 'Forward',
    statistics: {
      Overall: 91,
      Pace: 97,
      Shooting: 89,
      Passing: 82,
      Dribbling: 92,
      Defending: 36,
      Physical: 78,
    },
  },
  {
    id: 4,
    name: 'Kevin De Bruyne',
    club: 'Manchester City',
    nationality: 'Belgium',
    position: 'Midfielder',
    statistics: {
      Overall: 92,
      Pace: 76,
      Shooting: 86,
      Passing: 94,
      Dribbling: 88,
      Defending: 64,
      Physical: 78,
    },
  },
  {
    id: 5,
    name: 'Robert Lewandowski',
    club: 'Barcelona',
    nationality: 'Poland',
    position: 'Forward',
    statistics: {
      Overall: 91,
      Pace: 78,
      Shooting: 91,
      Passing: 79,
      Dribbling: 86,
      Defending: 43,
      Physical: 82,
    },
  },
  {
    id: 6,
    name: 'Virgil van Dijk',
    club: 'Liverpool',
    nationality: 'Netherlands',
    position: 'Defender',
    statistics: {
      Overall: 90,
      Pace: 75,
      Shooting: 60,
      Passing: 70,
      Dribbling: 72,
      Defending: 91,
      Physical: 86,
    },
  },
  {
    id: 7,
    name: 'Mohamed Salah',
    club: 'Liverpool',
    nationality: 'Egypt',
    position: 'Forward',
    statistics: {
      Overall: 90,
      Pace: 93,
      Shooting: 86,
      Passing: 81,
      Dribbling: 90,
      Defending: 45,
      Physical: 75,
    },
  },
  {
    id: 8,
    name: 'Erling Haaland',
    club: 'Manchester City',
    nationality: 'Norway',
    position: 'Forward',
    statistics: {
      Overall: 89,
      Pace: 89,
      Shooting: 90,
      Passing: 75,
      Dribbling: 82,
      Defending: 38,
      Physical: 87,
    },
  },
  {
    id: 9,
    name: 'Joshua Kimmich',
    club: 'Bayern Munich',
    nationality: 'Germany',
    position: 'Midfielder',
    statistics: {
      Overall: 89,
      Pace: 75,
      Shooting: 70,
      Passing: 89,
      Dribbling: 83,
      Defending: 85,
      Physical: 80,
    },
  },
  {
    id: 10,
    name: 'Thibaut Courtois',
    club: 'Real Madrid',
    nationality: 'Belgium',
    position: 'Goalkeeper',
    statistics: {
      Overall: 90,
      Pace: 50,
      Shooting: 45,
      Passing: 60,
      Dribbling: 50,
      Defending: 90,
      Physical: 84,
    },
  },
  {
    id: 11,
    name: 'Neymar Jr.',
    club: 'Paris Saint-Germain',
    nationality: 'Brazil',
    position: 'Forward',
    statistics: {
      Overall: 91,
      Pace: 91,
      Shooting: 85,
      Passing: 87,
      Dribbling: 94,
      Defending: 32,
      Physical: 66,
    },
  },
  {
    id: 12,
    name: 'Luka Modrić',
    club: 'Real Madrid',
    nationality: 'Croatia',
    position: 'Midfielder',
    statistics: {
      Overall: 88,
      Pace: 70,
      Shooting: 76,
      Passing: 91,
      Dribbling: 90,
      Defending: 70,
      Physical: 65,
    },
  },
  {
    id: 13,
    name: 'Sergio Ramos',
    club: 'Paris Saint-Germain',
    nationality: 'Spain',
    position: 'Defender',
    statistics: {
      Overall: 87,
      Pace: 72,
      Shooting: 70,
      Passing: 75,
      Dribbling: 72,
      Defending: 90,
      Physical: 85,
    },
  },
  {
    id: 14,
    name: 'Karim Benzema',
    club: 'Al-Ittihad',
    nationality: 'France',
    position: 'Forward',
    statistics: {
      Overall: 88,
      Pace: 75,
      Shooting: 89,
      Passing: 84,
      Dribbling: 87,
      Defending: 40,
      Physical: 78,
    },
  },
  {
    id: 15,
    name: 'Jan Oblak',
    club: 'Atletico Madrid',
    nationality: 'Slovenia',
    position: 'Goalkeeper',
    statistics: {
      Overall: 91,
      Pace: 50,
      Shooting: 50,
      Passing: 62,
      Dribbling: 50,
      Defending: 90,
      Physical: 83,
    },
  },
  {
    id: 16,
    name: 'Alphonso Davies',
    club: 'Bayern Munich',
    nationality: 'Canada',
    position: 'Defender',
    statistics: {
      Overall: 86,
      Pace: 96,
      Shooting: 64,
      Passing: 75,
      Dribbling: 89,
      Defending: 82,
      Physical: 81,
    },
  },
  {
    id: 17,
    name: 'Phil Foden',
    club: 'Manchester City',
    nationality: 'England',
    position: 'Midfielder',
    statistics: {
      Overall: 85,
      Pace: 83,
      Shooting: 80,
      Passing: 86,
      Dribbling: 87,
      Defending: 54,
      Physical: 65,
    },
  },
  {
    id: 18,
    name: 'Jude Bellingham',
    club: 'Real Madrid',
    nationality: 'England',
    position: 'Midfielder',
    statistics: {
      Overall: 84,
      Pace: 82,
      Shooting: 77,
      Passing: 83,
      Dribbling: 85,
      Defending: 76,
      Physical: 79,
    },
  },
  {
    id: 19,
    name: 'Trent Alexander-Arnold',
    club: 'Liverpool',
    nationality: 'England',
    position: 'Defender',
    statistics: {
      Overall: 86,
      Pace: 78,
      Shooting: 70,
      Passing: 90,
      Dribbling: 84,
      Defending: 80,
      Physical: 70,
    },
  },
  {
    id: 20,
    name: 'Ederson',
    club: 'Manchester City',
    nationality: 'Brazil',
    position: 'Goalkeeper',
    statistics: {
      Overall: 87,
      Pace: 50,
      Shooting: 45,
      Passing: 85,
      Dribbling: 50,
      Defending: 90,
      Physical: 80,
    },
  },
  {
    id: 21,
    name: 'Erling Haaland',
    club: 'Manchester City',
    nationality: 'Norway',
    position: 'Forward',
    statistics: {
      Overall: 89,
      Pace: 89,
      Shooting: 90,
      Passing: 75,
      Dribbling: 82,
      Defending: 38,
      Physical: 87,
    },
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number,
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const findPlayerByName = async (
  name: string,
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.name === name);
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
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
