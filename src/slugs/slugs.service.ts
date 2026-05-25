import { Injectable } from '@nestjs/common';
import { slugify } from '@m0az/sluggenerator';
import { slug } from './slug.model';

@Injectable()
export class SlugsService {
  private slugs: slug[] = [];

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
  getSlugById(id: number): slug | undefined {
    return this.slugs.find((slugs) => slugs.id === id);
  }
  deleteSlug(id: number): void {
    this.slugs = this.slugs.filter((slugs) => slugs.id !== id);
  }
}
