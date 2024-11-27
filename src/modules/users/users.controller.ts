import {
    Controller,
    Get,
    Post,
    Render,
    Request,
    Res,
    UseFilters,
    UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('users')
export class UsersController {
    @Get()
  @Render('users/index')
  index() {
    // Lógica para obter a lista de usuários, se necessário
    return {};
  }

  @Get('create')
  @Render('users/formulario')
  create() {
    // Lógica para inicializar o formulário de cadastro, se necessário
    return {};
  }
}