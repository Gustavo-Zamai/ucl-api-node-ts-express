import { Request, Response } from 'express';
import * as service from '../services/club-service';
import { badRequest } from '../utils/http-status-code';

export const getClub = async (req: Request, res: Response) => {
  const httpResponse = await service.getClubService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getClubById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const httpResponse = await service.getClubByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getClubByName = async (req: Request, res: Response) => {
  const name = req.params.name;
  const httpResponse = await service.getClubByNameService(name);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getClubByLeague = async (req: Request, res: Response) => {
  const league = req.params.league;
  const httpResponse = await service.getClubByLeagueService(league);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postClub = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await service.createClubService(bodyValue);
  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } else {
    const response = await badRequest();
    res.status(response.statusCode).json(response.body);
  }
};

export const deleteClub = async (req: Request, res: Response) => {
  const id = req.params.id;

  const httpResponse = await service.deleteClubService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
}