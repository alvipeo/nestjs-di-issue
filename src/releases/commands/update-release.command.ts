import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { ReleaseRepo } from "../db";
import { ReleaseUpdatedEvent } from "../events";
import { UpdateReleaseRequest } from "../requests";
import { Release } from "./models";

export class UpdateRelDefCommand {
   constructor(public readonly id: string, public readonly updateReq: UpdateReleaseRequest) {}
}

@CommandHandler(UpdateRelDefCommand)
export class UpdateRelDefCommandHandler implements ICommandHandler<UpdateRelDefCommand> {
   constructor(private readonly reldefRepo: ReleaseRepo, private readonly eventPublisher: EventPublisher) {}

   async execute({ id, updateReq }: UpdateRelDefCommand): Promise<void> {
      // do we really need to check its existence?
      //    const existingRelDef = await this.reldefRepo.findOneById(updateReq.id);

      const RelDefModel = this.eventPublisher.mergeClassContext(Release);
      const reldef = new RelDefModel(id, updateReq.app, updateReq.version, updateReq.releaseManager, updateReq.releaseDate, updateReq.status);
      await this.reldefRepo.findOneAndReplaceById(id, reldef);
      reldef.apply(new ReleaseUpdatedEvent(reldef.getId()));
      reldef.commit();
   }
}
