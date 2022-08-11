import { Controller,Post,Request,UploadedFile } from '@nestjs/common';
import { ApiTags, ApiSecurity } from '@nestjs/swagger';
import { FilesService } from './files.service';
import { saveImageToStorage } from './helpers/files-storage';
import { ApiFile } from './helpers/api-file.decorator';
import { ParseFile } from './helpers/parse-file.pipe';

@ApiTags('files')
@ApiSecurity('access-key')
@Controller('files')
export class FilesController {
    constructor(private readonly filesService:FilesService){}
    
    @Post('uploadImage')
    @ApiFile('image_file',saveImageToStorage)
    uploadImage(
      @UploadedFile(ParseFile) file: Express.Multer.File,
    //   @UploadedFile() file: Express.Multer.File,
      @Request() req
    ) {
    //   console.log(req,' req');
      console.log(file,' file test');
    }
}
