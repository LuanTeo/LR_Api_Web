/* eslint-disable prettier/prettier */
import { plainToInstance } from "class-transformer";
import { BaseValidator } from 'src/common/validator/base.validator';
import { IValidator } from 'src/common/validator/interface.validator';
import { UserDto } from './users.dto';

export class UserValidator extends BaseValidator implements IValidator    
{
    validate(data: any): Promise<this>{
        const dados = plainToInstance(UserDto, data);
        return this.validator(dados);
    }
}