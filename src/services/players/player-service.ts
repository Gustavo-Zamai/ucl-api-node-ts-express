import * as PlayerRepository from '../../repositories/players-repository';
import * as HttpStatusCode from '../../utils/http-status-code';

export const getPlayerService = async () => {
  const data = await PlayerRepository.getAllPlayers();
  let response = null;

  if (data) {
    response = await HttpStatusCode.ok(data);
  } else {
    response = await HttpStatusCode.noContent();
  }

  return response;
};
