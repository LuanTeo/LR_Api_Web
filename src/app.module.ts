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
import { CityModule } from './modules/city/city.module';
import { SetupService } from './modules/setup/setup.service';
import { ComputadorService } from './modules/computer/computer.service';
import { FavoritoModule } from './modules/favorito/favorito.module';
import { SetupModule } from './modules/setup/setup.module';

@Module({
  imports: [AuthModule, UsersModule, PeripheralModule, ComputerModule, ComponentModule, DatabaseModule, CityModule, FavoritoModule, SetupModule],
  controllers: [AppController, ComputerController, ComponentController],
  providers: [SetupService, ComputadorService],
})


export class AppModule {}