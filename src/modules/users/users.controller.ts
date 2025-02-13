/* eslint-disable prettier/prettier */
import { Controller, Get, Render, Body, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { setFlashErrors, setOld } from 'src/common/helpers/flash-errors';
import { UserValidator } from "./users.validator";

@Controller('users')
export class UsersController {

  constructor(private readonly user: UsersService){}

  @Get()
  @Render('users/index')
  index() {
    // Lógica para obter a lista de usuários, se necessário
    return { users: this.user.getAll()};
  }

  @Get('/create')
  @Render('users/formulario')
  create() {
    // Lógica para inicializar o formulário de cadastro, se necessário
    return {};
  }
}
