import { Message } from "../../../../schema/message/message";

type InitTxReqData = {
  ttl: number
  data: string
}

type InitTxResData = {
  status: null
}

export class InitTxReq extends Message<InitTxReqData> {}
export class InitTxRes extends Message<InitTxResData> {}