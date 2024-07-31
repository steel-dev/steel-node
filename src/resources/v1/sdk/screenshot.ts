// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ScreenshotAPI from './screenshot';

export class Screenshot extends APIResource {
  create(body: ScreenshotCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post(
      '/v1/sdk/screenshot/',
      Core.maybeMultipartFormRequestOptions({ body, ...options }),
    );
  }
}

export type ScreenshotCreateResponse = unknown;

export interface ScreenshotCreateParams {
  url: string;
}

export namespace Screenshot {
  export import ScreenshotCreateResponse = ScreenshotAPI.ScreenshotCreateResponse;
  export import ScreenshotCreateParams = ScreenshotAPI.ScreenshotCreateParams;
}
