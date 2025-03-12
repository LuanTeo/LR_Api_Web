/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsEmail, IsDateString, IsNumberString, MinLength, IsOptional, IsNumber } from "class-validator";

export class UserDto {
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    @MinLength(5, { message: 'O nome deve ter no mínimo 5 caracteres' })
    nome: string;

    @IsOptional()
    @IsNumber({}, { message: 'O gênero deve ser um número' })
    genero?: number;

    @IsNotEmpty({ message: 'O email é obrigatório' })
    @IsEmail({}, { message: 'O email deve ser válido' })
    email: string;

    @IsOptional()
    @IsNumberString({}, { message: 'O CPF deve ser uma string numérica' })
    cpf?: string;

    @IsNotEmpty({ message: 'O telefone é obrigatório' })
    telefone: string;

    @IsNotEmpty({ message: 'A senha é obrigatória' })
    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
    senha: string;

    @IsOptional()
    @IsDateString({}, { message: 'A data de nascimento deve ser uma data válida' })
    datanasc?: Date;

    @IsNotEmpty({ message: 'A cidade é obrigatória' })
    @IsNumber({}, { message: 'A cidade deve ser um número' })
    cidadeId: number; // Use cidadeId em vez de cidade, pois é mais comum em DTOs
}

export class UserUpdateDto extends PartialType(UserDto) { }