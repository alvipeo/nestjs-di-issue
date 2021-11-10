import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseEntityRepository } from "src/common/persistence";
import { Release } from "../commands/models";
import { ReleaseSchemaFactory } from "./release-schema.factory";
import { ReleaseSchema } from "./release.schema";

/**
 * Repo used by Commands
 *
 * @export
 * @class ReleaseRepo
 * @extends {BaseEntityRepository<ReleaseSchema, Release>}
 */
@Injectable()
export class ReleaseRepo extends BaseEntityRepository<ReleaseSchema, Release> {
   constructor(@InjectModel(ReleaseSchema.name) releaseModel: Model<ReleaseSchema>, relSchemaFactory: ReleaseSchemaFactory) {
      super(releaseModel, relSchemaFactory);
   }
}
