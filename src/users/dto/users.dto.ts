import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEmail,
  IsDateString
} from 'class-validator';
import {IsNullable} from '../../functions/CustomDecorator'

export class MemberLoginDto {
  @IsString()
  @IsNotEmpty()
  p_username: string;

  @IsString()
  @IsNotEmpty()
  encrypted_password: string;

  @IsString()
  @IsOptional()
  p_fcm_regist_token: string | null;
}

export class MemberLoginByEmailDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  encrypted_password: string;

  @IsString()
  @IsOptional()
  p_fcm_regist_token: string | null;
}

export class MemberLogoutDto {
  @IsString()
  @IsNotEmpty()
  member_ukey: string;
}

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  usernames: string;

  @IsString()
  @IsNotEmpty()
  encrypted_password: string;


  @IsDateString()
  @IsNullable()
  birthday: string | null;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

//   @IsString()
//   citizen_id: string | null

  // @IsNumber()
  // @ValidateIf((object: any, value: any) => value !== null)
  // gender_id: number | null

  // @IsString()
  // line_id: string | null

  // @IsString()
  // th_name: string | null

  // @IsString()
  // th_first_name: string | null

  // @IsString()
  // th_mid_name: string | null

  // @IsString()
  // th_last_name: string | null

  // @IsString()
  // en_name: string | null

  // @IsString()
  // en_first_name: string | null

  // @IsString()
  // en_mid_name: string | null

  // @IsString()
  // en_last_name: string | null

  // @IsString()
  // @IsNotEmpty()
  // p_phone_number: string
}
