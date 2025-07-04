import { Request, Response } from 'express';
import * as service from '../services/player-service';
import { badRequest } from '../utils/http-status-code';
import { StatisticsModel } from '../models/statistics';

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await service.getPlayerService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const httpResponse = await service.getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerByName = async (req: Request, res: Response) => {
  const name = req.params.name;
  const httpResponse = await service.getPlayerByNameService(name);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerByClub = async (req: Request, res: Response) => {
  const club = req.params.club;
  const httpResponse = await service.getPlayerByClubService(club);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerByPosition = async (req: Request, res: Response) => {
  const position = req.params.position;
  const httpResponse = await service.getPlayerByPositionService(position);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerByNationality = async (req: Request, res: Response) => {
  const nationality = req.params.nationality;
  const httpResponse = await service.getPlayerByNationalityService(nationality);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await service.createPlayerService(bodyValue);
  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } else {
    const response = await badRequest();
    res.status(response.statusCode).json(response.body);
  }
};

export const deletePlayer = async (req: Request, res: Response) => {
  const id = req.params.id;

  const httpResponse = await service.deletePlayerService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updateStatsPlayer = async (req: Request, res: Response) => {
  const id = req.params.id;
  const bodyValue: StatisticsModel = req.body;
  const httpResponse = await service.updateStatsPlayerService(id, bodyValue);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
