import { Message } from "../../../typed/schema/message/message";

type CommitTxReqData = {
  txToken: string
}

export class CommitTxReq extends Message<CommitTxReqData> {}

type TxCommitEventData = {
  data: object
}

export class TxCommitEvent extends Message<TxCommitEventData> {}