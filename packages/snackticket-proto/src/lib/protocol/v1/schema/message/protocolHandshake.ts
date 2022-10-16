import { ProtocolVersion } from "@typed";
import { Message, ResponseBase } from "@typed";
import { SchemaV1 } from "../schemaV1";

export type ProtocolHandshakeReqData = {
  version: ProtocolVersion
  pubKey: string
  schema: SchemaV1
}

export interface ProtocolHandshakeResData extends ResponseBase {
  version: ProtocolVersion
}

export class ProtocolHandshakeReq extends Message<ProtocolHandshakeReqData> {}
export class ProtocolHandshakeRes extends Message<ProtocolHandshakeResData> {}