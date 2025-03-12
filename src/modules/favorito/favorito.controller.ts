/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Render, UseFilters } from '@nestjs/common';
import { AuthExceptionFilter } from 'src/common/filters/auth-exceptions.filter';
import { FavoritoService } from './favorito.service';

@Controller('favorito')
@UseFilters(AuthExceptionFilter)
export class FavoritoController {
constructor(private readonly favoritoService: FavoritoService){}

@Get(':id')
@Render('favorito/index')
  async index(@Param('id') id: number) {
    const favoritos = await this.favoritoService.getByUserId(id);

    return { favoritos };
  }
}
