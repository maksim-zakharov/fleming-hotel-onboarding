import {
  IsDecimal,
  IsNotEmpty, IsNumber,

} from 'class-validator';

export class RegisterRoomTypesDto {
  @IsNotEmpty()
  type: string;
  @IsNotEmpty() @IsNumber()
  beds: number;
  @IsNotEmpty() @IsNumber()
  roomsCount: number;
  @IsDecimal()
  price: number;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  descriptionArabic: string;
}
