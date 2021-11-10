import { DateTime } from "luxon";
import { ObjectId } from "mongoose";
import { AppType } from "src/common/models";
import { Firm } from "src/deployments/models";

export class DeploymentDto {
   constructor(
      public readonly _id: ObjectId,
      public readonly custCode: Firm,
      public readonly app: AppType,
      public readonly initiatedByEmail: string,
      public readonly circleJobNum?: number,
      public readonly circleJobLink?: string,
      public readonly circleTestJobLink?: string,
      public readonly updated?: DateTime
   ) {}
}
