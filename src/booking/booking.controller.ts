import { Controller, Get, Render, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('booking')
export class BookingController {

    @Get()
    @Render('client')
    showBookingForm() {
        // Dữ liệu mẫu cho phim và ghế ngồi
        const movie = {
            title: 'Avengers: Endgame',
            genre: 'Action, Adventure, Drama',
            duration: 181,
            date: '2024-07-15',
            times: ['10:00', '13:00', '16:00', '19:00', '22:00']
        };
        const seats = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3'];

        return { movie, seats };
    }

    @Post()
    async handleBooking(@Body() bookingData: any, @Res() res: Response) {
        try {
            // Xử lý logic đặt vé ở đây
            // Ví dụ: Lưu dữ liệu vào MongoDB

            // Sau khi xử lý thành công
            return res.status(HttpStatus.CREATED).json({ message: 'Đặt vé thành công!' });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
        }
    }
}
