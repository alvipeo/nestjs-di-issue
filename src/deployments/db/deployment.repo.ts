import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseEntityRepository } from "src/common/persistence";
import { Deployment } from "../commands/models";
import { DeploymentSchema } from "./deployment.schema";
import { DeploymentSchemaFactory } from "./deployment-schema.factory";

/**
 * Repo used by Commands
 *
 * @export
 * @class DeploymentRepo
 * @extends {BaseEntityRepository<DeploymentSchema, Deployment>}
 */
@Injectable()
export class DeploymentRepo extends BaseEntityRepository<DeploymentSchema, Deployment> {
   constructor(@InjectModel(DeploymentSchema.name) deplModel: Model<DeploymentSchema>, deplFactory: DeploymentSchemaFactory) {
      super(deplModel, deplFactory);
   }
}
