import { ProtocolVersion } from "../../../typed/protocol.interface";
import { Message, ResponseBase } from "../../../typed/schema/message/message";

type ProtocolHandshakeReqData = {
  version: ProtocolVersion
  pubKey: string
  schema: string
}

interface ProtocolHandshakeResData extends ResponseBase {
  version: ProtocolVersion
}

export class ProtocolHandshakeReq extends Message<ProtocolHandshakeReqData> {}
export class ProtocolHandshakeRes extends Message<ProtocolHandshakeResData> {}