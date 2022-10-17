import { IProtocol } from "@typed";
import { Message } from "./message";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ISchema<T extends IProtocol> {
  /**
   * Get next expected message factory immediately after passed message
   * 
   * @param   ofMessage the message type on which to query the next type of
   * @returns next message anonymous factory
   */
  getNextOf(msg: Message<Record<string, unknown>>): (data: Record<string, unknown>) => Message<Record<string, unknown>> | undefined
  /**
   * evaluates if a message at specific step is compliant
   * 
   * @param step 
   * @param m 
   * @throws {Error}
   */
  evaluate(step: number, m: Message<Record<string, unknown>>): void
  /**
   * Get flow for the current Schema
   * 
   * @returns the schema messages sequence
   */
  getFlow(): Array<[string, (data: Record<string, unknown>) => Message<Record<string, unknown>> | undefined]>
}