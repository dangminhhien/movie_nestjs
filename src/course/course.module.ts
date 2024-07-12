import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseService } from './course.service';
import { Course, CourseSchema } from './course.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }])],
    providers: [CourseService],
    exports: [CourseService],
})
export class CourseModule {}