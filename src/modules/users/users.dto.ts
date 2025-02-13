import { IsNotEmpty } from "class-validator";

export class UserDto {
    @IsNotEmpty({message: 'O campo Nome é Obrigatório',}) nome: string;

    @IsNotEmpty({message: 'O campo Email é Obrigatorio'}) email: string;

    @IsNotEmpty({message: 'O campo Cpf é Obrigatorio'}) cpf: string;

    @IsNotEmpty({message: 'O campo Genero é Obrigatorio'}) Genero: number;
}