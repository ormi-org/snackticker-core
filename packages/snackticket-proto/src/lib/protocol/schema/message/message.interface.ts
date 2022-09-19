export interface IMessage<T> {
  getData(): T
  getTime(): number
}