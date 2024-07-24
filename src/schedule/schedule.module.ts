import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { ScheduleSchema } from './schedule.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Schedule', schema: ScheduleSchema }])],
  providers: [ScheduleService],
  controllers: [ScheduleController],
})
export class ScheduleModule {}