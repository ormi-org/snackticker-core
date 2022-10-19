import { Message } from '@typed/schema/message';
import { ISchema } from '@typed/schema';
import { ProtocolV1 } from '../protocolV1';

export enum SchemaV1 {
  SINGLE_TIER_TRANSACTION = 'V1/SINGLE_TIER_TRANSACTION_SCHEMA',
  MULTI_TIER_TRANSACTION = 'V1/MULTI_TIER_TRANSACTION_SCHEMA',
}

export abstract class ProtocolV1Schema implements ISchema<ProtocolV1> {
  protected abstract id: string;
  protected abstract descriptor: string;
  protected abstract flow: Array<
    [
      string,
      (data: Record<string, unknown>) => Message<Record<string, unknown>> | undefined
    ]
  >;

  getNextOf(
    msg: Message<Record<string, unknown>>
  ): (data: Record<string, unknown>) => Message<Record<string, unknown>> | undefined {
    const nextMsgFactory =
      this.flow[this.flow.findIndex((item) => item[0] === msg.constructor.name)][1];
    return nextMsgFactory;
  }

  evaluate(step: number, msg: Message<Record<string, unknown>>): void {
    if (typeof msg === 'undefined') {
      throw new Error(`expected ${this.flow[step][0]}; got End Of Transaction`);
    }
    if (msg.constructor.name !== this.flow[step][0])
      throw new Error(`expected ${this.flow[step][0]}`);
    return;
  }

  getFlow(): [
    string,
    (data: Record<string, unknown>) => Message<Record<string, unknown>> | undefined
  ][] {
    return this.flow;
  }
}
