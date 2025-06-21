import { ClubModel } from '../models/club-model';
import * as ClubRepository from '../repositories/clubs-repository';
import * as HttpStatusCode from '../utils/http-status-code';

export const getClubService = async () => {
  const data = await ClubRepository.findAllClubs();
  let response = null;

  if (data) {
    response = await HttpStatusCode.ok(data);
  } else {
    response = await HttpStatusCode.noContent();
  }

  return response;
};

export const getClubByIdService = async (id: string) => {
  const data = await ClubRepository.findClubById(id);
  let response = null;

  if (data) {
    response = await HttpStatusCode.ok(data);
  } else {
    response = await HttpStatusCode.noContent();
  }

  return response;
};

export const getClubByNameService = async (name: string) => {
  const data = await ClubRepository.findClubByName(name);
  let response = null;

  if (data) {
    response = await HttpStatusCode.ok(data);
  } else {
    response = await HttpStatusCode.noContent();
  }

  return response;
};

export const getClubByLeagueService = async (league: string) => {
  const data = await ClubRepository.findClubByLeague(league);
  let response = null;

  if (data) {
    response = await HttpStatusCode.ok(data);
  } else {
    response = HttpStatusCode.noContent();
  }

  return response;
};

export const createClubService = async (club: ClubModel) => {
  let response = null;

  if (club) {
    await ClubRepository.insertClub(club);
    response = await HttpStatusCode.created();
  } else {
    response = await HttpStatusCode.badRequest();
  }

  return response;
};

export const deleteClubService = async (id: string) => {
  await ClubRepository.deleteById(id);
  return await HttpStatusCode.ok({ message: 'Deleted' });
};
