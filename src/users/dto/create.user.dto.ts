import { Optional } from '@nestjs/common';
import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from 'class-validator';

export class UserCreateDto {
  id?: number;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  
  @Optional()
  age: number;

  @Optional()
  phone: string;
}
