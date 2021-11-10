import { LogLevel } from "../config";

export interface LogToCommandBase {
   readonly message: string;
   readonly logLevel: LogLevel;
}
