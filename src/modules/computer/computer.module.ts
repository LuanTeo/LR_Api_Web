/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { ComputadorService } from './computer.service';

@Module({
    controllers: [ComputerController],
    providers: [ComputadorService],
    exports: [ComputadorService]
})
export class ComputerModule { }
