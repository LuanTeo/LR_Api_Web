/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Setup } from './setup.entity';

@Injectable()
export class SetupService {
    async getAll() {
        return await Setup.find({
            order: { nome: 'ASC' }, // Ordena pelo nome em ordem ascendente
        });
    }

    async findOneById(id: number) {
        return await Setup.findOne({ where: { id } }); // Busca pelo id_set
    }

    async create(dados: any) {
        const setup = Setup.create({ ...dados }); // Cria uma nova instância de Setup
        return await setup.save(); // Salva no banco de dados
    }

    async update(id: number, dados: any) {
        const setup = await this.findOneById(id); // Busca o setup pelo id

        if (!setup) {
            return null; // Retorna null se não encontrar o setup
        }

        Object.assign(setup, dados); // Atualiza os dados do setup
        return await setup.save(); // Salva as alterações no banco de dados
    }

    async delete(id: number) {
        const setup = await this.findOneById(id); // Busca o setup pelo id

        if (!setup) {
            return null; // Retorna null se não encontrar o setup
        }

        await Setup.remove(setup); // Remove o setup do banco de dados
        return true; // Retorna true para indicar sucesso
    }

    async findTop5MaisCaros() {
        return await Setup.find({
          order: { valor: 'DESC' },
          take: 5,
        });
      }

      async buscarPorTermo(termo: string) {
              return await Setup.createQueryBuilder('setup')
                  .where('setup.nome LIKE :termo', { termo: `%${termo}%` })
                  .orWhere('setup.descricao LIKE :termo', { termo: `%${termo}%` })
                  .getMany();
          }

      async findTop10Recomendados() {
          return await Setup.find({
            order: { id: 'DESC' }, // Ordena pelo ID em ordem decrescente (mais recentes primeiro)
            take: 10, // Limita o resultado a 10 setups
          });
        }
}