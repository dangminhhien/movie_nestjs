export class MovieDto {
  readonly name: string;
  readonly content: string;
  readonly image: string;
  readonly trailer: string;

  constructor(movie: any) {
    this.name = movie.name;
    this.content = movie.category;
    this.image = movie.image;
    this.trailer = movie.trailer;
  }
}
