import { ProtocolVersion } from "../../../../protocol.interface";
import { Message } from "../../../../schema/message/message";

type ProtocolHandshakeReqData = {
  version: null
  pubKey: string
}

type ProtocolHandshakeResData = {
  version: ProtocolVersion
}

export class ProtocolHandshakeReq extends Message<ProtocolHandshakeReqData> {}
export class ProtocolHandshakeRes extends Message<ProtocolHandshakeResData> {}