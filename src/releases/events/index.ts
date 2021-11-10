import { ReleaseCreatedEventHandler } from "./release-created.event";
import { ReleaseUpdatedEventHandler } from "./release-updated.event";

export * from "./release-created.event";
export * from "./release-updated.event";

export const ReleaseEvents = [ReleaseCreatedEventHandler, ReleaseUpdatedEventHandler];
