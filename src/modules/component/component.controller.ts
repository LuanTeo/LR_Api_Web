/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Render, Delete, UseFilters, UseGuards } from '@nestjs/common';
import { AuthExceptionFilter } from 'src/common/filters/auth-exceptions.filter';
import { AuthenticatedGuard } from 'src/common/guards/authenticated.guard';

@Controller('component')
@UseFilters(AuthExceptionFilter)
export class ComponentController{

    @UseGuards(AuthenticatedGuard)
    @Get()
    @Render('component/index')
    index(){
        return {};
    }

    @UseGuards(AuthenticatedGuard)
    @Get('/create')
    @Render('component/form')
    form(){
        return {};
    }

    
    @UseGuards(AuthenticatedGuard)
    @Post('/create')
    create(){
        return {};
    }

    @UseGuards(AuthenticatedGuard)
    @Put('/update')
    update(){
        return {};
    }
    
    @UseGuards(AuthenticatedGuard)
    @Delete('/delete')
    delete(){
        return {};
    }
}
