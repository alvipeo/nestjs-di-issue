import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateDeploymentCommand } from "./commands";
import { DeploymentsQuery } from "./queries";
import { DeploymentDto } from "./queries/models";
import { CreateDeploymentRequest } from "./requests";

@Controller("deployments")
export class DeploymentsController {
   constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

   /**
    * Returns all deployments
    *
    * @return {*}  {Promise<DeploymentDto[]>}
    * @memberof DeploymentsController
    */
   @Get()
   async getDeployments(): Promise<DeploymentDto[]> {
      return this.queryBus.execute<DeploymentsQuery, DeploymentDto[]>(new DeploymentsQuery());
   }

   /**
    * Create new Deployment
    *
    * @param {CreateDeploymentRequest} createDeplReq
    * @return {*}  {Promise<void>}
    * @memberof DeploymentsController
    */
   @Post()
   async createDeployment(@Body() createDeplReq: CreateDeploymentRequest): Promise<void> {
      await this.commandBus.execute<CreateDeploymentCommand, void>(new CreateDeploymentCommand(createDeplReq));
   }
}
