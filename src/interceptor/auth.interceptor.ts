import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs';

export class AuthInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler) {
    console.log('this is interceptor..');
    return handler.handle().pipe(
      map((data) => {
        console.log('this is after');
        return data;
      }),
    );
  }
}
