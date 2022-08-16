import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
import {ApiProperty,} from '@nestjs/swagger';

export class DownloadImageDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    img_path: string;
  }
  