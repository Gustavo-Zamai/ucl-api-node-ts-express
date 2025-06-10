import * as ClubRepository from '../../repositories/clubs-repository';
import * as HttpStatusCode from '../../utils/http-status-code';

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

export const getClubByIdService = async (id: number) => {
  const data = await ClubRepository.findClubById(id);
  let response = null;

  if (data) {
    response = HttpStatusCode.ok(data);
  } else {
    response = HttpStatusCode.noContent();
  }

  return response;
};

export const getClubByNameService = async (name: string) => {
  const data = await ClubRepository.findClubByName(name);
  let response = null;

  if (data) {
    response = HttpStatusCode.ok(data);
  } else {
    response = HttpStatusCode.noContent();
  }

  return response;
};
