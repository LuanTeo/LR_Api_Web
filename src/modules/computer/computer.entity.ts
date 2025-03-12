/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from 'typeorm';
import { Component } from '../component/component.entity';
import { Setup } from '../setup/setup.entity';

@Entity('Computador') // Nome da tabela no banco de dados
export class Computador extends BaseEntity{
    @PrimaryGeneratedColumn({ name: 'id_com' }) // Coluna id_com como chave primária
    id: number;

    @Column({ name: 'unidade_com', type: 'int' }) // Coluna unidade_com
    unidade: number;

    @Column({ name: 'nome_com', length: 85 }) // Coluna nome_com com tamanho máximo de 85 caracteres
    nome: string;

    @Column({ name: 'valor_com', type: 'double' }) // Coluna valor_com do tipo DOUBLE
    valor: number;

    @Column({ name: 'link_com', type: 'longtext' })
    link: string;

    @OneToMany(() => Component, (Component) => Component.computador)
    components: Component[];

    @ManyToOne(() => Setup, (Setup) => Setup.computer)
    setup: Setup;
}