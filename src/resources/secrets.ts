// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Secrets extends APIResource {
  /**
   * Create a Secret
   */
  create(body: SecretCreateParams, options?: Core.RequestOptions): Core.APIPromise<Secret> {
    return this._client.post('/v1/secrets', { body, ...options });
  }

  /**
   * Get Secret metadata
   */
  retrieve(id: string, query?: SecretRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Secret>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Secret>;
  retrieve(
    id: string,
    query: SecretRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Secret> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/v1/secrets/${id}`, { query, ...options });
  }

  /**
   * Rename or rotate a Secret
   */
  update(id: string, params: SecretUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Secret> {
    const { projectId, ...body } = params;
    return this._client.patch(`/v1/secrets/${id}`, { query: { projectId }, body, ...options });
  }

  /**
   * List Secrets
   */
  list(query?: SecretListParams, options?: Core.RequestOptions): Core.APIPromise<SecretList>;
  list(options?: Core.RequestOptions): Core.APIPromise<SecretList>;
  list(
    query: SecretListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecretList> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/secrets', { query, ...options });
  }

  /**
   * Delete a Secret
   */
  delete(id: string, params?: SecretDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    id: string,
    params: SecretDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { projectId } = params;
    return this._client.delete(`/v1/secrets/${id}`, {
      query: { projectId },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface Secret {
  id: string;

  createdAt: string;

  name: string;

  source: 'steel';

  updatedAt: string;

  version: number;
}

export interface SecretList {
  secrets: Array<SecretList.Secret>;
}

export namespace SecretList {
  export interface Secret {
    id: string;

    createdAt: string;

    name: string;

    source: 'steel';

    updatedAt: string;

    version: number;
  }
}

export interface SecretCreateParams {
  name: string;

  value: string;

  projectId?: string;
}

export interface SecretRetrieveParams {
  projectId?: string;
}

export type SecretUpdateParams = SecretUpdateParams.Variant0 | SecretUpdateParams.Variant1;

export declare namespace SecretUpdateParams {
  export interface Variant0 {
    /**
     * Body param
     */
    name: string;

    /**
     * Query param
     */
    projectId?: string;

    /**
     * Body param
     */
    value?: string;
  }

  export interface Variant1 {
    /**
     * Body param
     */
    value: string;

    /**
     * Query param
     */
    projectId?: string;

    /**
     * Body param
     */
    name?: string;
  }
}

export interface SecretListParams {
  projectId?: string;
}

export interface SecretDeleteParams {
  projectId?: string;
}

export declare namespace Secrets {
  export {
    type Secret as Secret,
    type SecretList as SecretList,
    type SecretCreateParams as SecretCreateParams,
    type SecretRetrieveParams as SecretRetrieveParams,
    type SecretUpdateParams as SecretUpdateParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteParams as SecretDeleteParams,
  };
}
