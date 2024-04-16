import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {

  

  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsString()
  description: string;
}
