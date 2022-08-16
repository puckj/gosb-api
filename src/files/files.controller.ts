import { Controller, Body, Post, UploadedFile } from '@nestjs/common';
import { ApiTags, ApiSecurity } from '@nestjs/swagger';
import { FilesService } from './files.service';
import { saveImageToStorage } from './helpers/files-storage';
import { ApiFile } from './helpers/api-file.decorator';
import { ParseFile } from './helpers/parse-file.pipe';
import { DownloadImageDto } from './dto/files.dto';

@ApiTags('files')
@ApiSecurity('access-key')
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('uploadImage')
  @ApiFile('image_file', saveImageToStorage)
  uploadImage(@UploadedFile(ParseFile) file: Express.Multer.File) {
    return this.filesService.uploadImage(file);
  }

  @Post('downloadImage')
  downloadImage(@Body() downloadImageDto: DownloadImageDto) {
    return this.filesService.downloadImage(downloadImageDto);
  }
}
