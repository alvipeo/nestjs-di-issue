import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { DeploymentDtoRepo } from "../db/deployment-dto.repo";

export class DeploymentsQuery {}

@QueryHandler(DeploymentsQuery)
export class DeploymentsQueryHandler implements IQueryHandler<DeploymentsQuery> {
   constructor(private readonly deplRepo: DeploymentDtoRepo) {}

   async execute(query: DeploymentsQuery): Promise<any> {
      return this.deplRepo.findAll();
   }
}
