import { IsNotEmpty, IsString } from 'class-validator';

export class MemberLoginDto {
  @IsString()
  @IsNotEmpty()
  p_username: string;

  @IsString()
  @IsNotEmpty()
  encrypted_password: string;

  @IsString()
  p_fcm_regist_token: string | null;
}
