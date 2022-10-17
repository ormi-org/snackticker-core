import { ProtocolVersion } from "@typed";
import { Message, ResponseBase } from "@typed/schema/message";
import { SchemaV1 } from "@v1/schema";

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