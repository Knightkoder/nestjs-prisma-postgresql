import {
  Body,
  Controller,
  Get,
  Post
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDto } from './dto/create.user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller({})
@ApiTags('Users')
export class UsersController {
  constructor(private usersService: UsersService) {}


  @Get('/users')
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Post('/users')
  createUser(@Body() user: UserCreateDto) {
    return this.usersService.createUser(user);
  }
}
