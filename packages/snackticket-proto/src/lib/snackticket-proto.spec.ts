import { Transaction } from '@transaction';
import { ProtocolVersion } from '@typed';
import { Message } from '@typed/schema/message';
import { STATUS_CODE } from '@typed/schema/status';
import { ProtocolV1 } from '@v1';
import { SchemaV1, SingleTierTransactionSchema } from '@v1/schema';
import {
  HandoverTxReq,
  HandoverTxReqData,
  HandoverTxResData,
  InitTxReqData,
  InitTxResData,
  ProtocolHandshakeReq,
  ProtocolHandshakeReqData,
  ProtocolHandshakeResData
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
    const COMPLIANT_SINGLETIERTX_FLOW: Array<Record<string, unknown>> = [
      <ProtocolHandshakeReqData>{
        pubKey: '',
        schema: SchemaV1.SINGLE_TIER_TRANSACTION,
        version: ProtocolVersion.VERSION_1,
      },
      <ProtocolHandshakeResData>{
        status: STATUS_CODE.SUCCESS.PROTOCOL_HANDSHAKE_OK,
        version: ProtocolVersion.VERSION_1,
      },
      <InitTxReqData>{
        data: {},
        from: '',
        to: '',
      },
      <InitTxResData>{
        status: STATUS_CODE.SUCCESS.INIT_TX_OK,
        txData: {},
      },
      <HandoverTxReqData>{
        pubKey: '',
        txToken: '',
      },
      <HandoverTxResData>{
        status: STATUS_CODE.SUCCESS.HANDOVER_TX_OK,
      },
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
            (acc, _, i, arr) => {
              const nextMsg = acc(COMPLIANT_SINGLETIERTX_FLOW[i]);
              if (typeof nextMsg === undefined) {
                arr.splice(1);
                return () => undefined;
              }
              return tx.tryForwardWith(<Message<Record<string, unknown>>>nextMsg);
            },
            (data: Record<string, unknown>): Message<Record<string, unknown>> | undefined =>
              new ProtocolHandshakeReq(<ProtocolHandshakeReqData>data)
          );
      }).not.toThrow();
    });
  });
});
