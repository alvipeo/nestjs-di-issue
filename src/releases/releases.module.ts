import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { MongooseModule, SchemaFactory } from "@nestjs/mongoose";
import { ReleaseCommandHandlers } from "./commands";
import { ReleaseFactory } from "./commands/models";
import { ReleaseDtoRepo, ReleaseRepo, ReleaseSchema, ReleaseSchemaFactory } from "./db";
import { ReleaseEvents } from "./events";
import { ReleaseQueryHandlers } from "./queries";
import { ReleasesController } from "./releases.controller";

@Module({
   imports: [
      CqrsModule,
      MongooseModule.forFeature([
         {
            name: ReleaseSchema.name,
            schema: SchemaFactory.createForClass(ReleaseSchema)
         }
      ])
   ],
   controllers: [ReleasesController],
   providers: [ReleaseRepo, ReleaseDtoRepo, ReleaseSchemaFactory, ReleaseFactory, ...ReleaseCommandHandlers, ...ReleaseEvents, ...ReleaseQueryHandlers]
})
export class ReleasesModule {}
