import { AppType } from "src/common/models";
import { Firm } from "../models";

export class CreateDeploymentRequest {
   constructor(
      public readonly releaseId: string,
      public readonly custCode: Firm,
      public readonly app: AppType,
      public readonly initiatedByEmail: string,
      public readonly circleJobNum?: number,
      public readonly circleJobLink?: string,
      public readonly circleTestJobLink?: string
   ) {}
}
