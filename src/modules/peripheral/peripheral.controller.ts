/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put, Render, Query, Res, Req, UseFilters, UseGuards } from "@nestjs/common";
import { PerifericoService } from './peripheral.service';
import { Response, Request } from 'express';
import { AuthExceptionFilter } from "src/common/filters/auth-exceptions.filter";
import { AuthenticatedGuard } from "src/common/guards/authenticated.guard";

@Controller('peripheral')
@UseFilters(AuthExceptionFilter)
export class PeripheralController {
    constructor(private readonly perifericoService: PerifericoService) {}

    @UseGuards(AuthenticatedGuard)
    @Get()
    @Render('peripheral/index')
    async index(){
        const perifericos = await this.perifericoService.getAll();
        return {perifericos}
    }

    @UseGuards(AuthenticatedGuard)
    @Get('/create')
    @Render('peripheral/form')
    form(){
        return {}
    }

    @Post('/create')
    async createPeripheral(@Req() req: Request, @Res() res: Response){
        const { nome, valor, especificacao, link, unidade } = req.body;

        try {
            const periferico = await this.perifericoService.create({
                nome,
                valor,
                especificacao,
                link,
                unidade
            });

            req.flash('success','Cadastro realizado com sucesso!');
            res.redirect('/peripheral');
            return periferico;
        } catch (error) {
            req.flash('error', 'Erro ao cadastrar Periferico\n' + error);
            res.redirect('/peripheral/create');
        }
        return {}
    }

    @Put('/update')
    put(){
        return {}
    }

    @Delete('/delete')
    delete(){
        return {}
    }

    @Get('/buscar')
  async buscarPerifericos(@Query('termo') termo: string, @Res() res: Response) {
    try {
      const perifericos = await this.perifericoService.buscarPorTermo(termo);
      res.json(perifericos);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar periféricos' });
    }
  }
}