import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsDateString,
  NotEquals,
  IsNumber,
} from 'class-validator';
import { IsNullable } from '../../functions/CustomDecorator';
import {ApiProperty} from '@nestjs/swagger';

export class MemberLoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  p_username: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  //   @ApiHideProperty()
  encrypted_password: string;
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  p_fcm_regist_token: string | null;
}

export class MemberLoginByEmailDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  //   @ApiHideProperty()
  encrypted_password: string;
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  p_fcm_regist_token: string | null;
}

export class MemberLogoutDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  member_ukey: string;
}

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  usernames: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  encrypted_password: string;
  @IsDateString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  birthday: string | null;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  citizen_id: string | null;
  @IsNumber()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  gender_id: number | null;
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  line_id: string | null;
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  th_name: string | null;
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  th_first_name: string | null;
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  th_mid_name: string | null;
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  th_last_name: string | null;
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  en_name: string | null;
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  en_first_name: string | null;
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  en_mid_name: string | null;
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  en_last_name: string | null;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  p_phone_number: string;
}

export class GetMemberProfileDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  member_ukey: string;
}