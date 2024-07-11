import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { mongo } from 'mongoose';

@Module({
    
    controllers: [BookingController]
})
export class BookingModule {}
