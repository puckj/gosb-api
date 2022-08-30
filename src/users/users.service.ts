import { Injectable } from '@nestjs/common';
import ReturnMessage from '../functions/ReturnMessage';
import { DataSource } from 'typeorm';
import {
  CreateCustomerDto,
  GetMemberProfileDto,
  MemberLoginByEmailDto,
  MemberLoginDto,
  MemberLogoutDto,
} from './dto/users.dto';
import UpdateMemberProfileDto from './dto/update-member-profile.dto';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly authService: AuthService,
  ) {}

  async memberLogin(memberLoginDto: MemberLoginDto) {
    const query = `CALL c_member_login(
        '${memberLoginDto.p_username}',
        '${memberLoginDto.encrypted_password}',
        NULLIF('${memberLoginDto.p_fcm_regist_token}','null'),
        null,
        null
    );`;
    // console.log(query,'tesstt');
    return this.dataSource
      .query(query)
      .then((result: any) => ReturnMessage.success(result))
      .catch((error: any) => ReturnMessage.errorFromDatabase(error));
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
      .then((result: any) => ReturnMessage.success(result))
      .catch((error: any) => ReturnMessage.errorFromDatabase(error));
  }

  async memberLogout(memberLogoutDto: MemberLogoutDto) {
    const query = `CALL c_member_logout(
        '${memberLogoutDto.member_ukey}',
        null,
        null
    );`;
    return this.dataSource
      .query(query)
      .then((result: any) => ReturnMessage.success(result))
      .catch((error: any) => ReturnMessage.errorFromDatabase(error));
  }

  async createCustomer(createCustomerDto: CreateCustomerDto) {
    console.log(createCustomerDto, ' TESSSSST');
    const query = `CALL c_create_customer(
         NULLIF('${createCustomerDto.usernames}','null'),
         NULLIF('${createCustomerDto.encrypted_password}','null'),
         NULLIF('${createCustomerDto.birthday}','null')::DATE,
         NULLIF('${createCustomerDto.email}','null'),
         NULLIF('${createCustomerDto.citizen_id}','null'),
         NULLIF('${createCustomerDto.gender_id}','null')::INTEGER,
         NULLIF('${createCustomerDto.line_id}','null'),
         NULLIF('${createCustomerDto.th_name}','null'),
         NULLIF('${createCustomerDto.th_first_name}','null'),
         NULLIF('${createCustomerDto.th_mid_name}','null'),
         NULLIF('${createCustomerDto.th_last_name}','null'),
         NULLIF('${createCustomerDto.en_name}','null'),
         NULLIF('${createCustomerDto.en_first_name}','null'),
         NULLIF('${createCustomerDto.en_mid_name}','null'),
         NULLIF('${createCustomerDto.en_last_name}','null'),
         NULLIF('${createCustomerDto.p_phone_number}','null'),
        null,
        null
    );`;
    return this.dataSource
      .query(query)
      .then((result: any) => ReturnMessage.success(result))
      .catch((error: any) => ReturnMessage.errorFromDatabase(error));
  }

  async getMemberProfile(getMemberProfileDto: GetMemberProfileDto) {
    try {
      const memberId = await this.authService.memberAuthen(
        getMemberProfileDto.member_ukey,
      );
      const query = `SELECT * FROM c_get_member_profile('${memberId}');`;
      return this.dataSource
        .query(query)
        .then((result: any) => ReturnMessage.success(result))
        .catch((error: any) => ReturnMessage.errorFromDatabase(error));
      // return ReturnMessage.success(result)
    } catch (error) {
      console.error(error, ' GOT ERROR');
      return ReturnMessage.errorFromDatabase(error);
    }
  }

  async updateMemberProfile(updateMemberProfileDto: UpdateMemberProfileDto) {
    try {
      const memberId = await this.authService.memberAuthen(
        updateMemberProfileDto.member_ukey,
      );
      console.log(updateMemberProfileDto, 'updateMemberProfileDto ####');
      console.log(memberId, 'memberId ####');
      const query = `CALL c_update_member_profile(
       NULLIF('${memberId}','null'),
       NULLIF('${updateMemberProfileDto.p_username}','null'),
       NULLIF('${updateMemberProfileDto.p_birthday}','null'),
       NULLIF('${updateMemberProfileDto.p_email}','null'),
       NULLIF('${updateMemberProfileDto.p_citizen_id}','null'),
       NULLIF('${updateMemberProfileDto.p_line_id}','null'),
       NULLIF('${updateMemberProfileDto.p_gender_id}','null')::INTEGER,
       NULLIF('${JSON.stringify(updateMemberProfileDto.name)}','null')::JSON,
       NULLIF('${JSON.stringify(updateMemberProfileDto.phones)}','null')::JSON,
       NULLIF('${JSON.stringify(
         updateMemberProfileDto.bank_accounts,
       )}','null')::JSON,
       NULLIF('${JSON.stringify(
         updateMemberProfileDto.addresses,
       )}','null')::JSON,
       NULLIF('${JSON.stringify(updateMemberProfileDto.images)}','null')::JSON,
       NULLIF('${JSON.stringify(
         updateMemberProfileDto.member_role,
       )}','null')::JSON,
       null,
       null
   );`;
      return this.dataSource
        .query(query)
        .then((result: any) => ReturnMessage.success(result))
        .catch((error: any) => ReturnMessage.errorFromDatabase(error));
      // return ReturnMessage.success(result)
    } catch (error) {
      console.error(error, ' GOT ERROR');
      return ReturnMessage.errorFromDatabase(error);
    }
  }
}
