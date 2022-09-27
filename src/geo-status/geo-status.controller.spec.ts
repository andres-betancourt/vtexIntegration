import { Test, TestingModule } from '@nestjs/testing';
import { GeoStatusController } from './geo-status.controller';
import { GeoStatusService } from './geo-status.service';

describe('GeoStatusController', () => {
  let controller: GeoStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeoStatusController],
      providers: [GeoStatusService],
    }).compile();

    controller = module.get<GeoStatusController>(GeoStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
