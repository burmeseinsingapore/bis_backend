import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src/entities/entity';

export const dbConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root123!@#',
  database: 'bis_db',
  entities,
  synchronize: true,
});
