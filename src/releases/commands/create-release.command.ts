import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreateReleaseRequest } from "../requests";
import { ReleaseFactory } from "./models";

export class CreateReleaseCommand {
   constructor(public readonly createReq: CreateReleaseRequest) {}
}

@CommandHandler(CreateReleaseCommand)
export class CreateReleaseHandler implements ICommandHandler<CreateReleaseCommand> {
   constructor(private readonly releaseFactory: ReleaseFactory, private readonly eventPublisher: EventPublisher) {}

   async execute({ createReq }: CreateReleaseCommand): Promise<void> {
      const release = this.eventPublisher.mergeObjectContext(
         await this.releaseFactory.create(createReq.app, createReq.version, createReq.releaseManager, createReq.releaseDate, createReq.status)
      );
      release.commit();
   }
}
