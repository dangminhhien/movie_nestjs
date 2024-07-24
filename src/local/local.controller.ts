import { Controller, Get, Param, Render, NotFoundException } from '@nestjs/common';
import { LocalService } from './local.service';

@Controller('local')
export class LocalController {
  constructor(private readonly localService: LocalService) {}

  @Get()
  @Render('local')
  async showLocalForm(){
    const local = await this.localService.findAll();
    return {local};
  }
}