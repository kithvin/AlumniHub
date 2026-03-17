import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  message: string;
}