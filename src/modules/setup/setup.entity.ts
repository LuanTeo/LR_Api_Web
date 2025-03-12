/* eslint-disable prettier/prettier */
// src/setup/setup.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Peripheral } from '../peripheral/peripheral.entity';
import { Computador } from '../computer/computer.entity';
import { Favorito } from '../favorito/favorito.entity';

@Entity('Setup') // Nome da tabela no banco de dados
export class Setup extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id_set' }) // Coluna id_set como chave primária
  id: number;

  @Column({ name: 'unidade_set', type: 'int' }) // Coluna unidade_set
  unidade: number;

  @Column({ name: 'nome_set', length: 85 }) // Coluna nome_set com tamanho máximo de 85 caracteres
  nome: string;

  @Column({ name: 'valor_set', type: 'double' }) // Coluna valor_set do tipo DOUBLE
  valor: number;

  @Column({ name: 'descricao_set', type: 'tinytext' }) // Coluna descricao_set do tipo TINYTEXT
  descricao: string;

  @Column({ name: 'imagem_set', type: 'longtext' }) // Caminho da imagem
  imagem: string;

  @OneToMany(() => Peripheral, (peripheral) => peripheral.setup)
  peripherals: Peripheral[];

  @OneToMany(() => Computador, (computer) => computer.setup)
  computer: Computador[];

  @OneToMany(() => Favorito, (favorito) => favorito.setup)
  favoritos: Favorito;
}