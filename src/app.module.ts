import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/users.controller';
import { User } from './entities/user.entity';
import { AuthMiddleware } from './middleware/auth.middleware';
import { UsersModule } from './modules/users.module';
import { UsersService } from './services/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123!@#',
      database: 'bis_db',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
  ],
  // controllers: [AppController, UsersController],
  // providers: [AppService, UsersService],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('users');
  }
}
