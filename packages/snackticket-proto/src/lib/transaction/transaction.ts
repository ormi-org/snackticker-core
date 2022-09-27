import { IProtocol } from "../protocol/typed/protocol.interface";
import { Message } from "../protocol/typed/schema/message/message";
import { ISchema } from "../protocol/typed/schema/schema.interface";
import { STATUS_CODE } from "../protocol/typed/schema/status/status";

export class Transaction<P extends IProtocol> {
  private schema: ISchema<P> | undefined;
  private step = 0;
  private currentMessage: Message<unknown> | undefined;

  public static withSchema<P extends IProtocol>(schema: ISchema<P>): Transaction<P> {
    const tx = new Transaction<P>();
    tx.schema = schema;
    return tx;
  }

  tryForwardWith(msg: Message<unknown>) {
    try {
      this.schema?.evaluate(this.step, msg);
    } catch(e) {
      throw new Error(`${STATUS_CODE.ERROR.INVALID_SCHEMA}: could not forward ${typeof this.currentMessage} with ${typeof msg}; ${e instanceof Error ? e.message : e}`);
    } finally {
      this.currentMessage = msg;
      this.step++;
    }
  }
}