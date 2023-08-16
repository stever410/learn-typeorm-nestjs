import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config({
  path: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
});

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/**/migrations/*.js'],
  logging: true,
  synchronize: false,
  migrationsRun: true,
});
