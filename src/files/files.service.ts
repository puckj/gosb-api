import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import ReturnMessage from '../functions/ReturnMessage';
import { DownloadImageDto } from './dto/files.dto';

@Injectable()
export class FilesService {
  uploadImage(file: Express.Multer.File) {
    try {
      // console.log(file,'uploadImage (service)');
      const result = [
        {
          image_path: file.path,
        },
      ];
      return ReturnMessage.success(result);
    } catch (error) {
      return ReturnMessage.errorFromDatabase(error);
    }
  }

  downloadImage(downloadImageDto: DownloadImageDto) {
    try {
      const downloadImageBuffer = readFileSync(
        join(process.cwd(), downloadImageDto.img_path),
        { encoding: 'base64' },
      );
      return ReturnMessage.success([downloadImageBuffer]);
    } catch (error) {
      return ReturnMessage.errorFromDatabase(error);
    }
  }
}
