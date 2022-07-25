import { Injectable } from '@nestjs/common';
import returnMessage from 'src/functions/returnMessage';
import { DataSource } from 'typeorm';
import { CreateCustomerDto, MemberLoginByEmailDto, MemberLoginDto, MemberLogoutDto } from './dto/users.dto';

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
    .then((result: any) => returnMessage.success(result))
    .catch((error: any) => returnMessage.errorFromDatabase(error));
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
  async memberLogout(memberLogoutDto: MemberLogoutDto) {
    const query = `CALL c_member_logout(
        '${memberLogoutDto.member_ukey}',
        null,
        null
    );`;
    return this.dataSource
      .query(query)
      .then((result: any) => returnMessage.success(result))
      .catch((error: any) => returnMessage.errorFromDatabase(error));
  }
  async createCustomer(createCustomerDto: CreateCustomerDto) {
    console.log(createCustomerDto);
    
    // const query = `CALL c_create_customer(
    //     null,
    //     null
    // );`;
    // return this.dataSource
    //   .query(query)
    //   .then((result: any) => returnMessage.success(result))
    //   .catch((error: any) => returnMessage.errorFromDatabase(error));
  }
}
