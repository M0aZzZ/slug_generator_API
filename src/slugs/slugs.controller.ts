import { Controller, Get } from '@nestjs/common';
import { SlugsService } from './slugs.service';

@Controller('slug')
export class SlugsController {
  constructor(private readonly SlugsService: SlugsService) {}

  @Get()
  generateTestSlug() {
    return this.SlugsService.generateSlug('Hello World');
  }
}
