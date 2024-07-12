import { Controller, Get, Param, NotFoundException, Render } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDocument } from './movie.schema';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get(':id')
  @Render('movie')
  async getMovieDetail(@Param('id') id: string): Promise<MovieDocument> {
    try {
      return await this.movieService.findOneById(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
