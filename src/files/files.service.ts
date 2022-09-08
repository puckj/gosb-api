import { Injectable } from '@nestjs/common';
import { readFileSync,unlink } from 'fs';
import { join } from 'path';
import ReturnMessage from '../functions/ReturnMessage';
import { DownloadImageDto,RemoveImageDto } from './dto/files.dto';
import {AuthService} from '../auth/auth.service'
import { promisify } from 'util'

const unlinkAsync = promisify(unlink)

@Injectable()
export class FilesService {
    constructor(
        private readonly authService: AuthService,
      ) {}
  async uploadImage(file: Express.Multer.File) {
    try {
      console.log(file,'uploadImage (service)');
      const result = [file];
      return ReturnMessage.success(result);
    } catch (error) {
      return ReturnMessage.errorFromDatabase(error);
    }
  }

  async downloadImage(downloadImageDto: DownloadImageDto) {
    try {
      const downloadImageBuffer = await readFileSync(
        join(process.cwd(), downloadImageDto.img_path),
        { encoding: 'base64' },
      );
      return ReturnMessage.success([downloadImageBuffer]);
    } catch (error) {
      return ReturnMessage.errorFromDatabase(error);
    }
  }

  async removeImage(removeImageDto:RemoveImageDto){
    try {
        await this.authService.memberAuthen(
            removeImageDto.member_ukey,
          );
        // console.log(memberId,' <memberId\n\n\n');
        await unlinkAsync(removeImageDto.img_path)
        const result = [
            {
                results: "OK",
                messages: "remove image successfully"
            },
          ];
        return ReturnMessage.success(result);
        // console.log(removeImageDto,' removeImageDto+++');
        
    } catch (error) {
        return ReturnMessage.errorFromDatabase(error);
    }
  }
}
