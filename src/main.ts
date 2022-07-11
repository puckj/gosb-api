import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.LISTEN_PORT;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  // console.log('tessssst');
  await app.listen(port, () => {
    console.log(`Server listening on port : ${port}`);
  });
}
bootstrap();
