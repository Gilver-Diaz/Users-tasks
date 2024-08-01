import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TasksModule, UsersModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
