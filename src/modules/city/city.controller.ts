/* eslint-disable prettier/prettier */
import { Controller, Get, Render, UseFilters, UseGuards } from '@nestjs/common';
import { CityService } from './city.service';
import { AuthExceptionFilter } from 'src/common/filters/auth-exceptions.filter';
import { AuthenticatedGuard } from 'src/common/guards/authenticated.guard';

@Controller('city')
@UseFilters(AuthExceptionFilter)
export class CityController {
    constructor(private readonly cityService: CityService) {}

    @UseGuards(AuthenticatedGuard)
    @Get()
    @Render('city/index')
    async index(){
        const city = await this.cityService.getAll();
        return { city };
    }
}
