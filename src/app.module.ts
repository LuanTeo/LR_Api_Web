/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AppController } from './app.controller';
import { PerifericosModule } from './modules/perifericos/perifericos.module';

@Module({
  imports: [AuthModule, UsersModule, PerifericosModule],
  controllers: [AppController],
  providers: [],
})

export class AppModule {}