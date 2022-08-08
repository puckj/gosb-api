import {
  BadRequestException,
  Logger,
  ValidationPipe,
  ValidationError,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';
import 'winston-daily-rotate-file';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Main', { timestamp: true });
  const port = process.env.LISTEN_PORT;
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('Nest', {
              prettyPrint: false,
            }),
          ),
        }),
        new winston.transports.DailyRotateFile({
          filename: `./${process.env.LOGGER_COMBINED_DIRECTORY}/%DATE%.log`,
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: process.env.LOGGER_COMBINED_MAX_SIZE,
          maxFiles: process.env.LOGGER_COMBINED_MAX_FILES,
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          ),
        }),
        new winston.transports.DailyRotateFile({
          filename: `./${process.env.LOGGER_ERROR_DIRECTORY}/%DATE%.log`,
          level: 'error',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: process.env.LOGGER_ERROR_MAX_SIZE,
          maxFiles: process.env.LOGGER_ERROR_MAX_FILES,
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          ),
        }),
        // other transports...
      ],
    }),
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        console.error(validationErrors);
        logger.error(validationErrors);
        // console.error(validationErrors);
        return new BadRequestException(validationErrors);
      },
    }),
  );

  const config = new DocumentBuilder()
  .setTitle('gosb-api')
  .setDescription('gosb-api document')
  .setVersion('1.0')
//   .addTag('gosb')
  .addApiKey({
    type: 'apiKey', // this should be apiKey
    name: 'apiKey', // this is the name of the key you expect in header
    in: 'header',
   }, 'access-key' // this is the name to show and used in swagger
  ) 
  .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/doc', app, document);

  await app.listen(port, () => {
    console.log(`Server listening on port : ${port}`);
  });
}
bootstrap();
