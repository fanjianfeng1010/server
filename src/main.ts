import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  // 跨域设置
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'OPTIONS', 'DELETE'],
    allowedHeaders: [
      'Content-Type,Content-Length,Authorization, Accept,X-Requested-With',
    ],
    credentials: true,
    maxAge: 1728000,
  });
  await app.listen(8080);
}
bootstrap();
