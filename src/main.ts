import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // Block connection of forbidden stuff
      transform: true, // If there's request, Nest JS does all the work
    })
  )
  await app.listen(3001);
}
bootstrap();
