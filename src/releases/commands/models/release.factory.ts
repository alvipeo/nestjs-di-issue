import { Injectable } from "@nestjs/common";
import { DateTime } from "luxon";
import { ObjectId } from "mongodb";
import { EntityFactory } from "src/common";
import { AppType } from "src/common/models";
import { ReleaseRepo } from "src/releases/db";
import { ReleaseCreatedEvent } from "src/releases/events";
import { ReleaseManager, ReleaseStatus } from "src/releases/models";
import { Release } from "./release";

@Injectable()
export class ReleaseFactory implements EntityFactory<Release> {
   constructor(private readonly releaseRepo: ReleaseRepo) {}

   async create(app: AppType, version: string, releaseManager: ReleaseManager, relDate: DateTime, status: ReleaseStatus): Promise<Release> {
      const rel = new Release(new ObjectId().toHexString(), app, version, releaseManager, relDate, status);
      await this.releaseRepo.create(rel);
      rel.apply(new ReleaseCreatedEvent(rel.getId()));
      return rel;
   }
}
