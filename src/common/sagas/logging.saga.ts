import { Injectable } from "@nestjs/common";
import { ICommand, ofType, Saga } from "@nestjs/cqrs";
import { mergeMap, Observable } from "rxjs";
import { LogToConsoleCommand, LogToTbpCommand } from "../commands";
import { LogEvent } from "../events";

/**
 * Handle all log events (not much goind on here now, but we might add some extra info to the logging - timestamp, user info, etc)
 *
 * @export
 * @class LoggingSaga
 */
@Injectable()
export class LoggingSaga {
   @Saga()
   logged = (events$: Observable<any>): Observable<ICommand> =>
      events$.pipe(
         ofType(LogEvent),
         // map(({ message }) => new LogToConsoleCommand(message))
         mergeMap(({ message, logLevel }) => [new LogToConsoleCommand(message, logLevel), new LogToTbpCommand(message, logLevel)])
      );
}
