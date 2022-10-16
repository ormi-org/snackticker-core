import { Message, ResponseBase } from "@typed";

export type InitTxReqData = {
  from: string
  to: string
  data: object
}

export interface InitTxResData extends ResponseBase {
  txData?: object
}

export class InitTxReq extends Message<InitTxReqData> {}
export class InitTxRes extends Message<InitTxResData> {}