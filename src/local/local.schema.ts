import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LocalDocument = Local & Document;

@Schema({collection: 'local'})
export class Local {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  local: string;

  @Prop({ required: true })
  image: string;

}

export const LocalSchema = SchemaFactory.createForClass(Local);