import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/users.controller';
import { AuthMiddleware } from './middleware/auth.middleware';
import { UsersModule } from './modules/users.module';
import { UsersService } from './services/users.service';
import { dbConfig } from './config/db.config';

@Module({
  imports: [dbConfig, UsersModule],
  // controllers: [AppController, UsersController],
  // providers: [AppService, UsersService],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('users');
  }
}
