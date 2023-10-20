import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const createDocument = (app: any) => {
  const options = new DocumentBuilder()
    .setTitle('标题啦')
    .setDescription('描述啊')
    .setVersion('2.0')
    // .addBasicAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/swagger', app, document);
};
