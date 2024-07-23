import { Controller, Get, Param, Render, NotFoundException } from '@nestjs/common';
import { LocalService } from './local.service';

@Controller('local')
export class LocalController {
  constructor(private readonly localService: LocalService) {}

  @Get(':movieId')
  @Render('local')
  async getLocalPage(@Param('movieId') movieId: string) {
    const local = await this.localService.findOneByMovieId(movieId);
    if (!local) {
      throw new NotFoundException(`Local data for movie with id ${movieId} not found`);
    }
    return { local };
  }
}
