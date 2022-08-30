import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  MemberLoginDto,
  MemberLoginByEmailDto,
  MemberLogoutDto,
  CreateCustomerDto,
  GetMemberProfileDto,
} from './dto/users.dto';
import UpdateMemberProfileDto from './dto/update-member-profile.dto';
import { ApiTags, ApiSecurity,ApiOperation } from '@nestjs/swagger';

@ApiTags('users')
@ApiSecurity('access-key')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/memberLogin')
  memberLogin(@Body() memberLoginDto: MemberLoginDto) {
    return this.usersService.memberLogin(memberLoginDto);
  }

  @Post('/memberLoginByEmail')
  memberLoginByEmail(@Body() memberLoginByEmailDto: MemberLoginByEmailDto) {
    return this.usersService.memberLoginByEmail(memberLoginByEmailDto);
  }

  @Post('/memberLogout')
  memberLogout(@Body() memberLogoutDto: MemberLogoutDto) {
    return this.usersService.memberLogout(memberLogoutDto);
  }

  @Post('/createCustomer')
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.usersService.createCustomer(createCustomerDto);
  }

  @Post('/getMemberProfile')
  getMemberProfile(@Body() getMemberProfileDto: GetMemberProfileDto) {
    return this.usersService.getMemberProfile(getMemberProfileDto);
  }

  @ApiOperation({tags: ['shi']})
  @Post('/updateMemberProfile')
  updateMemberProfile(@Body() updateMemberProfileDto:UpdateMemberProfileDto){
    return this.usersService.updateMemberProfile(updateMemberProfileDto)
  }
}
