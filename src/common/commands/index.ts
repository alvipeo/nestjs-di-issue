import { LogToConsoleHandler } from "./log-to-console.command";
import { LogToTbpHandler } from "./log-to-tbp.command";

export * from "./log-to.interface";
export * from "./log-to-console.command";
export * from "./log-to-tbp.command";

export const GlobalCommandHandlers = [LogToConsoleHandler, LogToTbpHandler];
