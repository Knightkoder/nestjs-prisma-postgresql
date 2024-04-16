import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './dto/create.user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Get all users
  getUsers() {
    return this.prisma.user.findMany();
  }

  createUser(user: UserCreateDto) {
    return this.prisma.user.create({
      data: user,
    });
  }
}
