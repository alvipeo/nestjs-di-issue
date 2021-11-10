import { EventBus, EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { LogLevel } from "src/common/config";
import { LogEvent } from "src/common/events";

export class ReleaseUpdatedEvent {
   constructor(public readonly releaseId: string) {}
}

@EventsHandler(ReleaseUpdatedEvent)
export class ReleaseUpdatedEventHandler implements IEventHandler<ReleaseUpdatedEvent> {
   constructor(private eventBus: EventBus) {}

   async handle({ releaseId: reldefId }: ReleaseUpdatedEvent) {
      // here we request logging
      // but we could also request audit, etc
      this.eventBus.publish(new LogEvent(`Updated reldef with Id=${reldefId}`, LogLevel.WARNING));
   }
}
