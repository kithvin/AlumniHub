// import { IsEmail, MinLength } from 'class-validator';

// export class LoginUserDto {
//   @IsEmail()
//   email: string;

//   @MinLength(6)
//   password: string;
// }

import { IsEmail, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}