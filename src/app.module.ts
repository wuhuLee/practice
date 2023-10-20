/*
 * @Descripttion:
 * @Author: yoy
 * @Date: 2023-10-13 11:14:29
 */
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { loggerMiddleware } from './middleware/LoggerMiddleware';
import { TestModule } from './test/test.module';
// import config from 'config/db';
@Module({
  imports: [
    ListModule,
    TestModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '13189392292',
      database: 'test',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(loggerMiddleware)
      .forRoutes({ path: 'list', method: RequestMethod.GET });
  }
}
