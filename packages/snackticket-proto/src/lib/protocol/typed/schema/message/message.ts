import { STATUS_CODE } from "../status/status";
import { IMessage } from "./message.interface";

export type ResponseBase = {
  status: STATUS_CODE
  reason?: string
}

export abstract class Message<T> implements IMessage<T> {
  protected time!: number;
  protected data!: T;

  constructor() {
    this.time = Date.now();
  }

  getData(): T {
    return this.data;
  }
  getTime(): number {
    return this.time;
  }

}