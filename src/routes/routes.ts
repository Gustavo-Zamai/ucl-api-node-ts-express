/*export enum Routes {
  Home = '/',
}*/

import { Router } from 'express';
import { getPlayer } from '../controller/players-controller';

const routes = Router();

routes.get('/players', getPlayer);

export default routes;
