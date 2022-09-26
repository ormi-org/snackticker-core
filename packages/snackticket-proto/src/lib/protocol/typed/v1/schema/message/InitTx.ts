import { Message, ResponseBase } from "../../../../schema/message/message";

type InitTxReqData = {
  from: string
  to: string
  data: string
}

interface InitTxResData extends ResponseBase {
  txData?: string
}

export class InitTxReq extends Message<InitTxReqData> {}
export class InitTxRes extends Message<InitTxResData> {}