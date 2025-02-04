import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from "@nestjs/common";

/* Exception Filter - Bắt lỗi */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        console.log('Exception Filter: Xử lý lỗi...');
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();

        const exceptionResponse = exception.getResponse();
        let message = 'Có lỗi xảy ra';

        // Kiểm tra nếu response là object và có chứa message chi tiết từ ValidationPipe
        if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
            message = (exceptionResponse as any).message || message;
        } else if (typeof exceptionResponse === 'string') {
            message = exceptionResponse;
        }

        response.status(status).json({
            statusCode: status,
            message: message ?? exception.message,
        });
    }
}