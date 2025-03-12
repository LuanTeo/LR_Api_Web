/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Usuario } from './users.entity';

@Injectable()
export class UsersService {
    async getAll() {
        return await Usuario.find({
            order: { nome: 'ASC' }
        });
    }

    async findOne(username: string) {
      return await Usuario.findOne({ where: { email: username } });
  } 

    async findOneById(id: number) {
        return await Usuario.findOne({ where: { id: id } });
    }

    async create(dados: any) {
        const usuario = Usuario.create({ ...dados });
        return await usuario.save();
    }

    async update(id: number, dados: any) {
        const usuario = await this.findOneById(id);

        if (!usuario) {
            return null;
        }

        return await Usuario.update(id, { ...dados });
    }

    async delete(id: number) {
        const usuario = await this.findOneById(id);

        if (!usuario) {
            return null;
        }

        return await Usuario.delete(id);
    }
}