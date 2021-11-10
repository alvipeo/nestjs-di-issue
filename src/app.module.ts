import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { GlobalCommandHandlers } from "./common/commands";
import { GlobalEventHandlers } from "./common/events";
import { LoggingSaga } from "./common/sagas";
import { ReleasesModule } from "./releases/releases.module";
import { DeploymentsModule } from "./deployments/deployments.module";

@Module({
   imports: [MongooseModule.forRoot("mongodb://localhost:27017,localhost:27018,localhost:27019?replicaSet=rs"), ReleasesModule, DeploymentsModule],
   providers: [...GlobalCommandHandlers, ...GlobalEventHandlers, LoggingSaga]
})
export class AppModule {}
