import { Controller, Post, Get, Request, UseGuards, Body, Res, Render, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('signup')
  @Render('signup')
  showSignupForm() {
    return {};
  }

  @Get('signin')
  @Render('signin')
  showSigninForm() {
    return {};
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(@Request() req, @Res() res: Response) {
    const token = await this.authService.login(req.user);
    res.cookie('jwt', token.access_token, { httpOnly: true });
    res.redirect('/booking');
  }

  @Post('signup')
  async signup(@Body() createUserDto: any, @Res() res: Response) {
    try {
      const user = await this.authService.signup(createUserDto);
      return res.status(HttpStatus.CREATED).json(user);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }
}
