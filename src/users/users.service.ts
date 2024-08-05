import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto-users/create-user.dto';
import { v4 } from 'uuid';
@Injectable()
export class UsersService {
  private users = [];

  //probando como busar el usuario con un Id unico . aun no me funciona ..
  createTasks(name: string, password: string) {
    const users = {
      // v4 (es un ID unico).
      id: v4(),
      name,
      password,
    };
    this.users.push(users);
    return users;
  }

  create(userDto: CreateUserDto) {
    const newUser = { id: Date.now(), ...userDto };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }
}
