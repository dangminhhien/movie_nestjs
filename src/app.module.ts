import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HelloController } from './hello/hello.controller';
import { BookingController } from './booking/booking.controller';
import { CourseModule } from './course/course.module';
import { MovieModule } from './movie/movie.module';
import { LocalModule } from './local/local.module';
import { ScheduleModule } from './schedule/schedule.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/movie'),
    AuthModule,
    CourseModule,
    MovieModule,
    LocalModule,
    ScheduleModule,

    
  ],
  controllers: [AppController, HelloController, BookingController],
  providers: [AppService],
})
export class AppModule {}