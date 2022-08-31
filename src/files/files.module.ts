import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import {AuthModule} from '../auth/auth.module'

@Module({
  providers: [FilesService],
  controllers: [FilesController],
  imports: [AuthModule],
})
export class FilesModule {}
