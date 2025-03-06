import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cidade } from '../city/city.entity';

@Entity('usuario')
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id_usu' })
  id!: number;

  @Column({ name: 'nome_usu', length: 150 })
  nome: string;

  @Column({ name: 'genero_usu', nullable: true })
  genero?: number;

  @Column({ name: 'email_usu', length: 150, unique: true })
  email: string;

  @Column({ name: 'cpf_usu', length: 14, unique: true, nullable: true })
  cpf?: string;

  @Column({ name: 'telefone_usu', length: 95 })
  telefone: string;

  @Column({ name: 'senha_usu', length: 255 })
  senha: string;

  @Column({ name: 'datanasc_usu', type: 'date', nullable: true })
  datanasc?: Date;

  @ManyToOne(() => Cidade, (cidade) => cidade.usuarios)
  cidade: Cidade;
}