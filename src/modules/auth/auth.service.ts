import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserSchema } from '../../schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {LoginDto} from "../../common/requests/login.dto";

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }

    async generateToken(user: any) {
        return this.jwtService.sign({ username: user.username, userId: user._id });
    }

    async login(loginDto: LoginDto) {
        const payload = { username: loginDto.username, password: loginDto.password };
        return {
          access_token: this.jwtService.sign(payload),
        };
    }
}
