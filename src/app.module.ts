import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TasksModule, UsersModule],
  controllers: [AppController],
})
export class AppModule {}
