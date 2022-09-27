import { Message  } from "../../typed/schema/message/message";
import { ISchema } from "../../typed/schema/schema.interface";
import { ProtocolV1 } from "../protocolV1";
import * as V1Message from "./message/message.module";
import { SchemaV1 } from "./schemaV1";

export class SingleTierTransactionSchema implements ISchema<ProtocolV1> {
  id = SchemaV1.SINGLE_TIER_TRANSACTION;
  descriptor = "a single tier transaction between a human-controlled device and a virtual wallet(/pool)";
  flow: Array<string> = [
    V1Message.ProtocolHandshakeReq.name,
    V1Message.ProtocolHandshakeRes.name,
    V1Message.InitTxReq.name,
    V1Message.InitTxRes.name,
    V1Message.HandoverTxReq.name,
    V1Message.HandoverTxRes.name,
    V1Message.TxEndSignal.name,
  ];

  /**
   * @param   ofMessage the message type on which to query the next type of
   * @returns next message type name
   */
  getNext(ofMessage: string): string {
    return this.flow[this.flow.indexOf(ofMessage)+1];
  }

  /**
   * Check if passed message is validating the schema flow
   * 
   * @param step the step number to evaluate
   * @param msg 
   */
  evaluate(step: number, msg: Message<unknown>): void {
    if (msg.constructor.name !== this.flow[step]) throw new Error(`expected ${this.flow[step]}`);
    return;
  }

}