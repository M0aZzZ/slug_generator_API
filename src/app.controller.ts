import { Controller, Get } from '@nestjs/common';
import { slugify } from '@m0az/sluggenerator';

@Controller('test')
export class TestController {
  @Get()
  testSlug() {
    return slugify('Hello_world!');
  }
}
