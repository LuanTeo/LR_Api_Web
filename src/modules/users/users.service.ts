/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { IsEmail } from 'class-validator';

@Injectable()
export class UsersService {
  private readonly users: any[];
  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: '12345',
        pet: { name: 'alfred', picId: 1 },
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
        pet: { name: 'gopher', picId: 2 },
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
        pet: { name: 'jenny', picId: 3 },
      },
    ];
  }

  async findOne(username: string): Promise<any> {
    return this.users.find(user => user.username === username);
  }

  getAll(){
    return [
      {
        nome: 'Luan Mateus',
        email:'luanmateus2002@gmail.com',
        cpf:'111.111.111-11',

      }
    ]
  }
}
