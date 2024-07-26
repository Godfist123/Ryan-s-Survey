import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './transform/transform.interceptor';
import { HttpExceptionFilter } from './http-exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // This sets the global prefix for all routes in the application.

  app.useGlobalInterceptors(new TransformInterceptor()); // This sets the global interceptor for all routes in the application.

  app.useGlobalFilters(new HttpExceptionFilter()); // This sets the global filter for all routes in the application.
  await app.listen(3005);
}
bootstrap();
