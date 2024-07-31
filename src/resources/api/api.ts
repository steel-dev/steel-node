// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SchemaAPI from './schema';

export class API extends APIResource {
  schema: SchemaAPI.Schema = new SchemaAPI.Schema(this._client);
}

export namespace API {
  export import Schema = SchemaAPI.Schema;
  export import SchemaRetrieveResponse = SchemaAPI.SchemaRetrieveResponse;
  export import SchemaRetrieveParams = SchemaAPI.SchemaRetrieveParams;
}
