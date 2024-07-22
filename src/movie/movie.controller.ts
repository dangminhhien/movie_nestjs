// import { Controller, Get, Param, NotFoundException, Render } from '@nestjs/common';
// import { MovieService } from './movie.service';
// import { MovieDocument } from './movie.schema';

// @Controller('movie')
// export class MovieController {
//   constructor(private readonly movieService: MovieService) {}

//   @Get(':id')
//   @Render('movie')
//   async getMovieDetail(@Param('id') id: string): Promise<MovieDocument> {
//     try {
//       return await this.movieService.findOneById(id);
//     } catch (error) {
//       return await this.movieService.findOneById(id);
//     }
//   }
// }


// movie.controller.ts
import { Controller, Get, Param, Render, NotFoundException } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Get(':id')
    @Render('movie')
    async getMovieDetail(@Param('id') id: string) {
        try {
            const movie = await this.movieService.findOneById(id);
            return { movie };
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
}

