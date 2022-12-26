import { TransactionMeta } from './transaction/meta';
import { ITransactionType } from './transaction/type';
import { Wallet } from './wallet';

/* eslint-disable require-jsdoc */
export class Transaction<T extends ITransactionType> {
  id!: string;
  sourceWallet!: Wallet<T>;
  destinationWallet!: Wallet<T>;
  chainedWith?: Transaction<T>;
  children?: Transaction<T>;
  time!: Date;
  metadata!: TransactionMeta<T>;
}
