export enum LogLevel {
   DEBUG = "debug",
   INFO = "info",
   WARNING = "warn",
   ERROR = "error"
}

export interface Logger {
   name: string;
   level: LogLevel;
}

interface Server {
   port: number;
   environment: string;
   //   version: string;
}

export interface Config {
   logger: Logger;
   server: Server;
}
