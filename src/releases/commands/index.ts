import { CreateReleaseHandler } from "./create-release.command";
import { UpdateRelDefCommandHandler } from "./update-release.command";

export * from "./create-release.command";
export * from "./update-release.command";

export const ReleaseCommandHandlers = [CreateReleaseHandler, UpdateRelDefCommandHandler];
