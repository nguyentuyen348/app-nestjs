/* Pipe - Validate dữ liệu đầu vào */
import {BadRequestException, Injectable, PipeTransform} from "@nestjs/common";

@Injectable()
export class ValidationPipe implements PipeTransform {
    transform(value: any) {
        console.log('Pipe: Kiểm tra dữ liệu đầu vào...');
        if (!value.username) {
            throw new BadRequestException('Thiếu username');
        }

        if (!value.password) {
            throw new BadRequestException('Thiếu password');
        }

        return value;
    }
}