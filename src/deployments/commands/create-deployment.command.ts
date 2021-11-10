import { EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreateDeploymentRequest } from "../requests";
import { DeploymentFactory } from "./models";

export class CreateDeploymentCommand {
   constructor(public readonly createReq: CreateDeploymentRequest) {}
}

export class CreateDeploymentHandler implements ICommandHandler<CreateDeploymentCommand> {
   constructor(private readonly deplFactory: DeploymentFactory, private readonly eventPublisher: EventPublisher) {}

   async execute({ createReq }: CreateDeploymentCommand): Promise<void> {
      const depl = this.eventPublisher.mergeObjectContext(
         await this.deplFactory.create(
            createReq.custCode,
            createReq.app,
            createReq.initiatedByEmail,
            createReq.circleJobNum,
            createReq.circleJobLink,
            createReq.circleTestJobLink
         )
      );
      depl.commit();
   }
}
