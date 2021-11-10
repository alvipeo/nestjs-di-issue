import { EventBus, EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { LogLevel } from "src/common/config";
import { LogEvent } from "src/common/events";

export class ReleaseCreatedEvent {
   constructor(public readonly releaseId: string) {}
}

@EventsHandler(ReleaseCreatedEvent)
export class ReleaseCreatedEventHandler implements IEventHandler<ReleaseCreatedEvent> {
   constructor(private eventBus: EventBus) {}

   async handle({ releaseId }: ReleaseCreatedEvent) {
      // here we request logging
      // but we could also request audit, etc
      this.eventBus.publish(new LogEvent(`Created release with Id=${releaseId}`, LogLevel.INFO));
   }
}
