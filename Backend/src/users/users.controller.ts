import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { UserAuthGuard } from '../common/guards/user-auth.guard';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  register(
    @Body() registerUserDto: RegisterUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.usersService.register(registerUserDto, res);
  }

  @Post('login')
  login(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.usersService.login(loginUserDto, res);
  }

  @Get('is-auth')
  @UseGuards(UserAuthGuard)
  isAuth(@Req() req: Request) {
    return this.usersService.isAuth(req['user'].id);
  }

  @Get('logout')
  @UseGuards(UserAuthGuard)
  logout(@Res({ passthrough: true }) res: Response) {
    return this.usersService.logout(res);
  }
}