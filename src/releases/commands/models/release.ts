import { AggregateRoot } from "@nestjs/cqrs";
import { DateTime } from "luxon";
import { AppType } from "src/common/models";
import { ReleaseManager } from "../../models/release-manager";
import { ReleaseStatus } from "../../models/release-status";

export class Release extends AggregateRoot {
   constructor(
      private readonly _id: string,
      private readonly app: AppType,
      private readonly version: string,
      private readonly releaseManager: ReleaseManager,
      private readonly releaseDate: DateTime,
      private readonly status: ReleaseStatus
   ) {
      super();
   }

   getId(): string {
      return this._id;
   }

   getApp(): AppType {
      return this.app;
   }

   getVersion(): string {
      return this.version;
   }

   getReleaseManager(): ReleaseManager {
      return this.releaseManager;
   }

   getReleaseDate(): DateTime {
      return this.releaseDate;
   }

   getStatus(): ReleaseStatus {
      return this.status;
   }
}
