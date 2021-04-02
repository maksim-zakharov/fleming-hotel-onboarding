import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UploadedFile,

} from '@nestjs/common';
import { AppService } from './app.service';
import { RegisterHotelDto } from './dto/register-hotel.dto';
import { validate } from 'class-validator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  helloWorld() {
    return 'Hello World';
  }

  @Post('/register')
  // @UseInterceptors(FileInterceptor('crFiles'))
  async register(@UploadedFile() crFiles, @Body() dto: RegisterHotelDto) {
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new HttpException(errors[0].toString(), HttpStatus.OK);
    }
    return this.appService.registerHotel(dto);
  }
}
