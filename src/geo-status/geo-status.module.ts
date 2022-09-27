import { Module } from '@nestjs/common';
import { GeoStatusService } from './geo-status.service';
import { GeoStatusController } from './geo-status.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [GeoStatusController],
  providers: [GeoStatusService],
  imports: [CommonModule],
})
export class GeoStatusModule {}
