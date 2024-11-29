/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PerifericosController } from './perifericos.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [PassportModule],
    controllers: [PerifericosController],
})
export class PerifericosModule {}