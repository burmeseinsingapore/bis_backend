import { Injectable } from '@nestjs/common';
import { UserDao } from 'src/dao/users.dao';
import { User } from 'src/entities/entity';

@Injectable()
export class UsersService {
  constructor(private readonly userDao: UserDao) {}

  getAllUsers(): Promise<User[]> {
    return this.userDao.getAllUsers();
  }

  getUserById(id: number): Promise<User[]> {
    return this.userDao.getUserById(id);
  }

  createUser(user: User) {
    return this.userDao.createUser(user);
  }

  updateUser(id: number, user: User) {
    return this.userDao.updateUser(id, user);
  }

  deleteUser(id: number) {
    return this.userDao.deleteUser(id);
  }
}
