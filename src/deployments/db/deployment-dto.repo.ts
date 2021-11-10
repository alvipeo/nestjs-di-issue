import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DeploymentSchema } from ".";
import { DeploymentDto } from "../queries/models";

/**
 * Repo used by Queries
 *
 * @export
 * @class DeploymentDtoRepository
 */
@Injectable()
export class DeploymentDtoRepo {
   constructor(@InjectModel(DeploymentSchema.name) private readonly deplSchemaModel: Model<DeploymentSchema>) {}

   async findAll(): Promise<DeploymentDto[]> {
      return this.deplSchemaModel.find({}, {}, { lean: true }).exec();
   }
}
