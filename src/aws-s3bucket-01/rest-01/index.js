import express from 'express';
import rest from './rest.js';
import env from '../../../tmp/env.js';

const app = express();

export default () => {
  app.use(rest);
  app.listen(env.port, () => {
    console.log(`rest01 listening on port ${env.port}...`);
  });
};
