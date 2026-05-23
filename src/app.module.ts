import { Module } from '@nestjs/common';
import { HealthCheckController } from './HealthCheck.controller';
import { HealthCheckService } from './health-check.service';
import { SlugsController } from './slugs/slugs.controller';
import { SlugsService } from './slugs/slugs.service';

@Module({
  imports: [],
  controllers: [HealthCheckController, SlugsController],
  providers: [HealthCheckService, SlugsService],
})
export class AppModule {}
