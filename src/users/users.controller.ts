import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { UserInterceptor } from 'src/interceptor/user.interceptor';
import { UsersService } from './users.service';

@Controller('users')
@UseInterceptors(UserInterceptor)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
