// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { type Response } from '../../_shims/index';

export class Files extends APIResource {
  /**
   * Get details of a file in a session
   */
  retrieve(sessionId: string, fileId: string, options?: Core.RequestOptions): Core.APIPromise<File> {
    return this._client.get(`/v1/sessions/${sessionId}/files/${fileId}`, options);
  }

  /**
   * List all files from the session in descending order.
   */
  list(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<Fileslist> {
    return this._client.get(`/v1/sessions/${sessionId}/files`, options);
  }

  /**
   * Delete a file from a session
   */
  delete(
    sessionId: string,
    fileId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileDeleteResponse> {
    return this._client.delete(`/v1/sessions/${sessionId}/files/${fileId}`, options);
  }

  /**
   * Delete all files from a session
   */
  deleteAll(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<FileDeleteAllResponse> {
    return this._client.delete(`/v1/sessions/${sessionId}/files`, options);
  }

  /**
   * Download a file from a session
   */
  download(sessionId: string, fileId: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/v1/sessions/${sessionId}/files/${fileId}/download`, {
      ...options,
      headers: { Accept: 'application/octet-stream', ...options?.headers },
      __binaryResponse: true,
    });
  }

  /**
   * Uploads a file to a session via `multipart/form-data` with form fields: `file`
   * (binary data, prioritized), `fileUrl` (remote URL), `name` (custom filename),
   * and `metadata` (custom key-value pairs).
   */
  upload(sessionId: string, body?: FileUploadParams, options?: Core.RequestOptions): Core.APIPromise<File>;
  upload(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<File>;
  upload(
    sessionId: string,
    body: FileUploadParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<File> {
    if (isRequestOptions(body)) {
      return this.upload(sessionId, {}, body);
    }
    return this._client.post(
      `/v1/sessions/${sessionId}/files`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface File {
  /**
   * Unique identifier for the file
   */
  id: string;

  /**
   * Checksum or hash of the file content for integrity verification
   */
  checksum: string;

  /**
   * MIME type of the file
   */
  contentType: string;

  /**
   * Timestamp when the file was created
   */
  createdAt: string;

  /**
   * Name of the file
   */
  name: string;

  /**
   * Path to the file in the storage system
   */
  path: string;

  /**
   * Size of the file in bytes
   */
  size: number;

  /**
   * Timestamp when the file was last updated
   */
  updatedAt: string;

  /**
   * Custom metadata associated with the file
   */
  metadata?: Record<string, unknown>;
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
     * Unique identifier for the file
     */
    id: string;

    /**
     * Checksum or hash of the file content for integrity verification
     */
    checksum: string;

    /**
     * MIME type of the file
     */
    contentType: string;

    /**
     * Timestamp when the file was created
     */
    createdAt: string;

    /**
     * Name of the file
     */
    name: string;

    /**
     * Path to the file in the storage system
     */
    path: string;

    /**
     * Size of the file in bytes
     */
    size: number;

    /**
     * Timestamp when the file was last updated
     */
    updatedAt: string;

    /**
     * Custom metadata associated with the file
     */
    metadata?: Record<string, unknown>;
  }
}

export interface FileDeleteResponse {
  /**
   * Unique identifier for the file
   */
  id: string;

  /**
   * Checksum or hash of the file content for integrity verification
   */
  checksum: string;

  /**
   * MIME type of the file
   */
  contentType: string;

  /**
   * Timestamp when the file was created
   */
  createdAt: string;

  /**
   * Name of the file
   */
  name: string;

  /**
   * Path to the file in the storage system
   */
  path: string;

  /**
   * Size of the file in bytes
   */
  size: number;

  /**
   * Indicates if the file deletion was successful
   */
  success: boolean;

  /**
   * Timestamp when the file was last updated
   */
  updatedAt: string;

  /**
   * Custom metadata associated with the file
   */
  metadata?: Record<string, unknown>;
}

export interface FileDeleteAllResponse {
  /**
   * Array of deleted files
   */
  data: Array<FileDeleteAllResponse.Data>;
}

export namespace FileDeleteAllResponse {
  export interface Data {
    /**
     * Unique identifier for the file
     */
    id: string;

    /**
     * Checksum or hash of the file content for integrity verification
     */
    checksum: string;

    /**
     * MIME type of the file
     */
    contentType: string;

    /**
     * Timestamp when the file was created
     */
    createdAt: string;

    /**
     * Name of the file
     */
    name: string;

    /**
     * Path to the file in the storage system
     */
    path: string;

    /**
     * Size of the file in bytes
     */
    size: number;

    /**
     * Indicates if the file deletion was successful
     */
    success: boolean;

    /**
     * Timestamp when the file was last updated
     */
    updatedAt: string;

    /**
     * Custom metadata associated with the file
     */
    metadata?: Record<string, unknown>;
  }
}

export interface FileUploadParams {
  /**
   * The file to upload (binary)
   */
  file?: unknown;

  /**
   * Public URL to download file from
   */
  fileUrl?: string;

  /**
   * Custom metadata to associate with the file
   */
  metadata?: Record<string, unknown>;

  /**
   * Filename to use in session
   */
  name?: string;
}

export declare namespace Files {
  export {
    type File as File,
    type Fileslist as Fileslist,
    type FileDeleteResponse as FileDeleteResponse,
    type FileDeleteAllResponse as FileDeleteAllResponse,
    type FileUploadParams as FileUploadParams,
  };
}
