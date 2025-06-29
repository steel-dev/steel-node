// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Credentials extends APIResource {
  /**
   * Encrypts and stores credentials for an origin
   */
  create(
    body: CredentialCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CredentialCreateResponse> {
    return this._client.post('/v1/credentials', { body, ...options });
  }

  /**
   * Encrypts and updates credentials for an origin
   */
  update(
    body?: CredentialUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CredentialUpdateResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<CredentialUpdateResponse>;
  update(
    body: CredentialUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CredentialUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update({}, body);
    }
    return this._client.put('/v1/credentials', { body, ...options });
  }

  /**
   * Fetches all credential metadata for the current organization.
   */
  list(query?: CredentialListParams, options?: Core.RequestOptions): Core.APIPromise<CredentialListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CredentialListResponse>;
  list(
    query: CredentialListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CredentialListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/credentials', { query, ...options });
  }

  /**
   * Deletes encrypted credentials from the database
   */
  delete(
    body: CredentialDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CredentialDeleteResponse> {
    return this._client.delete('/v1/credentials', { body, ...options });
  }
}

export interface CredentialCreateResponse {
  /**
   * Date and time the credential was created
   */
  createdAt: string;

  /**
   * Date and time the credential was last updated
   */
  updatedAt: string;

  /**
   * Label for the credential
   */
  label?: string;

  /**
   * The namespace the credential is stored against. Defaults to "default".
   */
  namespace?: string;

  /**
   * Website origin the credential is for
   */
  origin?: string;
}

export interface CredentialUpdateResponse {
  /**
   * Date and time the credential was created
   */
  createdAt: string;

  /**
   * Date and time the credential was last updated
   */
  updatedAt: string;

  /**
   * Label for the credential
   */
  label?: string;

  /**
   * The namespace the credential is stored against. Defaults to "default".
   */
  namespace?: string;

  /**
   * Website origin the credential is for
   */
  origin?: string;
}

export interface CredentialListResponse {
  credentials: Array<CredentialListResponse.Credential>;
}

export namespace CredentialListResponse {
  export interface Credential {
    /**
     * Date and time the credential was created
     */
    createdAt: string;

    /**
     * Date and time the credential was last updated
     */
    updatedAt: string;

    /**
     * Label for the credential
     */
    label?: string;

    /**
     * The namespace the credential is stored against. Defaults to "default".
     */
    namespace?: string;

    /**
     * Website origin the credential is for
     */
    origin?: string;
  }
}

export interface CredentialDeleteResponse {
  success: boolean;
}

export interface CredentialCreateParams {
  /**
   * Value for the credential
   */
  value: { [key: string]: string };

  /**
   * Label for the credential
   */
  label?: string;

  /**
   * The namespace the credential is stored against. Defaults to "default".
   */
  namespace?: string;

  /**
   * Website origin the credential is for
   */
  origin?: string;
}

export interface CredentialUpdateParams {
  /**
   * Label for the credential
   */
  label?: string;

  /**
   * The namespace the credential is stored against. Defaults to "default".
   */
  namespace?: string;

  /**
   * Website origin the credential is for
   */
  origin?: string;

  /**
   * Value for the credential
   */
  value?: { [key: string]: string };
}

export interface CredentialListParams {
  /**
   * namespace credential is stored against
   */
  namespace?: string;

  /**
   * website origin the credential is for
   */
  origin?: string;
}

export interface CredentialDeleteParams {
  /**
   * Website origin the credential is for
   */
  origin: string;

  /**
   * The namespace the credential is stored against. Defaults to "default".
   */
  namespace?: string;
}

export declare namespace Credentials {
  export {
    type CredentialCreateResponse as CredentialCreateResponse,
    type CredentialUpdateResponse as CredentialUpdateResponse,
    type CredentialListResponse as CredentialListResponse,
    type CredentialDeleteResponse as CredentialDeleteResponse,
    type CredentialCreateParams as CredentialCreateParams,
    type CredentialUpdateParams as CredentialUpdateParams,
    type CredentialListParams as CredentialListParams,
    type CredentialDeleteParams as CredentialDeleteParams,
  };
}
