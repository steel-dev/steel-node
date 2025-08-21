// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Extensions extends APIResource {
  /**
   * Update a Chrome extension (.zip/.crx file) for the organization
   */
  update(extensionId: string, options?: Core.RequestOptions): Core.APIPromise<ExtensionUpdateResponse> {
    return this._client.put(`/v1/extensions/${extensionId}`, options);
  }

  /**
   * List all extensions for the organization
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ExtensionListResponse> {
    return this._client.get('/v1/extensions', options);
  }

  /**
   * Delete an extension by ID
   */
  delete(extensionId: string, options?: Core.RequestOptions): Core.APIPromise<ExtensionDeleteResponse> {
    return this._client.delete(`/v1/extensions/${extensionId}`, options);
  }

  /**
   * Delete all extensions for the organization
   */
  deleteAll(options?: Core.RequestOptions): Core.APIPromise<ExtensionDeleteAllResponse> {
    return this._client.delete('/v1/extensions', options);
  }

  /**
   * Download an extension file by extension ID
   */
  download(extensionId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/v1/extensions/${extensionId}`, options);
  }

  /**
   * Upload a Chrome extension (.zip/.crx file) for the organization
   */
  upload(options?: Core.RequestOptions): Core.APIPromise<ExtensionUploadResponse> {
    return this._client.post('/v1/extensions', options);
  }
}

export interface ExtensionUpdateResponse {
  /**
   * Unique extension identifier (e.g., ext_12345)
   */
  id: string;

  /**
   * Creation timestamp
   */
  createdAt: string;

  /**
   * Extension name
   */
  name: string;

  /**
   * Last update timestamp
   */
  updatedAt: string;
}

/**
 * Response containing a list of extensions for the organization
 */
export interface ExtensionListResponse {
  /**
   * Total number of extensions
   */
  count: number;

  /**
   * List of extensions for the organization
   */
  extensions: Array<ExtensionListResponse.Extension>;
}

export namespace ExtensionListResponse {
  export interface Extension {
    /**
     * Unique extension identifier (e.g., ext_12345)
     */
    id: string;

    /**
     * Creation timestamp
     */
    createdAt: string;

    /**
     * Extension name
     */
    name: string;

    /**
     * Last update timestamp
     */
    updatedAt: string;
  }
}

export interface ExtensionDeleteResponse {
  message: string;
}

export interface ExtensionDeleteAllResponse {
  message: string;
}

/**
 * Extension zip file
 */
export type ExtensionDownloadResponse = Core.Uploadable;

export interface ExtensionUploadResponse {
  /**
   * Unique extension identifier (e.g., ext_12345)
   */
  id: string;

  /**
   * Creation timestamp
   */
  createdAt: string;

  /**
   * Extension name
   */
  name: string;

  /**
   * Last update timestamp
   */
  updatedAt: string;
}

export declare namespace Extensions {
  export {
    type ExtensionUpdateResponse as ExtensionUpdateResponse,
    type ExtensionListResponse as ExtensionListResponse,
    type ExtensionDeleteResponse as ExtensionDeleteResponse,
    type ExtensionDeleteAllResponse as ExtensionDeleteAllResponse,
    type ExtensionDownloadResponse as ExtensionDownloadResponse,
    type ExtensionUploadResponse as ExtensionUploadResponse,
  };
}
