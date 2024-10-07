import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';

const PORT = env(ENV_VARS.PORT, 3000);

const app = express();

export const startServer = () => {



    app.use(
      pino({
        transport: {
          target: 'pino-pretty',
        },
      }),
    );
  app.use(cors());
  //   app.use('*', (res, req, next) => {
  //     console.log(new Date().toLocaleDateString());
  //     next();
  //   });
  app.use(express.json());
  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world',
    });
  });
  app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
  });
};

