import { Injectable } from "@nestjs/common";
import { EntitySchemaFactory } from "src/common/persistence";
import { Release } from "../commands/models/release";
import { ReleaseSchema } from "./release.schema";

@Injectable()
export class ReleaseSchemaFactory implements EntitySchemaFactory<ReleaseSchema, Release> {
   create(rel: Release): ReleaseSchema {
      return new ReleaseSchema(rel.getId(), rel.getApp(), rel.getVersion(), rel.getReleaseManager(), rel.getReleaseDate(), rel.getStatus());
   }

   createFromSchema(relSchema: ReleaseSchema): Release {
      return new Release(relSchema._id.toHexString(), relSchema.app, relSchema.version, relSchema.releaseManager, relSchema.releaseDate, relSchema.status);
   }
}
