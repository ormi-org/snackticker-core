import { Schema } from "./schema/schema.interface";

export enum ProtocolVersion {
  VERSION_1 = 1
}

export interface Protocol {
  version: ProtocolVersion
  schemas: Map<string, Schema>
}