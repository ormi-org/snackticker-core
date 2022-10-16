import { Message } from "@typed";
import { ISchema } from "@typed";
import { ProtocolV1 } from "../protocolV1";

export enum SchemaV1 {
  SINGLE_TIER_TRANSACTION = "V1/SINGLE_TIER_TRANSACTION_SCHEMA",
  MULTI_TIER_TRANSACTION = "V1/MULTI_TIER_TRANSACTION_SCHEMA"
}

export abstract class ProtocolV1Schema implements ISchema<ProtocolV1> {
  protected abstract id: string;
  protected abstract descriptor: string;
  protected abstract flow: Array<[string, (data: Record<string, unknown>) => Message<Record<string, unknown>>]>;
  /**
   * @param   ofMessage the message type on which to query the next type of
   * @returns next message type name
   */
   getNextOf(msg: Message<Record<string, unknown>>): (data: Record<string, unknown>) => Message<Record<string, unknown>> {
    const nextMsgFactory = this.flow[this.flow.findIndex((item) => item[0] === typeof msg)+1][1];
    if (nextMsgFactory === undefined) {
      throw new Error(`End of Schema`);
    }
    return nextMsgFactory;
  }

  /**
   * Check if passed message is validating the schema flow
   * 
   * @param step the step number to evaluate
   * @param msg 
   */
  evaluate(step: number, msg: Message<Record<string, unknown>>): void {
    if (typeof msg !== this.flow[step][0]) throw new Error(`expected ${this.flow[step]}`);
    return;
  }
}