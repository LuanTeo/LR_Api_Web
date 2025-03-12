/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Cidade } from 'src/modules/city/city.entity';

@Injectable()
export class CityService {
  async getAll(): Promise<Cidade[]> {
    return await Cidade.find({
      order: { nome: 'ASC' }, // Ordena as cidades pelo nome em ordem ascendente
      relations: ['estado'], // Carrega a relação com o estado
    });
  }

  async findOneById(id: number): Promise<Cidade | null> {
    return await Cidade.findOne({
      where: { id },
      relations: ['estado'], // Carrega a relação com o estado
    });
  }

  async findByName(nome: string): Promise<Cidade | null> {
    return await Cidade.findOne({
      where: { nome },
      relations: ['estado'], // Carrega a relação com o estado
    });
  }

  async findByEstado(estadoId: number): Promise<Cidade[]> {
    return await Cidade.find({
      where: { estado: { id: estadoId } }, // Filtra cidades pelo ID do estado
      order: { nome: 'ASC' }, // Ordena as cidades pelo nome em ordem ascendente
      relations: ['estado'], // Carrega a relação com o estado
    });
  }

  async create(dados: any): Promise<Cidade> {
    const cidade = Cidade.create({ ...dados }); // Cria uma nova instância de Cidade
    return await cidade.save(); // Salva a cidade no banco de dados
  }

  async update(id: number, dados: any) {
    const cidade = await this.findOneById(id); // Busca a cidade pelo ID

    if (!cidade) {
      return null; // Retorna null se a cidade não for encontrada
    }

    return await Cidade.update(id, { ...dados }); // Salva as alterações no banco de dados
  }

  async delete(id: number): Promise<boolean> {
    const cidade = await this.findOneById(id); // Busca a cidade pelo ID

    if (!cidade) {
      return false; // Retorna false se a cidade não for encontrada
    }

    await Cidade.remove(cidade); // Remove a cidade do banco de dados
    return true; // Retorna true para indicar sucesso
  }
}