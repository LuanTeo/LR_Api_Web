/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ComponentService } from './component.service';
import { ComponentController} from './component.controller'; 

@Module({
  providers: [ComponentService],
  controllers: [ComponentController],
})
export class ComponentModule {}
