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
  await app.listen(port, () => {
    console.log(`Server listening on port : ${port}`);
  });
}
bootstrap();
