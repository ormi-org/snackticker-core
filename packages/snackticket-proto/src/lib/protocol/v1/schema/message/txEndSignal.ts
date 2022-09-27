import { Message, ResponseBase } from "../../../typed/schema/message/message";

type TxEndSignalData = ResponseBase

export class TxEndSignal extends Message<TxEndSignalData> {}