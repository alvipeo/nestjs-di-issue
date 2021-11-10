import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CreateReleaseCommand } from "./commands";
import { UpdateRelDefCommand } from "./commands/update-release.command";
import { ReleaseDto, ReleasesQuery } from "./queries";
import { CreateReleaseRequest, UpdateReleaseRequest } from "./requests";

@Controller("releases")
export class ReleasesController {
   constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

   @Get()
   @ApiOperation({ summary: "Get all ReleaseDefinitions (reldef's)." })
   @ApiResponse({
      isArray: true,
      status: 200,
      description: "ReleaseDefinition list is returned successfully."
   })
   async getRelDefs(): Promise<ReleaseDto[]> {
      return this.queryBus.execute<ReleasesQuery, ReleaseDto[]>(new ReleasesQuery());
   }

   @Put(":id")
   @ApiOperation({ summary: "Update ReleaseDefinition (reldef)." })
   @ApiResponse({
      status: 200,
      description: "Succesfully updated ReleaseDefinition."
   })
   async updateRelDef(@Param("id") id: string, @Body() updateReq: UpdateReleaseRequest) {
      await this.commandBus.execute<UpdateRelDefCommand, void>(new UpdateRelDefCommand(id, updateReq));
   }

   @Post()
   @ApiOperation({ summary: "Add new ReleaseDefinition (reldef)." })
   @ApiResponse({
      status: 201,
      description: "Succesfully added ReleaseDefinition."
   })
   async createRelDef(@Body() createRelDefReq: CreateReleaseRequest): Promise<void> {
      await this.commandBus.execute<CreateReleaseCommand, void>(new CreateReleaseCommand(createRelDefReq));
   }
}
