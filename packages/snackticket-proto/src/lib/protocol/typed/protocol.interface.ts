import { ISchema } from "./schema/schema.interface";

export enum ProtocolVersion {
  VERSION_1 = 1
}

export interface IProtocol {
  version: ProtocolVersion
  schemas: Map<string, ISchema<this>>
}