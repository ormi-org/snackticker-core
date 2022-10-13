import { IProtocol, ProtocolVersion } from "../typed/protocol.interface";
import { ISchema } from "../typed/schema/schema.interface";
import { SingleTierTransactionSchema } from "./schema/singleTierTransactionSchema";
import { SchemaV1 } from "./schema/schemaV1";

export class ProtocolV1 implements IProtocol {
  version: ProtocolVersion = ProtocolVersion.VERSION_1;
  schemas: Map<SchemaV1, ISchema<this>> = new Map(
    [
      [SchemaV1.SINGLE_TIER_TRANSACTION, new SingleTierTransactionSchema()]
    ]
  );
}

export * as MessageV1Module from './schema/message/index.module';