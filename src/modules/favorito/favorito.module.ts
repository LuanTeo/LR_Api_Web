import { Module } from '@nestjs/common';
import { FavoritoController } from './favorito.controller';
import { FavoritoService } from './favorito.service';

@Module({
  controllers: [FavoritoController],
  providers: [FavoritoService],
})
export class FavoritoModule {}
