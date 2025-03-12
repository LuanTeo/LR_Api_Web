/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Estado } from '../state/state.entity';
import { Usuario } from '../users/users.entity';

@Entity('cidade')
export class Cidade extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id_cid' })
  id!: number;

  @Column({ name: 'nome_cid', length: 40, unique: true })
  nome: string;

  @ManyToOne(() => Estado, (estado) => estado.cidades)
  @JoinColumn({ name: 'id_est_fk' })
  estado: Estado;

  @OneToMany(() => Usuario, (usuario) => usuario.cidade)
  usuarios: Usuario[];
}