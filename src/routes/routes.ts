import { Router } from 'express';
import * as PlayerController from '../controller/players-controller';
import * as ClubController from '../controller/clubs-controller';

const routes = Router();

// players
routes.get('/players', PlayerController.getPlayer);
routes.get('/players/:id', PlayerController.getPlayerById);
routes.get('/players/name/:name', PlayerController.getPlayerByName);
routes.get('/players/clubs/:club', PlayerController.getPlayerByClub);
routes.get('/players/position/:position', PlayerController.getPlayerByPosition);

routes.post('/players', PlayerController.postPlayer);
routes.delete('/players/:id', PlayerController.deletePlayer);
routes.patch('/players/:id', PlayerController.updateStatsPlayer);

// clubs
routes.get('/clubs', ClubController.getClub);
routes.get('/clubs/:id', ClubController.getClubById);
routes.get('/clubs/name/:name', ClubController.getClubByName);
routes.get('/clubs/league/:league', ClubController.getClubByLeague);

routes.post('/clubs', ClubController.postClub);
routes.delete('/clubs/:id', ClubController.deleteClub);

export default routes;
