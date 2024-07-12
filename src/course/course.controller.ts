import { Controller, Get, Param, Render } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('couese')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    
}
