import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Crud API')
    .setDescription('Learn Node and NestJS while doing')
    .setVersion('1.0')
    // .addTag('crud')
    .build()
  
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
