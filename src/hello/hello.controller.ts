import { Get, Controller, Render } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  @Render('hello')
  root() {
    return { message: 'Hello world!' };
  }
}