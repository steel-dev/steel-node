// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class Files extends APIResource {
  /**
   * List all global files for the organization in descending order.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<Fileslist> {
    return this._client.get('/v1/files', options);
  }

  /**
   * Delete a file from global storage
   */
  delete(path_: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/files/${path_}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Download a file from global storage
   */
  download(path_: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/v1/files/${path_}`, {
      ...options,
      headers: { Accept: 'application/octet-stream', ...options?.headers },
      __binaryResponse: true,
    });
  }

  /**
   * Uploads a file to global storage via `multipart/form-data` with a `file` field
   * that accepts either binary data or a URL string to download from, and an
   * optional `path` field for the file storage path.
   */
  upload(body: FileUploadParams, options?: Core.RequestOptions): Core.APIPromise<File> {
    return this._client.post('/v1/files', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export interface File {
  /**
   * Timestamp when the file was created
   */
  lastModified: string;

  /**
   * Path to the file in the storage system
   */
  path: string;

  /**
   * Size of the file in bytes
   */
  size: number;
}

export interface Fileslist {
  /**
   * Array of files for the current page
   */
  data: Array<Fileslist.Data>;
}

export namespace Fileslist {
  export interface Data {
    /**
     * Timestamp when the file was created
     */
    lastModified: string;

    /**
     * Path to the file in the storage system
     */
    path: string;

    /**
     * Size of the file in bytes
     */
    size: number;
  }
}

export interface FileUploadParams {
  /**
   * The file to upload (binary) or URL string to download from
   */
  file: Core.Uploadable;

  /**
   * Path to the file in the storage system
   */
  path?: string;
}

export declare namespace Files {
  export { type File as File, type Fileslist as Fileslist, type FileUploadParams as FileUploadParams };
}
