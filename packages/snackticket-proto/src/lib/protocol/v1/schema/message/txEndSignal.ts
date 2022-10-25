import { Message, ResponseBase } from "@typed/schema/message";

export type TxEndSignalData = ResponseBase

export class TxEndSignal extends Message<TxEndSignalData> {}