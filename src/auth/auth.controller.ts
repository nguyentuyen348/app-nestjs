import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        @InjectModel(User.name) private userModel: Model<User>,
    ) {}

    @Post('register')
    async register(@Body() body) {
        const hashedPassword = await this.authService.hashPassword(body.password);
        const newUser = new this.userModel({ username: body.username, password: hashedPassword });
        await newUser.save();
        return { message: 'User registered!' };
    }
}

