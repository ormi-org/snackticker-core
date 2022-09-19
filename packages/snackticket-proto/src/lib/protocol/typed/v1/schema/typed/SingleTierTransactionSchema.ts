import { Message } from "../../../../schema/message/message";
import { Schema } from "../../../../schema/schema.interface";
import { ProtocolHandshakeReq, ProtocolHandshakeRes } from "../message/ProtocolHandshake";

export class SingleTierTransactionSchema implements Schema {
  descriptor = "a single tier transaction between a human-controlled device and a virtual wallet (pool)";

  evaluate(step: number, m: Message<unknown>): boolean {
    // TODO: implement schema
    switch (step) {
      case 0:
        if (!(m instanceof ProtocolHandshakeReq)) return false;
        return true;
      case 1:
        if (!(m instanceof ProtocolHandshakeRes)) return false;
        return true;
      default:
        break;
    }
    return false;
  }

}