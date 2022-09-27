import { PartialType } from '@nestjs/mapped-types';
import { CreateGeoStatusDto } from './create-geo-status.dto';

export class UpdateGeoStatusDto extends PartialType(CreateGeoStatusDto) {}
