import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { AuthInterceptor } from 'src/interceptor/auth.interceptor';
import { UsersService } from 'src/services/users.service';

@Controller('users')
@UseInterceptors(AuthInterceptor)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() user: User) {
    return this.userService.createUser(user);
  }

  @Put(':id')
  updateUser(@Body() user: User, @Param('id') id: number) {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
