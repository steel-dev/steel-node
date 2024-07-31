// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as PdfAPI from './pdf';

export class Pdf extends APIResource {
  create(body: PdfCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v1/sdk/pdf/', Core.maybeMultipartFormRequestOptions({ body, ...options }));
  }
}

export type PdfCreateResponse = unknown;

export interface PdfCreateParams {
  url: string;
}

export namespace Pdf {
  export import PdfCreateResponse = PdfAPI.PdfCreateResponse;
  export import PdfCreateParams = PdfAPI.PdfCreateParams;
}
