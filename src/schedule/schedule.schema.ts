import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScheduleDocument = Schedule & Document;

@Schema({collection: 'schedule'})
export class Schedule  {
  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  time: string;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
