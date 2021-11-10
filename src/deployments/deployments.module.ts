import { Module } from "@nestjs/common";
import { DeploymentCommandHandlers } from "./commands";
import { DeploymentEvents } from "./events";
import { DeploymentsController } from "./deployments.controller";
import { CqrsModule } from "@nestjs/cqrs";
import { MongooseModule, SchemaFactory } from "@nestjs/mongoose";
// ! this must be BEFORE the DeploymentRepo, DeploymentSchema, DeploymentSchemaFactory imports !
import { DeploymentFactory } from "./commands/models";
import { DeploymentDtoRepo, DeploymentRepo, DeploymentSchema, DeploymentSchemaFactory } from "./db";
import { DeploymentQueryHandlers } from "./queries";

@Module({
   imports: [
      CqrsModule,
      MongooseModule.forFeature([
         {
            name: DeploymentSchema.name,
            schema: SchemaFactory.createForClass(DeploymentSchema)
         }
      ])
   ],
   controllers: [DeploymentsController],
   providers: [
      DeploymentRepo,
      DeploymentDtoRepo,
      DeploymentSchemaFactory,
      DeploymentFactory,
      ...DeploymentEvents,
      ...DeploymentCommandHandlers,
      ...DeploymentQueryHandlers
   ]
})
export class DeploymentsModule {}
