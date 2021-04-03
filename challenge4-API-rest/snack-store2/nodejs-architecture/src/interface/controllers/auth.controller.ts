/* eslint-disable prettier/prettier */
import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import config from '../../../config.jwt'

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers['authorization']

  if(typeof token !== 'undefined'){
    const bearerToken = token.split(' ')[1];
    jwt.verify(bearerToken, config.jwtSecret, (error, authData) => {
      if(error){
        res.sendStatus(403);
      } else {
        res.setHeader('token', bearerToken)
        next();
      }

    });
}else{
   res.sendStatus(403);
}
}

