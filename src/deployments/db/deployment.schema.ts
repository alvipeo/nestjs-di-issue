import { Prop, Schema } from "@nestjs/mongoose";
import { DateTime } from "luxon";
import { ObjectId } from "mongodb";
import { AppType } from "src/common/models";
import { IdentifiableEntitySchema } from "src/common/persistence";
import { Firm } from "../models";

@Schema({ versionKey: false, collection: "Deployments" })
export class DeploymentSchema extends IdentifiableEntitySchema {
   @Prop()
   readonly custCode: Firm;

   @Prop()
   readonly app: AppType;

   @Prop()
   readonly circleJobNum?: number;

   @Prop()
   readonly circleJobLink?: string;

   @Prop()
   readonly circleTestJobLink?: string;

   @Prop()
   readonly initiatedByEmail: string;

   @Prop()
   readonly updated?: DateTime;

   constructor(
      _id: string,
      custCode: Firm,
      app: AppType,
      initiatedByEmail: string,
      circleJobNum?: number,
      circleJobLink?: string,
      circleTestJobLink?: string,
      updated?: DateTime
   ) {
      super(new ObjectId(_id));

      this.custCode = custCode;
      this.app = app;
      this.circleJobNum = circleJobNum;
      this.circleJobLink = circleJobLink;
      this.circleTestJobLink = circleTestJobLink;
      this.initiatedByEmail = initiatedByEmail;
      this.updated = updated;
   }
}
