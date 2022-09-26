import { Message } from "./message/message";

export interface Schema {
  id: string
  descriptor: string
  evaluate(step: number, m: Message<unknown>): boolean
}