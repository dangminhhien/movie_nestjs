import { Controller, Get, Render } from '@nestjs/common';
import { CourseService } from '../course/course.service'; // Cập nhật đường dẫn này nếu cần thiết

@Controller('booking')
export class BookingController {
    constructor(private readonly courseService: CourseService) {}

    @Get()
    @Render('client')
    async showBookingForm() {
        const courses = await this.courseService.findAll();
        return { courses };
    }
}