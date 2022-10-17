import { IProtocol } from '@typed';
import { Message } from '@typed/schema/message';
import { ISchema } from '@typed/schema';
import { STATUS_CODE } from '@typed/schema/status';

export class Transaction<P extends IProtocol> {
  private schema: ISchema<P>;
  private step = 0;
  private currentMessage: Message<Record<string, unknown>> | undefined;

  private constructor(schema: ISchema<P>) {
    this.schema = schema;
  }

  public static withSchema<P extends IProtocol>(
    schema: ISchema<P>
  ): Transaction<P> {
    const tx = new Transaction<P>(schema);
    tx.schema = schema;
    return tx;
  }

  tryForwardWith(
    msg: Message<Record<string, unknown>>
  ): (data: Record<string, unknown>) => Message<Record<string, unknown>> | undefined {
    try {
      this.schema?.evaluate(this.step, msg);
    } catch (e) {
      throw new Error(
        `${STATUS_CODE.ERROR.INVALID_SCHEMA}: could not forward ${
          this.currentMessage?.constructor.name
        } with ${msg.constructor.name}; ${e instanceof Error ? e.message : e}`
      );
    } finally {
      this.currentMessage = msg;
      this.step++;
    }
    return this.schema.getNextOf(msg);
  }

  getSchema(): ISchema<P> {
    return this.schema;
  }
}
