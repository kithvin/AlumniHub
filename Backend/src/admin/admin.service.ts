import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Response } from 'express';
import { LoginAdminDto } from './dto/login-admin.dto';

@Injectable()
export class AdminService {
  constructor(private readonly jwtService: JwtService) {}

  private setAdminCookie(res: Response, token: string) {
    res.cookie('adminToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
  }

  async login(loginAdminDto: LoginAdminDto, res: Response) {
    const { email, password } = loginAdminDto;

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const token = this.jwtService.sign(
      {
        email,
        role: 'admin',
      },
      {
        secret: process.env.JWT_SECRET,
        expiresIn: '7d',
      },
    );

    this.setAdminCookie(res, token);

    return {
      success: true,
      message: 'Logged In',
    };
  }

  async isAuth() {
    return {
      success: true,
    };
  }

  async logout(res: Response) {
    res.clearCookie('adminToken', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
    });

    return {
      success: true,
      message: 'Logged Out',
    };
  }
}