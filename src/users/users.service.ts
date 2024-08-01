import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto-users/create-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  create(userDto: CreateUserDto) {
    const newUser = { id: Date.now(), ...userDto };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }
}
