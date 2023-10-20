/*
 * @Descripttion:
 * @Author: yoy
 * @Date: 2023-10-13 11:14:29
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createDocument } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  createDocument(app);
  await app.listen(3080);
}
bootstrap();
