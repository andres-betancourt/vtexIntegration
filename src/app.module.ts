import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { GeoStatusModule } from './geo-status/geo-status.module';

@Module({
  imports: [GeoStatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
