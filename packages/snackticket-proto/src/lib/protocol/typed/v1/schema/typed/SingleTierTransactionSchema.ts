import { Message } from "../../../../schema/message/message";
import { Schema } from "../../../../schema/schema.interface";
import { HandoverTxReq, HandoverTxRes } from "../message/HandoverTx";
import { InitTxReq, InitTxRes } from "../message/InitTx";
import { ProtocolHandshakeReq, ProtocolHandshakeRes } from "../message/ProtocolHandshake";
import { TxEndSignal } from "../message/TxEndSignal";
import { SchemaV1 } from "../v1";

export class SingleTierTransactionSchema implements Schema {
  id = SchemaV1.SINGLE_TIER_TRANSACTION;
  descriptor = "a single tier transaction between a human-controlled device and a virtual wallet(/pool)";

  evaluate(step: number, m: Message<unknown>): boolean {
    switch (step) {
      case 0:
        if (!(m instanceof ProtocolHandshakeReq)) return false;
        return true;
      case 1:
        if (!(m instanceof ProtocolHandshakeRes)) return false;
        return true;
      case 2:
        if (!(m instanceof InitTxReq)) return false;
        return true;
      case 3:
        if (!(m instanceof InitTxRes)) return false;
        return true;
      case 4:
        if (!(m instanceof HandoverTxReq)) return false;
        return true;
      case 5:
        if (!(m instanceof HandoverTxRes)) return false;
        return true;
      case 6:
        if (!(m instanceof TxEndSignal)) return false;
        return true;
      default:
        break;
    }
    return false;
  }

}