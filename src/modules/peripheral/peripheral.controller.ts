/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put, Render } from "@nestjs/common";

@Controller('peripheral')
export class PeripheralController {

    @Get()
    @Render('peripheral/index')
    index(){
        return {}
    }

    @Get('/create')
    @Render('peripheral/form')
    form(){
        return {}
    }

    @Post('/create')
    @Render('peripheral/form')
    create(){
        return {}
    }

    @Put('/update')
    put(){
        return {}
    }

    @Delete('/delete')
    delete(){
        return {}
    }
}