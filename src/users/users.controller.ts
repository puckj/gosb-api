import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { MemberLoginDto, MemberLoginByEmailDto, MemberLogoutDto, CreateCustomerDto } from './dto/users.dto';

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
    return this.usersService.memberLogout(memberLogoutDto)
  }

  @Post('/createCustomer')
  createCustomer(@Body() createCustomerDto:CreateCustomerDto){
    return this.usersService.createCustomer(createCustomerDto)
  }
}
