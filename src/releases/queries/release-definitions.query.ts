import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ReleaseDtoRepo } from "../db";
import { ReleaseDto } from "./models";

export class ReleasesQuery {}

@QueryHandler(ReleasesQuery)
export class RelasesQueryHandler implements IQueryHandler<ReleasesQuery> {
   constructor(private readonly reldefsRepo: ReleaseDtoRepo) {}

   async execute(): Promise<ReleaseDto[]> {
      return this.reldefsRepo.findAll();
   }
}
