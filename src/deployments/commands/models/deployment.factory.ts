import { Injectable } from "@nestjs/common";
import { ObjectId } from "mongodb";
import { EntityFactory } from "src/common";
import { AppType } from "src/common/models";
import { Deployment } from "./deployment";
import { DeploymentRepo } from "src/deployments/db";
import { DeploymentCreatedEvent } from "src/deployments/events";
import { Firm } from "src/deployments/models";

@Injectable()
export class DeploymentFactory implements EntityFactory<Deployment> {
   constructor(private readonly deplRepo: DeploymentRepo) {}

   async create(
      custCode: Firm,
      app: AppType,
      initiatedByEmail: string,
      circleJobNum?: number,
      circleJobLink?: string,
      circleTestJobLink?: string
   ): Promise<Deployment> {
      const depl = new Deployment(new ObjectId().toHexString(), custCode, app, initiatedByEmail, circleJobNum, circleJobLink, circleTestJobLink);
      await this.deplRepo.create(depl);
      depl.apply(new DeploymentCreatedEvent(depl.getId()));
      return depl;
   }
}
