import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsDecimal,
  IsEmail,
  IsFQDN,
  IsMobilePhone,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';
import { RegisterMemberDto } from './register-member.dto';
import { RegisterRoomTypesDto } from './register-room-types.dto';

export class RegisterHotelDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  nameArabic: string;
  @IsNotEmpty()
  @IsFQDN()
  website: string;
  @IsNotEmpty()
  governorate: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  @IsNumber()
  rating: number;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  descriptionArabic: string;
  // Legal
  @IsNotEmpty()
  legalName: string;
  @IsNotEmpty()
  crNumber: string;
  @IsNotEmpty()
  crPerson: string;
  @IsNotEmpty()
  crDetails: string;
  @IsNotEmpty()
  signatoryName: string;
  @IsNotEmpty()
  @IsMobilePhone()
  signatoryPhoneNumber: string;
  @IsNotEmpty()
  @IsEmail()
  signatoryEmail: string;
  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  crFiles: File[];
  // Bank
  @IsNotEmpty()
  bankName: string;
  @IsNotEmpty()
  branch: string;
  @IsNotEmpty()
  accountNumber: string;
  // Focal
  @IsNotEmpty()
  focalName: string;
  @IsNotEmpty()
  @IsEmail()
  focalEmail: string;
  @IsNotEmpty()
  @IsMobilePhone()
  focalPhoneNumber: string;
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(5)
  members: RegisterMemberDto[];
  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  roomTypes: RegisterRoomTypesDto[];
}
