import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

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
}
