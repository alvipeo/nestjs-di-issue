import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { LogLevel } from "../config";
import { LogToCommandBase } from "./log-to.interface";

export class LogToTbpCommand implements LogToCommandBase {
   constructor(public readonly message: string, public readonly logLevel: LogLevel) {}
}

@CommandHandler(LogToTbpCommand)
export class LogToTbpHandler implements ICommandHandler<LogToTbpCommand> {
   async execute({ message, logLevel }: LogToTbpCommand): Promise<void> {
      switch (logLevel) {
         case LogLevel.DEBUG:
            console.debug(message);
            break;
         case LogLevel.INFO:
            console.info(message);
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
