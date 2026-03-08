import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';
import { AdminJwtPayload } from '../interfaces/admin-jwt-payload.interface';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const adminToken = request.cookies?.adminToken;

    if (!adminToken) {
      throw new UnauthorizedException('Not Authorized');
    }

    try {
      const decoded = this.jwtService.verify<AdminJwtPayload>(adminToken, {
        secret: process.env.JWT_SECRET,
      });

      if (
        decoded?.email !== process.env.ADMIN_EMAIL ||
        decoded?.role !== 'admin'
      ) {
        throw new UnauthorizedException('Not Authorized');
      }

      request['admin'] = decoded;
      return true;
    } catch {
      throw new UnauthorizedException('Not Authorized');
    }
  }
}