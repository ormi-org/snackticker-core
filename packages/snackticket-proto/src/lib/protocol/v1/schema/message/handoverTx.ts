import { Message, ResponseBase } from "../../../typed/schema/message/message";

type HandoverTxReqData = {
  pubKey: string
  txToken: string
}

type HandoverTxResData = ResponseBase

export class HandoverTxReq extends Message<HandoverTxReqData> {}
export class HandoverTxRes extends Message<HandoverTxResData> {}