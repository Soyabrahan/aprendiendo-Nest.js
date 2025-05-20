import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [TasksModule, UsersModule],
  controllers: [AppController, HelloController],
})
export class AppModule {}
