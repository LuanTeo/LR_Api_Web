/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response, Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @Render('users/index')
  async index() {
    const users = await this.userService.getAll();
    return { users };
  }

  @Get('/create')
  @Render('users/formulario')
  create() {
    return {};
  }

  @Post('/create')
  async createUser(@Req() req: Request, @Res() res: Response) {
    const { nome, email, genero, cpf, telefone, senha, confirmarSenha, cidadeId } = req.body;

    if (senha !== confirmarSenha) {
      req.flash('error', 'As senhas não coincidem');
      return res.redirect('/auth/register');
    }

    try {
      const user = await this.userService.create({
        nome,
        email,
        genero,
        cpf,
        telefone,
        senha, // Certifique-se de que a senha seja criptografada antes de salvar no banco de dados
        cidadeId,
      });

      req.flash('success', 'Cadastro realizado com sucesso!');
      res.redirect('/auth/login');
      return user;

    } catch (error) {
      req.flash('error', 'Erro ao cadastrar usuário');
      res.redirect('/auth/register');
    }
  }
}