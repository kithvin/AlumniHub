import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import type { Response } from 'express';
import { AdminAuthGuard } from '../common/guards/admin-auth.guard';
import { LoginAdminDto } from './dto/login-admin.dto';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('login')
  login(
    @Body() loginAdminDto: LoginAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.login(loginAdminDto, res);
  }

  @Get('is-auth')
  @UseGuards(AdminAuthGuard)
  isAuth() {
    return this.adminService.isAuth();
  }

  @Get('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    return this.adminService.logout(res);
  }
}