import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Local, LocalDocument } from './local.schema';

@Injectable()
export class LocalService {
  constructor(@InjectModel(Local.name) private localModel: Model<LocalDocument>) {}

  async findAll(): Promise<Local[]> {
    return this.localModel.find().exec();
  }
}