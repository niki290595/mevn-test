import volleyball from 'volleyball'
import express from 'express'
import cors from 'cors'
import {processToken} from './auth'

module.exports = (app) => {

  //middleware
  app.use(volleyball);
  app.use(express.json());
  app.use(cors());

  app.use(processToken);
};

