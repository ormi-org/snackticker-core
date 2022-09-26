import { Message, ResponseBase } from "../../../../schema/message/message";

type TxEndSignalData = ResponseBase

export class TxEndSignal extends Message<TxEndSignalData> {}