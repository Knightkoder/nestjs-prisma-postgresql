import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.headers['authorization'].split(' ')[1]);

    if (request.url === '/greet') {
      //return false;
    }
    
    if (request.headers['authorization'] === undefined) {
      return false;
    }
    if (request.headers['authorization'].split(' ')[0] !== 'Bearer') {
      return false;
    }
    if (request.headers['authorization'].split(' ').length !== 2) {
      return false;
    }
    if (request.headers['authorization'].split(' ')[1] === '') {
      return false;
    }
    const decodedToken = Buffer.from(
      request.headers['authorization'].split(' ')[1],
      'base64',
    ).toString('ascii');

    if (request.headers['authorization'].split(' ')[1] === 'toketoken') {
      return true;
    }
    return false;
  }
}
