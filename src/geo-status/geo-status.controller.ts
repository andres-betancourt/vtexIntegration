import {
  Controller,
  Get,
  Headers,
  Post,
  HttpCode,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { PriceInterface } from 'src/common/interfaces/CreatePrice';
// import { pokeApiFetchAdapter } from 'src/common/adapters/axios.adapter';
import { GeoStatusService } from './geo-status.service';

@Controller('geo-status')
export class GeoStatusController {
  constructor(private readonly geoStatusService: GeoStatusService) {}
  @Get()
  findAll(@Headers() headers: any) {
    return this.geoStatusService.findAll(headers);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  create(@Headers() headers: any, @Body() createRateDto: PriceInterface) {
    return this.geoStatusService.create(createRateDto, headers);
  }
}
