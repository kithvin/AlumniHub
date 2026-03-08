import { IsEmail, MinLength } from 'class-validator';

export class LoginAdminDto {
  @IsEmail()
  email: string;

  @MinLength(1)
  password: string;
}