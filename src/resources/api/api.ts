// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SchemaAPI from './schema';
import * as SDKAPI from './sdk/sdk';

export class API extends APIResource {
  schema: SchemaAPI.Schema = new SchemaAPI.Schema(this._client);
  sdk: SDKAPI.SDK = new SDKAPI.SDK(this._client);
}

export namespace API {
  export import Schema = SchemaAPI.Schema;
  export import SchemaRetrieveResponse = SchemaAPI.SchemaRetrieveResponse;
  export import SchemaRetrieveParams = SchemaAPI.SchemaRetrieveParams;
  export import SDK = SDKAPI.SDK;
}
