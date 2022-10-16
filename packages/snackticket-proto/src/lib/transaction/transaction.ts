import { IProtocol } from "@typed";
import { Message } from "@typed";
import { ISchema } from "@typed";
import { STATUS_CODE } from "@typed";

export class Transaction<P extends IProtocol> {
  private schema: ISchema<P>;
  private step = 0;
  private currentMessage: Message<unknown> | undefined;

  private constructor(schema: ISchema<P>) {
    this.schema = schema;
  }

  public static withSchema<P extends IProtocol>(schema: ISchema<P>): Transaction<P> {
    const tx = new Transaction<P>(schema);
    tx.schema = schema;
    return tx;
  }

  tryForwardWith(msg: Message<unknown>): () => Message<unknown> {
    try {
      this.schema?.evaluate(this.step, msg);
    } catch(e) {
      throw new Error(`${STATUS_CODE.ERROR.INVALID_SCHEMA}: could not forward ${typeof this.currentMessage} with ${typeof msg}; ${e instanceof Error ? e.message : e}`);
    } finally {
      this.currentMessage = msg;
      this.step++;
    }
    return this.schema.getNextOf(msg);
  }
}