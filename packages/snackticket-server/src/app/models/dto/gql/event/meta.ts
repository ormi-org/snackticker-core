import { Wallet } from '../wallet';
import { ITransactionType } from '../transaction/type';

type WalletDefinition = {
  default: boolean;
  wallet: Wallet<ITransactionType>;
};
/**
 * Event metadata
 */
export class EventMeta {
  /**
   * Namespace used for real-time communication
   */
  namespace!: string;
  /**
   * Authorized I/O wallets for basic transactions
   */
  authorizedWallets: WalletDefinition[] = [];
}
