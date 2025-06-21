import express from 'express';
import routes from './routes/routes';
import cors from 'cors';

function createApp() {
  const app = express();
  app.use(express.json());

  app.use('/api', routes);

  const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  };

  app.use(cors(corsOptions));

  return app;
}

export default createApp;
