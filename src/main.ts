import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const options = {
    origin: "*",
    methods: "GET",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: false
  };
  app.enableCors( options );
  
  await app.listen(3001);
}
bootstrap();
