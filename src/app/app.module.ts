import {MiddlewareConsumer, Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../modules/auth/auth.module';
import {AuthMiddleware} from "../common/middlewares/auth.middleware";

@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb://localhost/task_management')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
