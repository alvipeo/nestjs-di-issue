import { Prop } from "@nestjs/mongoose";
import { ObjectId } from "mongodb";

export abstract class IdentifiableEntitySchema {
   @Prop()
   readonly _id: ObjectId;

   constructor(_id: ObjectId) {
      this._id = _id;
   }
}
