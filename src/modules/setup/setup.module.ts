/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SetupController } from './setup.controller';
import { SetupService } from './setup.service';
import { PassportModule } from '@nestjs/passport';
import { PeripheralModule } from '../peripheral/peripheral.module';
import { ComputerModule } from '../computer/computer.module';

@Module({
    imports: [PassportModule, PeripheralModule, ComputerModule],
    controllers:[SetupController],
    providers: [SetupService],
    exports: [SetupService] 
})
export class SetupModule {}
