import { IProtocol, ProtocolVersion } from "@typed";
import { SingleTierTransactionSchema } from "./schema/singleTierTransactionSchema";
import { ProtocolV1Schema, SchemaV1 } from "./schema/schemaV1";
import { MultiTierTransactionSchema } from "./schema/multiTierTransactionSchema";

export class ProtocolV1 implements IProtocol {
  version: ProtocolVersion = ProtocolVersion.VERSION_1;
  schemas: Map<SchemaV1, ProtocolV1Schema> = new Map<SchemaV1, ProtocolV1Schema>([
    [SchemaV1.SINGLE_TIER_TRANSACTION, new SingleTierTransactionSchema()],
    [SchemaV1.MULTI_TIER_TRANSACTION, new MultiTierTransactionSchema()]
  ]);
}

export * as MessageV1Module from './schema/message';