import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

let server: Handler;

async function bootstrapServerless(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'development') {
    await swaggerSetup(app);
  }

  app.enableCors();
  app.setGlobalPrefix(process.env.BASEPATH);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrapServerless());
  return server(event, context, callback);
};

async function swaggerSetup(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle(process.env.npm_package_name)
    .setDescription(process.env.npm_package_description)
    .setVersion(process.env.npm_package_version)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  const optionsSwagger =
    process.env.NODE_ENV === 'development'
      ? {}
      : {
          swaggerOptions: {
            supportedSubmitMethods: [],
          },
        };
  SwaggerModule.setup(
    `${process.env.BASEPATH}/backoffice/docs`,
    app,
    document,
    optionsSwagger,
  );
}

async function bootstrapLocal() {
  const app = await NestFactory.create(AppModule);

  await swaggerSetup(app);

  app.enableCors();
  app.setGlobalPrefix(process.env.BASEPATH);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(process.env.PORT);
}

if (
  process.env.IS_SERVERLESS_ENV !== 'true' &&
  process.env.IS_OFFLINE !== 'true'
) {
  bootstrapLocal();
}
