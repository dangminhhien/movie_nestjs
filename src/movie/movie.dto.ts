// movie.dto.ts

export class MovieDto {
  readonly name: string;
  readonly category: string;
  readonly image: string;
  readonly slug: string;

  constructor(movie: any) {
    this.name = movie.name;
    this.category = movie.category;
    this.image = movie.image;
    this.slug = movie.slug;
  }
}
