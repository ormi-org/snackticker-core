import { Message, ResponseBase } from "@typed";

export type TxEndSignalData = ResponseBase

export class TxEndSignal extends Message<TxEndSignalData> {}