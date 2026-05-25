import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { SlugsService } from './slugs.service';
import type { slug } from './slug.model';

@Controller('slug')
export class SlugsController {
  constructor(private readonly SlugsService: SlugsService) {}
  @Post()
  createSlug(@Body() newSlug: slug): string {
    return this.SlugsService.createSlug(newSlug.originalString).slug;
  }
  @Get()
  getSlugs() {
    return this.SlugsService.getSlugs();
  }
  @Get(':id')
  getSlugById(@Param('id') id: string): slug | undefined {
    return this.SlugsService.getSlugById(parseInt(id));
  }
  @Delete(':id')
  deleteSlug(@Param('id') id: string): void {
    this.SlugsService.deleteSlug(parseInt(id));
  }
}
