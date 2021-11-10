import { DateTime } from "luxon";
import { AppType } from "src/common/models";
import { ReleaseManager, ReleaseStatus } from "../models";

export class UpdateReleaseRequest {
   constructor(
      public readonly app: AppType,
      public readonly version: string,
      public readonly releaseManager: ReleaseManager,
      public readonly releaseDate: DateTime,
      public readonly status: ReleaseStatus
   ) {}
}
