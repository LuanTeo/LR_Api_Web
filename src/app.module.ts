/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AppController } from './app.controller';
import { PeripheralModule } from './modules/peripheral/peripheral.module';
import { ComputerController } from './modules/computer/computer.controller';
import { ComputerModule } from './modules/computer/computer.module';
import { ComponentController } from './modules/component/component.controller';
import { ComponentModule } from './modules/component/component.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, UsersModule, PeripheralModule, ComputerModule, ComponentModule, DatabaseModule],
  controllers: [AppController, ComputerController, ComponentController],
  providers: [],
})


export class AppModule {}