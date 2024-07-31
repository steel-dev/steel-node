// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SDKAPI from './sdk/sdk';

export class V1 extends APIResource {
  sdk: SDKAPI.SDK = new SDKAPI.SDK(this._client);
}

export namespace V1 {
  export import SDK = SDKAPI.SDK;
}
