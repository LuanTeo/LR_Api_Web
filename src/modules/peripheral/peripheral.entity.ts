/* eslint-disable prettier/prettier */
// src/per/per.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { Setup } from '../setup/setup.entity';

@Entity('Periferico') // Nome da tabela no banco de dados
export class Peripheral  extends BaseEntity{
    @PrimaryGeneratedColumn({ name: 'id_per' }) // Coluna id_per como chave primária
    id: number;

    @Column({ name: 'nome_per', length: 85 }) // Coluna nome_per com tamanho máximo de 85 caracteres
    nome: string;

    @Column({ name: 'valor_per', type: 'double' }) // Coluna valor_per do tipo DOUBLE
    valor: number;

    @Column({ name: 'especificacao_per', type: 'tinytext', nullable: true }) // Coluna especificacao_per do tipo TINYTEXT (opcional)
    especificacao: string;

    @Column({ name: 'link_per', type: 'longtext' }) // Coluna link_per do tipo LONGTEXT
    link: string;

    @Column({ name: 'unidade_per', type: 'int' }) // Coluna unidade_per do tipo INT
    unidade: number;

    @ManyToOne(() => Setup, (setup) => setup.peripherals)
  setup: Setup;
}