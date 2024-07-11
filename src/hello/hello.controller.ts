// import { Controller, Get } from '@nestjs/common';

// @Controller('hello')
// export class HelloController {
//   @Get()
//   getHello(): string {
//     return 'Hello World123';
//   }
// }

import { Get, Controller, Render } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  @Render('hello')
  root() {
    return { message: 'Hello world!' };
  }
}