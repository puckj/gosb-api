import { IsNotEmpty, IsString, IsOptional,IsNumber } from 'class-validator';

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
    usernames: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsOptional()
    birthday: string | null

    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsOptional()
    citizen_id: string | null

    @IsNumber()
    @IsOptional()
    gender_id: number | null

    @IsString()
    @IsOptional()
    line_id: string | null

    @IsString()
    @IsOptional()
    th_name: string | null
    
    @IsString()
    @IsOptional()
    th_first_name: string | null

    @IsString()
    @IsOptional()
    th_mid_name: string | null

    @IsString()
    @IsOptional()
    th_last_name: string | null

    @IsString()
    @IsOptional()
    en_name: string | null

    @IsString()
    @IsOptional()
    en_first_name: string | null

    @IsString()
    @IsOptional()
    en_mid_name: string | null

    @IsString()
    @IsOptional()
    en_last_name: string | null

    @IsString()
    @IsNotEmpty()
    p_phone_number: string
}
  