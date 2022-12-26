import { ITransactionType } from './type';

/* eslint-disable require-jsdoc */
export class TransactionMeta<T extends ITransactionType> {
  type!: T;
}
