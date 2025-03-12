/* eslint-disable prettier/prettier */
import { Controller, Get, Render } from '@nestjs/common';
import { SetupService } from './modules/setup/setup.service';

@Controller()
export class AppController {
  constructor(private readonly setupService: SetupService) {}
  @Get('/')
  @Render('home')
  async home() {
    const top5Setups = await this.setupService.findTop5MaisCaros();
    const setups = await this.setupService.getAll();
    return {top5Setups, setups};
  }

  @Get('/about')
  @Render('about')
  about() {
    return {};
  }

}
