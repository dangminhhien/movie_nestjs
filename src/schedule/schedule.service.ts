import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Schedule } from './schedule.schema';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel('Schedule') private readonly scheduleModel: Model<Schedule>,
  ) {}

  async findByLocalId(localId: string): Promise<Schedule[]> {
    return this.scheduleModel.find({ localId }).exec();
  }
  async createScheduleForLocal(localId: string): Promise<Schedule> {
    const newSchedule = new this.scheduleModel({ localId, startDate: new Date(), startTime: '00:00' });
    return newSchedule.save();
  }
}