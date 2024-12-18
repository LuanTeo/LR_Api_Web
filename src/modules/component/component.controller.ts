/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Render, Delete } from '@nestjs/common';

@Controller('component')
export class ComponentController{

    @Get()
    @Render('component/index')
    index(){
        return {};
    }

    @Get('/create')
    @Render('component/form')
    form(){
        return {};
    }

    @Post('/create')
    create(){
        return {};
    }

    @Put('/update')
    update(){
        return {};
    }
    
    @Delete('/delete')
    delete(){
        return {};
    }
}
