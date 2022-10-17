import { STATUS_CODE } from "../status";
import { IMessage } from "./message.interface";

export interface ResponseBase extends Record<string, unknown> {
  status: STATUS_CODE
  reason?: string
}

export abstract class Message<T extends Record<string, unknown>> implements IMessage<T> {
  protected time!: number;
  protected data!: T;

  constructor(data: T) {
    this.time = Date.now();
    this.data = data;
  }

  getData(): T {
    return this.data;
  }
  getTime(): number {
    return this.time;
  }

}