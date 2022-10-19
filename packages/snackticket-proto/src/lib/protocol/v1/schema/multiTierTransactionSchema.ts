import { Message } from '@typed/schema/message';
import {
  CommitTxReq,
  CommitTxReqData,
  InitTxReq,
  InitTxReqData,
  InitTxRes,
  InitTxResData,
  ProtocolHandshakeReq,
  ProtocolHandshakeRes,
  ProtocolHandshakeResData,
  TxCommitEvent,
  TxCommitEventData,
} from './message';
import { ProtocolV1Schema, SchemaV1 } from './schemaV1';

export class MultiTierTransactionSchema extends ProtocolV1Schema {
  override id = SchemaV1.MULTI_TIER_TRANSACTION;
  override descriptor =
    'a multi tier transaction between two human-controlled devices or between a HCD and a virtual wallet(/pool)';
  override flow = new Array<
    [
      string,
      (data: Record<string, unknown>) => Message<Record<string, unknown>> | undefined
    ]
  >(
    [
      ProtocolHandshakeReq.name,
      (data) => new ProtocolHandshakeRes(<ProtocolHandshakeResData>data),
    ],
    [
      ProtocolHandshakeRes.name,
      (data) => new InitTxReq(<InitTxReqData>data),
    ],
    [InitTxReq.name, (data) => new InitTxRes(<InitTxResData>data)],
    [InitTxRes.name, (data) => new CommitTxReq(<CommitTxReqData>data)],
    [CommitTxReq.name, (data) => new TxCommitEvent(<TxCommitEventData>data)],
    [TxCommitEvent.name, () => undefined]
  );
}
