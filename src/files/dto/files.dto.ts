import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DownloadImageDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  img_path: string;
}

export class RemoveImageDto{
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  member_ukey:string
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  img_path:string
}
