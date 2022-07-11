import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { MemberLoginDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly dataSource: DataSource) {}
  async memberLogin(memberLoginDto: MemberLoginDto) {
    const query = `CALL c_member_login(
        '${memberLoginDto.p_username}',
        '${memberLoginDto.p_username}',
        NULLIF('${memberLoginDto.p_fcm_regist_token}','null'),
        null,
        null
    );`;
    return this.dataSource
      .query(query)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
