import { Injectable } from "@nestjs/common";
import { EntitySchemaFactory } from "src/common/persistence";
import { Deployment } from "../commands/models";
import { DeploymentSchema } from "./deployment.schema";

@Injectable()
export class DeploymentSchemaFactory implements EntitySchemaFactory<DeploymentSchema, Deployment> {
   create(depl: Deployment): DeploymentSchema {
      return new DeploymentSchema(
         depl.getId(),
         depl.getCustCode(),
         depl.getApp(),
         depl.getInitiatedByEmail(),
         depl.getCircleJobNum(),
         depl.getCircleJobLink(),
         depl.getCircleTestJobLink(),
         depl.getUpdated()
      );
   }

   createFromSchema(deplSchema: DeploymentSchema): Deployment {
      return new Deployment(
         deplSchema._id.toHexString(),
         deplSchema.custCode,
         deplSchema.app,
         deplSchema.initiatedByEmail,
         deplSchema.circleJobNum,
         deplSchema.circleJobLink,
         deplSchema.circleTestJobLink,
         deplSchema.updated
      );
   }
}
