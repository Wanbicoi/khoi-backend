import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { PrismaExceptionFilter } from './filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });

  // GlobalPipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => new BadRequestException(errors),
    }),
  );

  app.useGlobalFilters(new PrismaExceptionFilter());

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Yến sào nhà vui')
    .addBearerAuth(undefined, 'defaultBearerAuth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, {
    swaggerOptions: {
      authAction: {
        defaultBearerAuth: {
          name: 'defaultBearerAuth',
          schema: {
            description: 'Default',
            type: 'http',
            in: 'header',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
          value:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtaW5pQXBwSWQiOiIzODkxNTA0NjcxOTYxNDc4NDYzIiwidGVuYW50SWQiOiJUcmF2byIsIm5hbWUiOiJN4bqtcCIsInBob25lIjoiMDk4MTgyMjI0Iiwic3ViIjoxLCJyb2xlIjoicm9vdCIsImlhdCI6MTY5NjkyNzM1M30.oWcStc3zVAmcGsqWLDa4kKQS77ROc5q-qezQTN166WY',
        },
      },
    },
  });

  await app.listen(3000);
}
bootstrap();
