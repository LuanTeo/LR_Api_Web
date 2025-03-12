/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Favorito } from './favorito.entity';

@Injectable()
export class FavoritoService {

    async getAll(){
        return await Favorito.find()
    }

    async getByUserId(userId: number) {
        return await Favorito.find({
          where: { usuario: { id: userId } }, // Filtra favoritos pelo ID do usuário
          relations: ['setup'], // Carrega os dados do Setup associado
        });
    }
}
