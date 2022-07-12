import { Body, Controller, Post } from '@nestjs/common';
import { MemberLoginDto } from './dto/users.dto';
import { UsersService } from './users.service';
import {MemberLoginByEmailDto} from './dto/users.dto'

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
}
