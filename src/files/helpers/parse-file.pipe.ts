import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseFile implements PipeTransform {
  transform(
    files: Express.Multer.File,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _metadata: ArgumentMetadata,
  ): Express.Multer.File {
    if (files === undefined || files === null) {
      throw new BadRequestException('File must be a png, jpg/jpeg');
    }
    return files;
  }
}
