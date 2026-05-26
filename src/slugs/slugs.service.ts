import { Injectable, NotFoundException } from '@nestjs/common';
import { slugify } from '@m0az/sluggenerator';
import { slug } from './slug.model';

@Injectable()
export class SlugsService {
  private slugs: slug[] = [];

  ensureSlugExists(id: number) {
    const slug = this.slugs.find((slug) => slug.id === id);
    if (!slug) {
      throw new NotFoundException('Slug not found');
    }
    return slug;
  }
  createSlug(originalString: string): slug {
    const newSlug: slug = {
      id: this.slugs.length + 1,
      originalString,
      slug: slugify(originalString),
    };
    this.slugs.push(newSlug);
    return newSlug;
  }
  getSlugs(): slug[] {
    return this.slugs;
  }
  getSlugById(id: number): slug {
    const slug = this.ensureSlugExists(id);
    return slug;
  }
  deleteSlug(id: number): void {
    const slug = this.ensureSlugExists(id);
    this.slugs = this.slugs.filter((slugs) => slugs.id !== slug.id);
  }
}
