import { Message } from '@typed';
import {
  HandoverTxReq,
  HandoverTxReqData,
  HandoverTxRes,
  HandoverTxResData,
  InitTxReq,
  InitTxReqData,
  InitTxRes,
  InitTxResData,
  ProtocolHandshakeReq,
  ProtocolHandshakeReqData,
  ProtocolHandshakeRes,
  ProtocolHandshakeResData,
  TxEndSignal,
  TxEndSignalData,
} from './message';
import { ProtocolV1Schema, SchemaV1 } from './schemaV1';

export class SingleTierTransactionSchema extends ProtocolV1Schema {
  override id = SchemaV1.SINGLE_TIER_TRANSACTION;
  override descriptor =
    'a single tier transaction between a human-controlled device and a virtual wallet(/pool)';
  override flow = new Array<
    [
      string,
      (data: Record<string, unknown>) => Message<Record<string, unknown>>
    ]
  >(
    [
      ProtocolHandshakeReq.name,
      (data) => new ProtocolHandshakeReq(<ProtocolHandshakeReqData>data),
    ],
    [
      ProtocolHandshakeRes.name,
      (data) => new ProtocolHandshakeRes(<ProtocolHandshakeResData>data),
    ],
    [InitTxReq.name, (data) => new InitTxReq(<InitTxReqData>data)],
    [InitTxRes.name, (data) => new InitTxRes(<InitTxResData>data)],
    [HandoverTxReq.name, (data) => new HandoverTxReq(<HandoverTxReqData>data)],
    [HandoverTxRes.name, (data) => new HandoverTxRes(<HandoverTxResData>data)],
    [TxEndSignal.name, (data) => new TxEndSignal(<TxEndSignalData>data)]
  );
}
