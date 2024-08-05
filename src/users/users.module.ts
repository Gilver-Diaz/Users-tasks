import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TasksModule } from '../tasks/tasks.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
