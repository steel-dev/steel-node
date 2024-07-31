// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as ContextAPI from './context';

export class ContextResource extends APIResource {
  create(body?: ContextCreateParams, options?: Core.RequestOptions): Core.APIPromise<Context>;
  create(options?: Core.RequestOptions): Core.APIPromise<Context>;
  create(
    body: ContextCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Context> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/v1/sdk/context/', Core.maybeMultipartFormRequestOptions({ body, ...options }));
  }

  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Context> {
    return this._client.get(`/v1/sdk/context/${id}/`, options);
  }

  update(id: string, body?: ContextUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Context>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<Context>;
  update(
    id: string,
    body: ContextUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Context> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(
      `/v1/sdk/context/${id}/`,
      Core.maybeMultipartFormRequestOptions({ body, ...options }),
    );
  }

  list(options?: Core.RequestOptions): Core.APIPromise<ContextListResponse> {
    return this._client.get('/v1/sdk/context/', options);
  }

  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/sdk/context/${id}/`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface Context {
  id: string;

  proxy?: string | null;
}

export type ContextListResponse = Array<Context>;

export interface ContextCreateParams {
  proxy?: string;
}

export interface ContextUpdateParams {
  proxy?: string | null;
}

export namespace ContextResource {
  export import Context = ContextAPI.Context;
  export import ContextListResponse = ContextAPI.ContextListResponse;
  export import ContextCreateParams = ContextAPI.ContextCreateParams;
  export import ContextUpdateParams = ContextAPI.ContextUpdateParams;
}
