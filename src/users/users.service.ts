import { Injectable } from '@nestjs/common';
import returnMessage from 'src/functions/returnMessage';
import { DataSource } from 'typeorm';
import { MemberLoginByEmailDto, MemberLoginDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly dataSource: DataSource) {}
  async memberLogin(memberLoginDto: MemberLoginDto) {
    const query = `CALL c_member_login(
        '${memberLoginDto.p_username}',
        '${memberLoginDto.encrypted_password}',
        NULLIF('${memberLoginDto.p_fcm_regist_token}','null'),
        null,
        null
    );`;
    // console.log(query);
    return this.dataSource
      .query(query)
      .then((result: any) => {
        // console.log(result,'RESULT');
        return returnMessage.success(result);
      })
      .catch((error: any) => {
        // console.error(error,'ERROR');
        return returnMessage.errorFromDatabase(error);
      });
  }
  async memberLoginByEmail(memberLoginByEmailDto: MemberLoginByEmailDto) {
    const query = `CALL c_member_login_by_email(
        '${memberLoginByEmailDto.email}',
        '${memberLoginByEmailDto.encrypted_password}',
        NULLIF('${memberLoginByEmailDto.p_fcm_regist_token}','null'),
        null,
        null
    );`;
    return this.dataSource
      .query(query)
      .then((result: any) => returnMessage.success(result))
      .catch((error: any) => returnMessage.errorFromDatabase(error));
  }
}
