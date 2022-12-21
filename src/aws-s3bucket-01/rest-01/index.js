import express from 'express';
import rest from './rest.js';

const PORT = 8022;
const app = express();

export default () => {
  app.use(rest);
  app.listen(PORT, () => {
    console.log(`rest01 listening on port ${PORT}...`);
  });
};
