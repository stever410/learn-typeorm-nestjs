import { Module } from '@nestjs/common';
import { DatabaseConfigModule } from './configs/database.config';
import { EnvConfigModule } from './configs/env.config';
import { UserModule } from './user/user.module';

@Module({
  imports: [EnvConfigModule, DatabaseConfigModule, UserModule],
})
export class AppModule {}
