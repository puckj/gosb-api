import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEmail,
  IsDateString,
  NotEquals,
  IsNumber
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
  @NotEquals(undefined)
  birthday: string | null;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNullable()
  @NotEquals(undefined)
  citizen_id: string | null

  @IsNumber()
  @IsNullable()
  @NotEquals(undefined)
  gender_id: number | null

  @IsString()
  @IsNullable()
  @NotEquals(undefined)
  line_id: string | null

  @IsString()
  @IsNullable()
  @NotEquals(undefined)
  th_name: string | null

  @IsString()
  @IsNullable()
  @NotEquals(undefined)
  th_first_name: string | null

  @IsString()
  @IsNullable()
  @NotEquals(undefined)
  th_mid_name: string | null

  @IsString()
  @IsNullable()
  @NotEquals(undefined)
  th_last_name: string | null

  @IsString()
  @IsNullable()
  @NotEquals(undefined)
  en_name: string | null

  @IsString()
  @IsNullable()
  @NotEquals(undefined)
  en_first_name: string | null

  @IsString()
  @IsNullable()
  @NotEquals(undefined)
  en_mid_name: string | null

  @IsString()
  @IsNullable()
  @NotEquals(undefined)
  en_last_name: string | null

  @IsString()
  @IsNotEmpty()
  p_phone_number: string
}
