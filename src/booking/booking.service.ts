import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from '../course/course.schema';
import { UserDto } from 'src/movie/movie.dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel('client') private readonly bookingModel: Model<Course>,
  ) {}
}