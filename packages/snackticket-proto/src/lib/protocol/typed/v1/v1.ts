import { Protocol, ProtocolVersion } from "../../protocol.interface";
import { Schema } from "../../schema/schema.interface";
import { SingleTierTransactionSchema } from "./schema/typed/SingleTierTransactionSchema";
import { SchemaV1 } from "./schema/v1";

export class v1 implements Protocol {
  version: ProtocolVersion = ProtocolVersion.VERSION_1;
  schemas: Map<SchemaV1, Schema> = new Map(
    [
      [SchemaV1.SINGLE_TIER_TRANSACTION, new SingleTierTransactionSchema()]
    ]
  );
}

export * as MessageV1Module from './schema/message/message.module';