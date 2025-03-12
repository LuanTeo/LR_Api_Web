/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Computador } from './computer.entity';

@Injectable()
export class ComputadorService {
    async getAll() {
        return await Computador.find({
            order: { nome: 'ASC' }, // Ordena os computadores pelo nome em ordem ascendente
        });
    }
    async findById(id: number) {
        return await Computador.findOne({ where: { id } });
    }
    async create(dados: any) {
        const computador = Computador.create({ ...dados });
        return await computador.save();
    }
    async update(id: number, dados: any) {
        const computador = await this.findById(id);
        if (!computador) {
            return null;
        }
        Object.assign(computador, dados);
        return await computador.save();
    }

    async delete(id: number) {
        const computador = await this.findById(id);
        if (!computador) {
            return null;
        }
        await Computador.remove(computador);
        return true;
    }

    async buscarPorTermo(termo: string) {
        return await Computador.createQueryBuilder('computador')
            .where('computador.nome LIKE :termo', { termo: `%${termo}%` })
            .orWhere('computador.especificacao LIKE :termo', { termo: `%${termo}%` })
            .getMany();
    }
}