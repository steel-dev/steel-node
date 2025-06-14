// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Steel } from './index';

export abstract class APIResource {
  protected _client: Steel;

  constructor(client: Steel) {
    this._client = client;
  }
}
