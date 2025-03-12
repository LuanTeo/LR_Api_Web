/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { AuthController } from './auth.controller';
import { CityModule } from '../city/city.module';
import { SetupModule } from '../setup/setup.module';
import { LoginGuard } from 'src/common/guards/login.guard';

@Module({
  imports: [UsersModule, PassportModule, CityModule, SetupModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, SessionSerializer, LoginGuard],
})
export class AuthModule { }
