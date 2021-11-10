import { AggregateRoot } from "@nestjs/cqrs";
import { DateTime } from "luxon";
import { AppType } from "src/common/models";
import { Firm } from "src/deployments/models";

export class Deployment extends AggregateRoot {
   constructor(
      private readonly _id: string,
      private readonly custCode: Firm,
      private readonly app: AppType,
      private readonly initiatedByEmail: string,
      private readonly circleJobNum?: number,
      private readonly circleJobLink?: string,
      private readonly circleTestJobLink?: string,
      private readonly updated?: DateTime
   ) {
      super();
   }

   getId(): string {
      return this._id;
   }

   getCustCode(): Firm {
      return this.custCode;
   }

   getApp(): AppType {
      return this.app;
   }

   getInitiatedByEmail(): string {
      return this.initiatedByEmail;
   }

   getCircleJobNum(): number | undefined {
      return this.circleJobNum;
   }

   getCircleJobLink(): string | undefined {
      return this.circleJobLink;
   }

   getCircleTestJobLink(): string | undefined {
      return this.circleTestJobLink;
   }

   getUpdated(): DateTime | undefined {
      return this.updated;
   }
}
