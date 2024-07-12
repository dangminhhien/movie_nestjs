import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie, MovieDocument } from './movie.schema';

@Injectable()
export class MovieService {
  constructor(@InjectModel(Movie.name) private readonly movieModel: Model<MovieDocument>) {}

  async findOneById(id: string): Promise<MovieDocument> {
    const movie = await this.movieModel.findById(id).exec();
    // if (!movie) {
    //   throw new NotFoundException('Movie not found');
    // }
    return movie;
  }
}
