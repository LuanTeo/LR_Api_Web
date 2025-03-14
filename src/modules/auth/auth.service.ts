/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username, pass): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user && user.senha === pass) {
      const { senha, ...result } = user;
      return result;
    }

    return null;
  }
}