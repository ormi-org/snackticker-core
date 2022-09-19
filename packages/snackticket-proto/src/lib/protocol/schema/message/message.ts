import { IMessage } from "./message.interface";

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