import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'src/controllers/users.controller';
import { UserDao } from 'src/dao/users.dao';
import { User } from 'src/entities/entity';
import { UsersService } from 'src/services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, UserDao],
  controllers: [UsersController],
})
export class UsersModule {}
