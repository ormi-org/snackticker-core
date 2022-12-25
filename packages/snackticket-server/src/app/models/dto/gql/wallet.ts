import {Transaction} from './transaction';
import {ITransactionType} from './transaction/type';

/* eslint-disable require-jsdoc */
export class Wallet<T extends ITransactionType> {
  id!: string;
  identifier!: string;
  publicKey!: string;
  label!: string;
  lastOperation!: string;
  sourceOf: Transaction<T>[] = [];
  destinationOf: Transaction<T>[] = [];
}
