import { EventBus, EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { LogLevel } from "src/common/config";
import { LogEvent } from "src/common/events";

export class DeploymentCreatedEvent {
   constructor(public readonly deplId: string) {}
}

@EventsHandler(DeploymentCreatedEvent)
export class DeploymentCreatedHandler implements IEventHandler<DeploymentCreatedEvent> {
   constructor(private eventBus: EventBus) {}

   async handle({ deplId }: DeploymentCreatedEvent) {
      // here we request logging
      // but we could also request audit, etc
      this.eventBus.publish(new LogEvent(`Created deployment with Id=${deplId}`, LogLevel.INFO));
   }
}
