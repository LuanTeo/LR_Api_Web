/* eslint-disable prettier/prettier */
import { Controller, Get, Render } from '@nestjs/common';

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
