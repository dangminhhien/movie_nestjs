import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HelloController } from './hello/hello.controller';
import { BookingController } from './booking/booking.controller';
import { MovieModule } from './movie/movie.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/movie'),
    AuthModule,
    MovieModule,
    
  ],
  controllers: [AppController, HelloController, BookingController],
  providers: [AppService],
})
export class AppModule {}
