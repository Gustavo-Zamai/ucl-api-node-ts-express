import { Request, Response } from 'express';
import * as service from '../services/clubs/club-service';

export const getClubs = async (req: Request, res: Response) => {
  const httpResponse = await service.getClubService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getClubById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await service.getClubByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getClubByName = async (req: Request, res: Response) => {
  const name = req.params.name;
  const httpResponse = await service.getClubByNameService(name);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
