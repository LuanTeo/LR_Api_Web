/* eslint-disable prettier/prettier */
import { Controller, Get, Render } from "@nestjs/common";

@Controller('perifericos')
export class PerifericosController {

    @Get()
    @Render('periferico/index')
    index(){
        return {}
    }

    @Get('/create')
    @Render('periferico/formulario')
    create(){
        return {}
    }
}