import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ReleaseDto } from "../queries/models";
import { ReleaseSchema } from "./release.schema";

/**
 * Repo used by Queries
 *
 * @export
 * @class ReleaseDtoRepository
 */
@Injectable()
export class ReleaseDtoRepo {
   constructor(@InjectModel(ReleaseSchema.name) private readonly relSchemaModel: Model<ReleaseSchema>) {}

   async findAll(): Promise<ReleaseDto[]> {
      return this.relSchemaModel.find({}, {}, { lean: true }).exec();
   }
}
