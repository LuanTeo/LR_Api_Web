/* eslint-disable prettier/prettier */
// src/component/component.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Computador } from '../computer/computer.entity';

@Entity('Componente')
export class Component {
    @PrimaryGeneratedColumn({ name: 'id_comp' })
    id: number;

    @Column({ name: 'nome_comp', length: 85 })
    nome: string;

    @Column({ name: 'valor_comp', type: 'double' })
    valor: number;

    @Column({ name: 'especificacao_comp', type: 'tinytext', nullable: true })
    especificacao: string;

    @Column({ name: 'link_comp', type: 'longtext' })
    link: string;

    @Column({ name: 'unidade_comp', type: 'int' })
    unidade: number;

    @ManyToOne(() => Computador, (computador) => computador.components)
    computador: Computador;
}