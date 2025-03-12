/* eslint-disable prettier/prettier */
import { Controller, Post, Req, Res, Render, Get , Param, UseGuards} from '@nestjs/common';
import { Request, Response } from 'express';
import { SetupService } from './setup.service';
import { PerifericoService } from '../peripheral/peripheral.service';
import { ComputadorService } from '../computer/computer.service';
import { AuthenticatedGuard } from 'src/common/guards/authenticated.guard';

@Controller('setup')
@UseGuards(AuthenticatedGuard)
export class SetupController {
    constructor(private readonly setupService: SetupService, private readonly peripheralService: PerifericoService, private readonly computadorService: ComputadorService) {}
    
    @UseGuards(AuthenticatedGuard)
    @Get()
    @Render('setup/index')
    async index(){
        const setup = await this.setupService.getAll();
        return {setup};
    }

    @UseGuards(AuthenticatedGuard)
    @Get('create')
    @Render('setup/form')
    async create(){
      const peripherals = await this.peripheralService.getAll(); // Busca todos os periféricos
      const computers = await this.computadorService.getAll(); // Busca todos os computeres 
        return {peripherals, computers};
    }


    @Get(':id')
    @Render('setup/details')
    async viewSetup(@Param('id') id: number) {
    const setup = await this.setupService.findOneById(id);
    const recomendados = await this.setupService.findTop10Recomendados();

    return { setup, recomendados };
    }
    @Post('/create')
  async createSetup(@Req() req: Request, @Res() res: Response) {
    const { unidade, nome, valor, descricao, imagem, peripherals, computer } = req.body;

    try {
      // Cria o Setup
      const setup = await this.setupService.create({
        unidade,
        nome,
        valor,
        descricao,
        imagem
      });

      // Associa os Periféricos selecionados ao Setup
    if (peripherals && peripherals.length > 0) {
      for (const peripheralId of peripherals) {
        const peripheral = await this.peripheralService.findOneById(peripheralId);
        if (peripheral) {
          peripheral.setup = setup; // Associa o Peripheral ao Setup
          await peripheral.save();
        }
      }
    }
// Associa os Periféricos selecionados ao Setup
if (computer && computer.length > 0) {
  for (const computerId of computer) {
    const computer = await this.computadorService.findById(computerId);
    if (computer) {
      computer.setup = setup; // Associa o Computador ao Setup
      await computer.save();
    }
  }
}


      req.flash('success', 'Setup cadastrado com sucesso!');
      res.redirect('/setup');
    } catch (error) {
      req.flash('error', 'Erro ao cadastrar setup');
      res.redirect('/setup/create');
    }
  }
}
