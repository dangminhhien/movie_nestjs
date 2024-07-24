import { Controller, Get, Query, Render } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  @Render('schedule')
  async getSchedule(@Query('localId') localId: string) {
    const scheduleDetails = await this.scheduleService.findByLocalId(localId);
    return { schedule: scheduleDetails };
  }
}