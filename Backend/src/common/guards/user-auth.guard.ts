import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';
import { UserJwtPayload } from '../interfaces/user-jwt-payload.interface';

@Injectable()
export class UserAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const token = request.cookies?.token;

    if (!token) {
      throw new UnauthorizedException('Not Authorized');
    }

    try {
      const decoded = this.jwtService.verify<UserJwtPayload>(token, {
        secret: process.env.JWT_SECRET,
      });

      if (!decoded?.id) {
        throw new UnauthorizedException('Not Authorized');
      }

      request['user'] = { id: decoded.id };
      return true;
    } catch {
      throw new UnauthorizedException('Not Authorized');
    }
  }
}