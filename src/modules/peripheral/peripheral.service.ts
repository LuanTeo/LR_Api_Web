/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Peripheral } from './peripheral.entity';


@Injectable()
export class PerifericoService {
    async getAll() {
        return await Peripheral.find({
            order: { nome: 'ASC' }, // Ordena pelo nome em ordem ascendente
        });
    }

    async findOneById(id: number) {
        return await Peripheral.findOne({ where: { id } }); // Busca pelo id_Peripheral
    }

    async create(dados: any) {
        const peripheral = Peripheral.create({ ...dados }); // Cria uma nova instância de Peripheral
        return await peripheral.save(); // Salva no banco de dados
    }


    async update(id: number, dados: any) {
        const Peripheral = await this.findOneById(id); // Busca o Peripheral pelo id

        if (!Peripheral) {
            return null; // Retorna null se não encontrar o Peripheral
        }

        Object.assign(Peripheral, dados); // Atualiza os dados do Peripheral
        return await Peripheral.save(); // Salva as alterações no banco de dados
    }

    async delete(id: number) {
        const peripheral = await this.findOneById(id); // Busca o Peripheral pelo id

        if (!peripheral) {

            return null; // Retorna null se não encontrar o Peripheral
        }

        await Peripheral.remove(peripheral); // Remove o Peripheral do banco de dados
        return true; // Retorna true para indicar sucesso
    }

    async buscarPorTermo(termo: string) {
        return await Peripheral.createQueryBuilder('periferico')
            .where('periferico.nome LIKE :termo', { termo: `%${termo}%` })
            .orWhere('periferico.especificacao LIKE :termo', { termo: `%${termo}%` })
            .getMany();
    }
}