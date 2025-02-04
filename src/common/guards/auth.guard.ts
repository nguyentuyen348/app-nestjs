import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        console.log('Guard: Kiểm tra quyền truy cập...');
        return true;
    }
}