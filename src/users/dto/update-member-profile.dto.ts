import {
    IsNotEmpty,
    IsString,
    IsEmail,
    IsDateString,
    NotEquals,
    IsNumber,
    IsArray,
    ArrayMinSize,
    ValidateNested,
    ArrayMaxSize,
    IsNumberString,
    IsIn,
    MaxLength
  } from 'class-validator';
import { IsNullable } from '../../functions/CustomDecorator';
import {ApiProperty} from '@nestjs/swagger';
import { Type } from 'class-transformer';

const nameLanguages:string[] = ['EN','TH']

class UpdateMemberProfileDto_Name {
  @IsNotEmpty()
  @IsIn(nameLanguages)
  @ApiProperty({ enum: nameLanguages})
  language: string;
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  nickname: string|null
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  first_name: string
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  mid_name: string | null
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  last_name: string
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  gender: string|null
}
class UpdateMemberProfileDto_Phones {
    @IsNotEmpty()
    @IsNumberString()
    @ApiProperty()
    @MaxLength(10)
    local_number: string
    @NotEquals(undefined)
    @IsNullable()
    @IsNumberString()
    @ApiProperty({ nullable: true })
    global_number: string
}
class UpdateMemberProfileDto_BankAccounts {}// *เพิ่มส่วน class-validator ข้อมูลใน array ภายหลัง
class UpdateMemberProfileDto_Addresses{
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    address_id: string
}
class UpdateMemberProfileDto_Images{
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    image_id : string
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    path: string
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name: string
    @IsNotEmpty()
    @IsDateString()
    @ApiProperty({type: Date})
    time: Date
}

class UpdateMemberProfileDto_MemberRole {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    role_id: number
    @IsString()
    @NotEquals(undefined)
    @IsNullable()
    @ApiProperty()
    default_image_id:string|null
    @IsString()
    @NotEquals(undefined)
    @IsNullable()
    @ApiProperty()
    default_phone_number: string|null
    @IsString()
    @NotEquals(undefined)
    @IsNullable()
    @ApiProperty()
    default_address_id: string|null
    @IsString()
    @NotEquals(undefined)
    @IsNullable()
    @ApiProperty()
    default_bank_account_id: string| null
}

export default class UpdateMemberProfileDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  member_ukey: string
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  p_username: string;
  @IsDateString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({type: Date, nullable: true })
  p_birthday: Date | null;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  p_email: string;
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  p_citizen_id: string | null;
  @IsString()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  p_line_id: string | null;
  @IsNumber()
  @NotEquals(undefined)
  @IsNullable()
  @ApiProperty({ nullable: true })
  p_gender_id: number | null;
  @NotEquals(undefined)
  @IsNullable()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(2)
  @ValidateNested({ each: true })
  @ApiProperty({type:[UpdateMemberProfileDto_Name], nullable: true,})
  @Type(() => UpdateMemberProfileDto_Name)
  name: UpdateMemberProfileDto_Name[];
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(1)
  @ValidateNested({ each: true })
  @ApiProperty({type: [UpdateMemberProfileDto_Phones]})
  @Type(() => UpdateMemberProfileDto_Phones)
  phones: UpdateMemberProfileDto_Phones[]
  @NotEquals(undefined)
  @IsNullable()
  @IsArray()
  @ValidateNested({ each: true })
  @ApiProperty({type: [UpdateMemberProfileDto_BankAccounts], nullable: true,})
  @Type(() => UpdateMemberProfileDto_BankAccounts)
  bank_accounts: UpdateMemberProfileDto_BankAccounts[]// *เพิ่มส่วน class-validator ข้อมูลใน array ภายหลัง
  @NotEquals(undefined)
  @IsNullable()
  @IsArray()
  @ValidateNested({ each: true })
  @ApiProperty({type: [UpdateMemberProfileDto_Addresses], nullable: true,})
  @Type(() => UpdateMemberProfileDto_Addresses)
  addresses: UpdateMemberProfileDto_Addresses[]// *เพิ่มส่วน class-validator ข้อมูลใน array ภายหลัง
  @NotEquals(undefined)
  @IsNullable()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(1)
  @ValidateNested({ each: true })
  @ApiProperty({type: [UpdateMemberProfileDto_Images], nullable: true,})
  @Type(() => UpdateMemberProfileDto_Images)
  images : UpdateMemberProfileDto_Images[]
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @ApiProperty({type: [UpdateMemberProfileDto_MemberRole]})
  @Type(() => UpdateMemberProfileDto_MemberRole)
  member_role:UpdateMemberProfileDto_MemberRole
} 
