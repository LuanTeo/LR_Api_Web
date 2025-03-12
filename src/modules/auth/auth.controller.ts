/* eslint-disable prettier/prettier */
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
import { AuthExceptionFilter } from 'src/common/filters/auth-exceptions.filter';
import { AuthenticatedGuard } from 'src/common/guards/authenticated.guard';
import { LoginGuard } from 'src/common/guards/login.guard';
import { CityService } from 'src/modules/city/city.service';
import { SetupService } from '../setup/setup.service';

@Controller('auth')
@UseFilters(AuthExceptionFilter)
export class AuthController {
  constructor(private readonly cityService: CityService, private readonly setupService: SetupService) { }
  @Get('/login')
  @Render('auth/login')
  index(@Request() req): { message: string } {
    return { message: req.flash('loginError') };
  }

  @UseGuards(LoginGuard)
  @Post('/login')
  login(@Res() res: Response) {
    res.redirect('/auth/home');
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/home')
  @Render('home')
  async getHome(@Request() req) {
    const top5Setups = await this.setupService.findTop5MaisCaros();
    const setups = await this.setupService.getAll();
    return { user: req.user, top5Setups, setups };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/profile')
  @Render('auth/profile')
  getProfile(@Request() req) {
    return { user: req.user };
  }

  @Get('/logout')
  logout(@Request() req, @Res() res: Response) {
    req.session.destroy();
    res.redirect('/');
  }

  @Get('/register')
  @Render('users/formulario') // Renderiza o formulário de cadastro
  async create() {
    const cidades = await this.cityService.getAll(); // Busca as cidades
    return { cidades }; // Passa as cidades para o template
  }
}
