import { response } from 'express';
import { PlayerModel } from '../../models/player-model';
import * as PlayerRepository from '../../repositories/players-repository';
import * as HttpStatusCode from '../../utils/http-status-code';
import { StatisticsModel } from '../../models/statistics';

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

export const getPlayerByIdService = async (id: number) => {
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

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDeleted = await PlayerRepository.deleteOnePlayer(id);

  if (isDeleted) {
    response = await HttpStatusCode.ok({ message: 'Deleted' });
  } else {
    response = await HttpStatusCode.badRequest();
  }
  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel,
) => {
  const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
  let response = null;

  if (Object.keys(data).length === 0) {
    response = await HttpStatusCode.badRequest();
  } else {
    response = await HttpStatusCode.ok(data);
  }

  return response;
};
