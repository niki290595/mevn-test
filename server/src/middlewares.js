import volleyball from 'volleyball'
import express from 'express'
import cors from 'cors'
import {verifyToken} from './config/jwt'

module.exports = (app) => {

  //middleware
  app.use(volleyball);
  app.use(express.json());
  app.use(cors());

  //check token
  app.use(async (req, res, next) => {
    try {
      const authHeader = req.get('authorization');
      const token = authHeader.split(' ')[1];
      console.log(token);
      req.user = await verifyToken(token);
    } catch (e) {}

    next();
  });

};

