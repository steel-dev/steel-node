// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as SteelContextAPI from './steel-context';

export class SteelContext extends APIResource {
  /**
   * Create a new browser context with specified settings
   */
  createContext(
    body?: SteelContextCreateContextParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SteelContextCreateContextResponse>;
  createContext(options?: Core.RequestOptions): Core.APIPromise<SteelContextCreateContextResponse>;
  createContext(
    body: SteelContextCreateContextParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SteelContextCreateContextResponse> {
    if (isRequestOptions(body)) {
      return this.createContext({}, body);
    }
    return this._client.post('/v1/context', { body, ...options });
  }

  /**
   * Delete a specific saved browser context
   */
  deleteContext(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SteelContextDeleteContextResponse> {
    return this._client.delete(`/v1/context/${id}`, options);
  }

  /**
   * Retrieve details of a specific saved browser context
   */
  getContextData(id: string, options?: Core.RequestOptions): Core.APIPromise<Context> {
    return this._client.get(`/v1/context/${id}`, options);
  }
}

export interface Context {
  /**
   * Unique identifier for the context
   */
  id: string;

  details: Context.Details;
}

export namespace Context {
  export interface Details {
    /**
     * Proxy settings for the context
     */
    proxy?: string;
  }
}

export interface SteelContextCreateContextResponse {
  /**
   * Unique identifier for the created context
   */
  id: string;
}

export interface SteelContextDeleteContextResponse {
  /**
   * A message indicating the result of the delete operation
   */
  message: string;
}

export interface SteelContextCreateContextParams {
  /**
   * Proxy settings for the context
   */
  proxy?: string;
}

export namespace SteelContext {
  export import Context = SteelContextAPI.Context;
  export import SteelContextCreateContextResponse = SteelContextAPI.SteelContextCreateContextResponse;
  export import SteelContextDeleteContextResponse = SteelContextAPI.SteelContextDeleteContextResponse;
  export import SteelContextCreateContextParams = SteelContextAPI.SteelContextCreateContextParams;
}
