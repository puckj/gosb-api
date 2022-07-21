import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP', { timestamp: true });
  use(request: Request, response: Response, next: NextFunction) {
    const { ip, method, originalUrl } = request;
    const userAgent = request.get('user-agent') || '';
    response.on('finish', () => {
      // const contentLength = response.get('content-length');
      const { statusCode } = response;
      const logMessage = `${method}:${statusCode} ${originalUrl} - ${userAgent} ${ip}`;
      if (statusCode === 400 || statusCode === 404 || statusCode === 500) {
        this.logger.error(logMessage);
        // console.error(logMessage);
      } else {
        this.logger.log(logMessage);
        // console.log(logMessage);
      }
    });
    next();
  }
}
