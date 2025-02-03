import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'thiopkmlouthbvnhjduertycxawssftrg',  // Thay bằng secret key của bạn
      signOptions: { expiresIn: '1h' },  // Token hết hạn sau 1 giờ
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
