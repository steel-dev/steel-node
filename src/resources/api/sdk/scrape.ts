// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ScrapeAPI from './scrape';

export class Scrape extends APIResource {
  create(body: ScrapeCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v1/sdk/scrape/', Core.maybeMultipartFormRequestOptions({ body, ...options }));
  }
}

export type ScrapeCreateResponse = unknown;

export interface ScrapeCreateParams {
  url: string;

  format?: Array<'html' | 'readability'>;
}

export namespace Scrape {
  export import ScrapeCreateResponse = ScrapeAPI.ScrapeCreateResponse;
  export import ScrapeCreateParams = ScrapeAPI.ScrapeCreateParams;
}
