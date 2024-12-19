/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PeripheralController } from './peripheral.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [PassportModule],
    controllers: [PeripheralController],
})
export class PeripheralModule {}