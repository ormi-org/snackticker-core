import { Protocol } from "../protocol/protocol.interface";
import { Schema } from "../protocol/schema/schema.interface";

export interface Transaction<P extends Protocol> {
  withSchema(s: Schema): Transaction<P>
}