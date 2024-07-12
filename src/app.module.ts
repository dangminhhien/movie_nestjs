import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HelloController } from './hello/hello.controller';
import { BookingController } from './booking/booking.controller';
import { CourseModule } from './course/course.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/movie'),
    AuthModule,
    CourseModule,
    
  ],
  controllers: [AppController, HelloController, BookingController],
  providers: [AppService],
})
export class AppModule {}
