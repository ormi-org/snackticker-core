export interface IMessage<T extends Record<string, unknown>> {
  getData(): T
  getTime(): number
}