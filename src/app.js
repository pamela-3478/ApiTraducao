import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import charRoutes from './Routes/charRoutes.js'

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(bodyParser.json({ extended: true }));
    this.app.use(express.urlencoded({ extend: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/translate', charRoutes);
  }
}

export default new App().app;
