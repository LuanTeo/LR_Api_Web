/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PeripheralController } from './peripheral.controller';
import { PassportModule } from '@nestjs/passport';
import { PerifericoService } from './peripheral.service';

@Module({
    imports: [PassportModule],
    controllers: [PeripheralController],
    providers: [PerifericoService],
    exports: [PerifericoService]
})
export class PeripheralModule {}