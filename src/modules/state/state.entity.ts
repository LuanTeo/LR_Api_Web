/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cidade } from '../city/city.entity';

@Entity('estado')
export class Estado extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id_est' })
  id!: number;

  @Column({ name: 'nome_est', length: 40 })
  nome: string;

  @Column({ name: 'uf_est', length: 3, nullable: true })
  uf?: string;

  @OneToMany(() => Cidade, (cidade) => cidade.estado)
  cidades: Cidade[];
}