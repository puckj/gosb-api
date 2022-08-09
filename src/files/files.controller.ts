import { Controller,Post,Request,UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiConsumes,ApiTags, ApiSecurity } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { saveFileToStorage } from './helpers/files-storage';

@ApiTags('files')
@ApiSecurity('access-key')
@Controller('files')
export class FilesController {
    constructor(private readonly filesService:FilesService){}

    @Post('uploadFile')
    @UseInterceptors(FileInterceptor('file',saveFileToStorage))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
      schema: {
        type: 'object',
        properties: {
          file: { // 👈 this property
            type: 'string',
            format: 'binary',
          },
        },
      },
    })
    uploadFile(
      @UploadedFile() file: Express.Multer.File,
      @Request() req
    ) {
    //   console.log(req,' req');
      console.log(file,' file test');
    }
}
