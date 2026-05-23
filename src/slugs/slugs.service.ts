import { Injectable } from '@nestjs/common';
import { slugify } from '@m0az/sluggenerator';
import { slug } from './slug.model';

@Injectable()
export class SlugsService {
  generateSlug(originalString: string): slug {
    return {
      id: 0,
      originalString,
      slug: slugify(originalString),
    };
  }
}
