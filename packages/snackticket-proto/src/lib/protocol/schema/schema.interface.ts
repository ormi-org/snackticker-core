import { Message } from "./message/message";

export interface Schema {
  descriptor: string
  evaluate(step: number, m: Message<unknown>): boolean
}