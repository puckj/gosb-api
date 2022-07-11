import { Body, Controller, Post } from '@nestjs/common';
import { MemberLoginDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/memberLogin')
  memberLogin(@Body() memberLoginDto: MemberLoginDto) {
    return this.usersService.memberLogin(memberLoginDto);
  }
}
