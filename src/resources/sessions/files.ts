// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as FilesAPI from '../files';
import { type Response } from '../../_shims/index';

export class Files extends APIResource {
  /**
   * List all files from the session in descending order.
   */
  list(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<FilesAPI.Fileslist> {
    return this._client.get(`/v1/sessions/${sessionId}/files`, options);
  }

  /**
   * Delete a file from a session
   */
  delete(sessionId: string, path_: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/sessions/${sessionId}/files/${path_}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Delete all files from a session
   */
  deleteAll(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/sessions/${sessionId}/files`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Download a file from a session
   */
  download(sessionId: string, path_: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/v1/sessions/${sessionId}/files/${path_}`, {
      ...options,
      headers: { Accept: 'application/octet-stream', ...options?.headers },
      __binaryResponse: true,
    });
  }

  /**
   * Download all files from the session as a zip archive.
   */
  downloadArchive(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/v1/sessions/${sessionId}/files.zip`, {
      ...options,
      headers: { Accept: 'application/zip', ...options?.headers },
      __binaryResponse: true,
    });
  }

  /**
   * Uploads a file to a session via `multipart/form-data` with a `file` field that
   * accepts either binary data or a URL string to download from, and an optional
   * `path` field for the file storage path.
   */
  upload(
    sessionId: string,
    body?: FileUploadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilesAPI.File>;
  upload(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<FilesAPI.File>;
  upload(
    sessionId: string,
    body: FileUploadParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilesAPI.File> {
    if (isRequestOptions(body)) {
      return this.upload(sessionId, {}, body);
    }
    return this._client.post(
      `/v1/sessions/${sessionId}/files`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface FileUploadParams {
  /**
   * The file to upload (binary) or URL string to download from
   */
  file?: unknown;

  /**
   * Path to the file in the storage system
   */
  path?: string;
}

export declare namespace Files {
  export { type FileUploadParams as FileUploadParams };
}
