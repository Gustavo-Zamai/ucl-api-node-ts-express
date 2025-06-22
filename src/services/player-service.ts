import { PlayerModel } from '../models/player-model';
import { StatisticsModel } from '../models/statistics';
import * as PlayerRepository from '../repositories/players-repository';
import * as HttpStatusCode from '../utils/http-status-code';

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();
  let response = null;

  if (data) {
    response = await HttpStatusCode.ok(data);
  } else {
    response = await HttpStatusCode.noContent();
  }
  return response;
};

export const getPlayerByIdService = async (id: string) => {
  const data = await PlayerRepository.findPlayerById(id);
  let response = null;

  if (data) {
    response = await HttpStatusCode.ok(data);
  } else {
    response = await HttpStatusCode.noContent();
  }
  return response;
};

export const getPlayerByNameService = async (name: string) => {
  const data = await PlayerRepository.findPlayerByName(name);
  let response = null;

  if (data) {
    response = await HttpStatusCode.ok(data);
  } else {
    response = await HttpStatusCode.noContent();
  }
  return response;
};

export const getPlayerByClubService = async (club: string) => {
  const data = await PlayerRepository.findPlayerByClub(club);
  let response = null;

  if (data.length === 0) {
    response = await HttpStatusCode.noContent();
  } else {
    response = await HttpStatusCode.ok(data);
  }
  return response;
};

export const getPlayerByPositionService = async (position: string) => {
  const data = await PlayerRepository.findPlayerByPosition(position);
  let response = null;

  if (data.length === 0) {
    response = await HttpStatusCode.noContent();
  } else {
    response = await HttpStatusCode.ok(data);
  }
  return response;
};

export const getPlayerByNationalityService = async (nationality: string) => {
  const data = await PlayerRepository.findPlayerByNationality(nationality);
  let response = null;

  if (data.length === 0) {
    response = await HttpStatusCode.noContent();
  } else {
    response = await HttpStatusCode.ok(data);
  }
  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (player) {
    await PlayerRepository.insertPlayer(player);
    response = await HttpStatusCode.created();
  } else {
    response = await HttpStatusCode.badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: string) => {
  //let response = null;
  await PlayerRepository.deleteById(id);
  return await HttpStatusCode.ok({ message: 'Deleted' });
  //return response;
};

export const updateStatsPlayerService = async (
  id: string,
  statistics: StatisticsModel,
) => {
  const data = await PlayerRepository.findAndModifyStatsPlayer(id, statistics);
  let response = null;

  if (Object.keys(data).length === 0) {
    response = await HttpStatusCode.badRequest();
  } else {
    response = await HttpStatusCode.ok(data);
  }

  return response;
};
