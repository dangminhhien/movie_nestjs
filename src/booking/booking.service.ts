import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from '../course/course.schema';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel('client') private readonly bookingModel: Model<Course>,
  ) {}

  async findAll(): Promise<Course[]> {
    return this.bookingModel.find().exec();
  }

  // Other methods like create, findById, etc.
}