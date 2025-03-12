/* eslint-disable prettier/prettier */
import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../users/users.entity";
import { Setup } from "../setup/setup.entity";

@Entity('Favorito')
export class Favorito extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id_fav' })
    id: number;

    @ManyToOne(() => Usuario, (usuario) => usuario.favoritos)
    @JoinColumn({ name: 'id_usu_fk' })
    usuario: Usuario;

    @ManyToOne(() => Setup, (setup) => setup.favoritos)
    @JoinColumn({ name: 'id_set_fk' })
    setup: Setup;

}