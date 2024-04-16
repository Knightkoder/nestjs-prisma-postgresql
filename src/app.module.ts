import { Module } from '@nestjs/common'
import { TasksModule } from './tasks/tasks.module'
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloModule } from './hello/hello.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule, HelloModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
