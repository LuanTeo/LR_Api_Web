/* eslint-disable prettier/prettier */
import { Controller,Req, Res, Get, Post, Put, Render, Delete, Query, UseFilters, UseGuards } from '@nestjs/common';
import { ComputadorService } from './computer.service';
import { Response, Request } from 'express';
import { AuthExceptionFilter } from 'src/common/filters/auth-exceptions.filter';
import { AuthenticatedGuard } from 'src/common/guards/authenticated.guard';

@Controller('computer')
@UseFilters(AuthExceptionFilter)
export class ComputerController {
    constructor(private readonly computadorService: ComputadorService) {}

    @UseGuards(AuthenticatedGuard)
    @Get()
    @Render('computer/index')
    async index(){
        const computador = await this.computadorService.getAll();
        return {computador};
    }

    @UseGuards(AuthenticatedGuard)
    @Get('/create')
    @Render('computer/form')
    form(){
        return {};
    }

    @UseGuards(AuthenticatedGuard)
    @Post('/create')
    async createComputador(@Req() req: Request, @Res() res: Response){
        const { unidade, nome, valor, link} = req.body;

        try {
            const computador = await this.computadorService.create({
                unidade,
                nome,
                valor,
                link
            });
            req.flash('success','Cadastro Realizado com Sucesso!');
            res.redirect('/computer/index');
            return computador;
        } catch (error) {
            req.flash('error', 'Erro ao cadastrar computador\n' + error);
            res.redirect('/computer/create');
        }
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

    @Get('/buscar')
  async buscarComputadores(@Query('termo') termo: string, @Res() res: Response) {
    try {
      const computadores = await this.computadorService.buscarPorTermo(termo);
      res.json(computadores);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar computadores' });
    }
  }
}
