import { DateTime } from "luxon";
import { ObjectId } from "mongoose";
import { AppType } from "src/common/models";
import { ReleaseManager, ReleaseStatus } from "../../models";

export class ReleaseDto {
   constructor(
      public readonly _id: ObjectId,
      public readonly app: AppType,
      public readonly version: string,
      public readonly releaseManager: ReleaseManager,
      public readonly releaseDate: DateTime,
      public readonly status: ReleaseStatus
   ) {}
}
