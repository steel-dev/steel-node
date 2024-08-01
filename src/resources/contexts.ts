// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ContextsAPI from './contexts';

export class Contexts extends APIResource {
  /**
   * Create a new browser context with specified settings
   */
  create(body?: ContextCreateParams, options?: Core.RequestOptions): Core.APIPromise<CreateContextResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<CreateContextResponse>;
  create(
    body: ContextCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateContextResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/v1/context', { body, ...options });
  }

  /**
   * Retrieve details of a specific saved browser context
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<GetContextResponse> {
    return this._client.get(`/v1/context/${id}`, options);
  }

  /**
   * Retrieve a list of all saved browser contexts
   */
  list(options?: Core.RequestOptions): Core.APIPromise<GetContextsResponse> {
    return this._client.get('/v1/context', options);
  }

  /**
   * Delete a specific saved browser context
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<ContextDeleteResponse> {
    return this._client.delete(`/v1/context/${id}`, options);
  }
}

export interface CreateContextResponse {
  /**
   * Unique identifier for the created context
   */
  id: string;
}

export interface GetContextResponse {
  /**
   * Unique identifier for the context
   */
  id: string;

  details: GetContextResponse.Details;
}

export namespace GetContextResponse {
  export interface Details {
    /**
     * Proxy settings for the context
     */
    proxy?: string;
  }
}

export interface GetContextsResponse {
  /**
   * List of available context IDs
   */
  contexts: Array<string>;
}

export interface ContextDeleteResponse {
  /**
   * A message indicating the result of the delete operation
   */
  message: string;
}

export interface ContextCreateParams {
  /**
   * Proxy settings for the context
   */
  proxy?: string;
}

export namespace Contexts {
  export import CreateContextResponse = ContextsAPI.CreateContextResponse;
  export import GetContextResponse = ContextsAPI.GetContextResponse;
  export import GetContextsResponse = ContextsAPI.GetContextsResponse;
  export import ContextDeleteResponse = ContextsAPI.ContextDeleteResponse;
  export import ContextCreateParams = ContextsAPI.ContextCreateParams;
}
