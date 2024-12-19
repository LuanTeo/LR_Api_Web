/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Render, Delete } from '@nestjs/common';

@Controller('computer')
export class ComputerController {

    @Get()
    @Render('computer/index')
    index(){
        return {};
    }

    @Get('/create')
    @Render('computer/form')
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
