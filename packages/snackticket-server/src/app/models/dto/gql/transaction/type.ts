/* eslint-disable no-unused-vars */
export enum TransactionType {
  TICKET_BASED = 'TICKET_BASED',
  CURRENCY_BASED = 'CURRENCY_BASED',
}

export interface ITransactionType {
  getType(): string
}

/**
 * TicketBased Transaction Type reflection
 */
export class TicketBasedTransaction implements ITransactionType {
  /**
   * Method returning the type of the transaction
   * @return {string}
   */
  getType(): string {
    return TransactionType.TICKET_BASED;
  }
}

/**
 * TicketBased Transaction Type reflection
 */
export class CurrencyBasedTransaction implements ITransactionType {
  /**
   * Method returning the type of the transaction
   * @return {string}
   */
  getType(): string {
    return TransactionType.TICKET_BASED;
  }
}
