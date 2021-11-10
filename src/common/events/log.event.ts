import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { LogLevel } from "../config";

export class LogEvent {
   constructor(public readonly message: string, public readonly logLevel: LogLevel) {}
}

@EventsHandler(LogEvent)
export class LogEventHandler implements IEventHandler<LogEvent> {
   handle({}: LogEvent) {
      // event must have an event handler, otherwise it just doesn't work as an event
      // besides, it might be used for some extra processing
   }
}
