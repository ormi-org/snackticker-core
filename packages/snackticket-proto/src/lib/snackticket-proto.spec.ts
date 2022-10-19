import { Transaction } from '@transaction';
import { ProtocolVersion } from '@typed';
import { Message } from '@typed/schema/message';
import { STATUS_CODE } from '@typed/schema/status';
import { ProtocolV1 } from '@v1';
import { MultiTierTransactionSchema, SchemaV1, SingleTierTransactionSchema } from '@v1/schema';
import {
  CommitTxReq,
  HandoverTxReq,
  HandoverTxRes,
  InitTxReq,
  InitTxRes,
  ProtocolHandshakeReq,
  ProtocolHandshakeReqData,
  ProtocolHandshakeRes,
  TxCommitEvent,
  TxEndSignal
} from '@v1/schema/message';

describe('snackticketProtoV1', () => {
  it('should prevent transaction execution in case flow is not compliant', () => {
    const tx = Transaction.withSchema<ProtocolV1>(
      new SingleTierTransactionSchema()
    );
    expect(() =>
      tx.tryForwardWith(new HandoverTxReq({ pubKey: '', txToken: '' }))
    ).toThrow();
  });

  it('should accept next message in case of good compliance', () => {
    const tx = Transaction.withSchema<ProtocolV1>(
      new SingleTierTransactionSchema()
    );
    expect(() =>
      tx.tryForwardWith(
        new ProtocolHandshakeReq({
          pubKey: '',
          schema: SchemaV1.SINGLE_TIER_TRANSACTION,
          version: ProtocolVersion.VERSION_1,
        })
      )
    ).not.toThrow();
  });

  describe('singleTierTransactionSchema', () => {
    const COMPLIANT_SINGLETIERTX_FLOW: Array<Message<Record<string, unknown>>> = [
      new ProtocolHandshakeReq({
        pubKey: '',
        schema: SchemaV1.SINGLE_TIER_TRANSACTION,
        version: ProtocolVersion.VERSION_1,
      }),
      new ProtocolHandshakeRes({
        status: STATUS_CODE.SUCCESS.PROTOCOL_HANDSHAKE_OK,
        version: ProtocolVersion.VERSION_1,
      }),
      new InitTxReq({
        data: {},
        from: '',
        to: '',
      }),
      new InitTxRes({
        status: STATUS_CODE.SUCCESS.INIT_TX_OK,
        txData: {},
      }),
      new HandoverTxReq({
        pubKey: '',
        txToken: '',
      }),
      new HandoverTxRes({
        status: STATUS_CODE.SUCCESS.HANDOVER_TX_OK,
      }),
      new TxEndSignal({
        status: STATUS_CODE.SUCCESS.TX_END,
      })
    ];
    it('should complete in case message schema is compliant', () => {
      const tx = Transaction.withSchema<ProtocolV1>(
        new SingleTierTransactionSchema()
      );
      expect(() => {
        tx.getSchema()
          .getFlow()
          .slice(0)
          .reduce(
            (acc, _, i) => {
              const nextMsg = COMPLIANT_SINGLETIERTX_FLOW[i];
              if (typeof nextMsg === undefined) {
                return () => undefined;
              }
              return tx.tryForwardWith(nextMsg);
            },
            (data: Record<string, unknown>): Message<Record<string, unknown>> | undefined =>
              new ProtocolHandshakeReq(<ProtocolHandshakeReqData>data)
          );
      }).not.toThrow();
    });
  });

  describe('multiTierTransactionSchema', () => {
    const COMPLIANT_SINGLETIERTX_FLOW: Array<Message<Record<string, unknown>>> = [
      new ProtocolHandshakeReq({
        pubKey: '',
        schema: SchemaV1.SINGLE_TIER_TRANSACTION,
        version: ProtocolVersion.VERSION_1,
      }),
      new ProtocolHandshakeRes({
        status: STATUS_CODE.SUCCESS.PROTOCOL_HANDSHAKE_OK,
        version: ProtocolVersion.VERSION_1,
      }),
      new InitTxReq({
        data: {},
        from: '',
        to: '',
      }),
      new InitTxRes({
        status: STATUS_CODE.SUCCESS.INIT_TX_OK,
        txData: {},
      }),
      new CommitTxReq({
        txToken: ''
      }),
      new TxCommitEvent({
        txData: {}
      })
    ];
    it('should complete in case message schema is compliant', () => {
      const tx = Transaction.withSchema<ProtocolV1>(
        new MultiTierTransactionSchema()
      );
      expect(() => {
        tx.getSchema()
          .getFlow()
          .slice(0)
          .reduce(
            (acc, _, i) => {
              const nextMsg = COMPLIANT_SINGLETIERTX_FLOW[i];
              return tx.tryForwardWith(nextMsg);
            },
            (data: Record<string, unknown>): Message<Record<string, unknown>> | undefined =>
              new ProtocolHandshakeReq(<ProtocolHandshakeReqData>data)
          );
      }).not.toThrow();
    });
  });
});
