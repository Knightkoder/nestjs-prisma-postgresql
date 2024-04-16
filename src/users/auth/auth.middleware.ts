import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      //res.status(401).send('Unauthorized');
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    /*const token = authorization.split(' ')[1];

    if (!token) {
      res.status(401).send('Unauthorized');
      return;
    }*/

    next();
  }
}
