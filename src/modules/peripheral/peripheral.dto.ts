/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, MinLength, IsNumber , IsUrl} from "class-validator";

export class PeripheralDto {
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    @MinLength(5, { message: 'O nome deve ter no mínimo 5 caracteres' })
    nome: string;

    @IsNotEmpty({ message: 'A unidade é obrigatória' })
    @IsNumber({}, { message: 'A unidade deve ser um número' })
    unidade: number;

    @IsNotEmpty({ message: 'O Valor é obrigatória' })
    @IsNumber({}, { message: 'O Valor deve ser um número' })
    valor: number;

    @IsNotEmpty({ message: 'O Link é obrigatório' })
    @MinLength(5, { message: 'O Link deve ter no mínimo 5 caracteres' })
    @IsNotEmpty({ message: 'O Link deve conter um endereço válido' })
    @IsUrl({}, { message: 'O Link deve conter um endereço válido' })
    link:string;

    especificacao: string;
}

export class PeripheralUpdateDto extends PartialType(PeripheralDto) { }