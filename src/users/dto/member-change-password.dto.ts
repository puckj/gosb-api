import {
    IsNotEmpty,
    IsString,
    NotEquals,
  } from 'class-validator';
import { IsNullable } from '../../functions/CustomDecorator';
import { ApiProperty } from '@nestjs/swagger';

export default class MemberChangePasswordDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    member_ukey:string
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    encrypted_old_password:string
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    encrypted_new_password:string
    @IsString()
    @NotEquals(undefined)
    @IsNullable()
    @ApiProperty({ nullable: true })
    p_fcm_regist_token: string | null;
}