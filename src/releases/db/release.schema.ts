import { Prop, Schema } from "@nestjs/mongoose";
import { DateTime } from "luxon";
import { ObjectId } from "mongodb";
import { AppType } from "src/common/models";
import { IdentifiableEntitySchema } from "src/common/persistence";
import { ReleaseManager, ReleaseStatus } from "../models";

@Schema({ versionKey: false, collection: "Releases" })
export class ReleaseSchema extends IdentifiableEntitySchema {
   @Prop()
   readonly app: AppType;

   @Prop()
   readonly version: string;

   @Prop()
   readonly releaseManager: ReleaseManager;

   @Prop()
   readonly releaseDate: DateTime;

   @Prop()
   readonly status: ReleaseStatus;

   constructor(_id: string, app: AppType, version: string, releaseManager: ReleaseManager, releaseDate: DateTime, status: ReleaseStatus) {
      super(new ObjectId(_id));

      this.app = app;
      this.version = version;
      this.releaseManager = releaseManager;
      this.releaseDate = releaseDate;
      this.status = status;
   }
}
