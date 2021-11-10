import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
   dotenv.config({ debug: true });

   const app = await NestFactory.create(AppModule);

   const options = new DocumentBuilder().setTitle("Nest project").setDescription("Nest project").setVersion("1").build();
   const document = SwaggerModule.createDocument(app, options);

   SwaggerModule.setup("/docs", app, document);

   await app.listen(3000);
}
bootstrap();
