import { ISchema } from "./schema/schema.interface";

export enum ProtocolVersion {
  VERSION_1 = 1
}

export interface IProtocol {
  readonly version: ProtocolVersion
  readonly schemas: Map<string, ISchema<this>>
}