import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

export class UserDao {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserById(id: number): Promise<User[]> {
    return await this.userRepository.find({
      where: [{ id }],
    });
  }

  async createUser(user: User) {
    return await this.userRepository.save(user);
  }

  async updateUser(id: number, user: User) {
    const editUser = await this.userRepository.findOne({
      where: [{ id }],
    });
    if (!user) {
      throw new NotFoundException('User is not found.');
    }
    editUser.username = user.username;
    editUser.password = user.password;
    editUser.isAdmin = user.isAdmin;
    await this.userRepository.save(editUser);
    return editUser;
  }

  async deleteUser(id: number) {
    const user = await this.userRepository.delete(id);
    return user;
  }
}
