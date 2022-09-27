import { HandoverTxReq } from './protocol/v1/schema/message/handoverTx';
import { ProtocolHandshakeReq } from './protocol/v1/schema/message/protocolHandshake';
import { SingleTierTransactionSchema } from './protocol/v1/schema/singleTierTransactionSchema';
import { ProtocolV1 } from './snackticket-proto.module';
import { Transaction } from './transaction/transaction';

describe('snackticketProtoV1', () => {
  it('should prevent transaction execution in case flow is not compliant', () => {
    const tx = Transaction.withSchema<ProtocolV1>(new SingleTierTransactionSchema());
    expect(() => tx.tryForwardWith(new HandoverTxReq())).toThrow();
  });

  it('should accept next message in case of good compliance', () => {
    const tx = Transaction.withSchema<ProtocolV1>(new SingleTierTransactionSchema());
    expect(() => tx.tryForwardWith(new ProtocolHandshakeReq())).not.toThrow();
  });
});
