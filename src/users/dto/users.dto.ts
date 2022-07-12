import { IsNotEmpty, IsString,IsOptional } from 'class-validator';

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
    encrypted_password:string;

    @IsString()
    @IsOptional()
    p_fcm_regist_token: string | null;
}
