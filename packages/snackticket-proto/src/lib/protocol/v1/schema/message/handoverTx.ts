import { Message, ResponseBase } from "@typed";

export type HandoverTxReqData = {
  pubKey: string
  txToken: string
}

export type HandoverTxResData = ResponseBase

export class HandoverTxReq extends Message<HandoverTxReqData> {}
export class HandoverTxRes extends Message<HandoverTxResData> {}