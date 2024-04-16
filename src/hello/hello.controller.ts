import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ValedateuserPipe } from './pipes/valedateuser/valedateuser.pipe';
import { AuthGuard } from './guard/auth/auth.guard';

@Controller()
export class HelloController {
  @Get('/')
  index(@Req() request: Request, @Res() response: Response) {
    response.status(200).json({ message: 'Hello World!' });
  }

  @Get('notfound')
  @HttpCode(404) // 404 Not Found
  notFoundPage() {
    return '404 Not Found Page!';
  }

  @Get('error')
  @HttpCode(500) // 500 Internal Server Error
  internalServerError() {
    return '500 Internal Server Error';
  }

  @Get('errorpage')
  @HttpCode(500) // 500 Internal Server Error
  errorPage() {
    return 'error 500';
  }

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num + 14;
  }
  @Get('active/:status')
  @UseGuards(AuthGuard)
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    return status ? 'User is active' : 'User is inactive';
  }
  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValedateuserPipe) query: { name: string; age: number }) {
    return `Hello ${query.name}, you are ${query.age + 30} years old`;
  }
}
