import { Message } from "./message/message";

export interface ISchema<IProtocol> {
  id: string
  descriptor: string
  flow: Array<string>
  /**
   * evaluates if a message at specific step is compliant
   * 
   * @param step 
   * @param m 
   * @throws {Error}
   */
  evaluate(step: number, m: Message<unknown>): void
}