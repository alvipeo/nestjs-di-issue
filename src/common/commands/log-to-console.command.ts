import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { LogLevel } from "../config";
import { LogToCommandBase } from "./log-to.interface";

export class LogToConsoleCommand implements LogToCommandBase {
   constructor(public readonly message: string, public readonly logLevel: LogLevel) {}
}

@CommandHandler(LogToConsoleCommand)
export class LogToConsoleHandler implements ICommandHandler<LogToConsoleCommand> {
   async execute({ message, logLevel }: LogToConsoleCommand): Promise<void> {
      switch (logLevel) {
         case LogLevel.DEBUG:
         case LogLevel.INFO:
            console.log(message);
            break;
         case LogLevel.WARNING:
            console.warn(message);
            break;
         case LogLevel.ERROR:
            console.error(message);
            break;
      }
   }
}
