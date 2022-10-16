import { Message } from "./message/message";

export interface ISchema<IProtocol> {
  /**
   * @param   ofMessage the message type on which to query the next type of
   * @returns next message type name
   */
  getNextOf(msg: Message<Record<string, unknown>>): (data: Record<string, unknown>) => Message<Record<string, unknown>>
  /**
   * evaluates if a message at specific step is compliant
   * 
   * @param step 
   * @param m 
   * @throws {Error}
   */
  evaluate(step: number, m: Message<Record<string, unknown>>): void
}