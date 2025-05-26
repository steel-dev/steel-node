// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { type Record as BuiltinRecord } from '../../core';
import * as FilesAPI from './files';
import { File, FileDeleteAllResponse, FileDeleteResponse, FileUploadParams, Files, Fileslist } from './files';

export class Credentials extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

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

/**
 * Represents the data structure for a browser session, including its configuration
 * and status.
 */
export interface Session {
  /**
   * Unique identifier for the session
   */
  id: string;

  /**
   * Timestamp when the session started
   */
  createdAt: string;

  /**
   * Amount of credits consumed by the session
   */
  creditsUsed: number;

  /**
   * URL for debugging the session
   */
  debugUrl: string;

  /**
   * Viewport and browser window dimensions for the session
   */
  dimensions: Session.Dimensions;

  /**
   * Duration of the session in milliseconds
   */
  duration: number;

  /**
   * Number of events processed in the session
   */
  eventCount: number;

  /**
   * Amount of data transmitted through the proxy
   */
  proxyBytesUsed: number;

  /**
   * URL to view session details
   */
  sessionViewerUrl: string;

  /**
   * Status of the session
   */
  status: 'live' | 'released' | 'failed';

  /**
   * Session timeout duration in milliseconds
   */
  timeout: number;

  /**
   * URL for the session's WebSocket connection
   */
  websocketUrl: string;

  /**
   * Indicates if Selenium is used in the session
   */
  isSelenium?: boolean;

  /**
   * Proxy server used for the session
   */
  proxy?: string;

  /**
   * Indicates if captcha solving is enabled
   */
  solveCaptcha?: boolean;

  /**
   * User agent string used in the session
   */
  userAgent?: string;
}

export namespace Session {
  /**
   * Viewport and browser window dimensions for the session
   */
  export interface Dimensions {
    /**
     * Height of the browser window
     */
    height: number;

    /**
     * Width of the browser window
     */
    width: number;
  }
}

/**
 * Session context data returned from a browser session.
 */
export interface SessionContext {
  /**
   * Cookies to initialize in the session
   */
  cookies?: Array<SessionContext.Cookie>;

  /**
   * Domain-specific indexedDB items to initialize in the session
   */
  indexedDB?: BuiltinRecord<string, Array<SessionContext.IndexedDB>>;

  /**
   * Domain-specific localStorage items to initialize in the session
   */
  localStorage?: BuiltinRecord<string, BuiltinRecord<string, string>>;

  /**
   * Domain-specific sessionStorage items to initialize in the session
   */
  sessionStorage?: BuiltinRecord<string, BuiltinRecord<string, string>>;
}

export namespace SessionContext {
  export interface Cookie {
    /**
     * The name of the cookie
     */
    name: string;

    /**
     * The value of the cookie
     */
    value: string;

    /**
     * The domain of the cookie
     */
    domain?: string;

    /**
     * The expiration date of the cookie
     */
    expires?: number;

    /**
     * Whether the cookie is HTTP only
     */
    httpOnly?: boolean;

    /**
     * The partition key of the cookie
     */
    partitionKey?: Cookie.PartitionKey;

    /**
     * The path of the cookie
     */
    path?: string;

    /**
     * The priority of the cookie
     */
    priority?: 'Low' | 'Medium' | 'High';

    /**
     * Whether the cookie is a same party cookie
     */
    sameParty?: boolean;

    /**
     * The same site attribute of the cookie
     */
    sameSite?: 'Strict' | 'Lax' | 'None';

    /**
     * Whether the cookie is secure
     */
    secure?: boolean;

    /**
     * Whether the cookie is a session cookie
     */
    session?: boolean;

    /**
     * The size of the cookie
     */
    size?: number;

    /**
     * The source port of the cookie
     */
    sourcePort?: number;

    /**
     * The source scheme of the cookie
     */
    sourceScheme?: 'Unset' | 'NonSecure' | 'Secure';

    /**
     * The URL of the cookie
     */
    url?: string;
  }

  export namespace Cookie {
    /**
     * The partition key of the cookie
     */
    export interface PartitionKey {
      /**
       * Indicates if the cookie has any ancestors that are cross-site to the
       * topLevelSite.
       */
      hasCrossSiteAncestor: boolean;

      /**
       * The site of the top-level URL the browser was visiting at the start of the
       * request to the endpoint that set the cookie.
       */
      topLevelSite: string;
    }
  }

  export interface IndexedDB {
    id: number;

    data: Array<IndexedDB.Data>;

    name: string;
  }

  export namespace IndexedDB {
    export interface Data {
      id: number;

      name: string;

      records: Array<Data.Record>;
    }

    export namespace Data {
      export interface Record {
        blobFiles?: Array<Record.BlobFile>;

        key?: unknown;

        value?: unknown;
      }

      export namespace Record {
        export interface BlobFile {
          blobNumber: number;

          mimeType: string;

          size: number;

          filename?: string;

          lastModified?: string;

          path?: string;
        }
      }
    }
  }
}

/**
 * Response containing a list of browser sessions with pagination details.
 */
export interface Sessionslist {
  /**
   * List of browser sessions
   */
  sessions: Array<Sessionslist.Session>;
}

export namespace Sessionslist {
  /**
   * Represents the data structure for a browser session, including its configuration
   * and status.
   */
  export interface Session {
    /**
     * Unique identifier for the session
     */
    id: string;

    /**
     * Timestamp when the session started
     */
    createdAt: string;

    /**
     * Amount of credits consumed by the session
     */
    creditsUsed: number;

    /**
     * URL for debugging the session
     */
    debugUrl: string;

    /**
     * Viewport and browser window dimensions for the session
     */
    dimensions: Session.Dimensions;

    /**
     * Duration of the session in milliseconds
     */
    duration: number;

    /**
     * Number of events processed in the session
     */
    eventCount: number;

    /**
     * Amount of data transmitted through the proxy
     */
    proxyBytesUsed: number;

    /**
     * URL to view session details
     */
    sessionViewerUrl: string;

    /**
     * Status of the session
     */
    status: 'live' | 'released' | 'failed';

    /**
     * Session timeout duration in milliseconds
     */
    timeout: number;

    /**
     * URL for the session's WebSocket connection
     */
    websocketUrl: string;

    /**
     * Indicates if Selenium is used in the session
     */
    isSelenium?: boolean;

    /**
     * Proxy server used for the session
     */
    proxy?: string;

    /**
     * Indicates if captcha solving is enabled
     */
    solveCaptcha?: boolean;

    /**
     * User agent string used in the session
     */
    userAgent?: string;
  }

  export namespace Session {
    /**
     * Viewport and browser window dimensions for the session
     */
    export interface Dimensions {
      /**
       * Height of the browser window
       */
      height: number;

      /**
       * Width of the browser window
       */
      width: number;
    }
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
  value: BuiltinRecord<string, string>;

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
  value?: BuiltinRecord<string, string>;
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

Credentials.Files = Files;

export declare namespace Credentials {
  export {
    type Session as Session,
    type SessionContext as SessionContext,
    type Sessionslist as Sessionslist,
    type CredentialCreateResponse as CredentialCreateResponse,
    type CredentialUpdateResponse as CredentialUpdateResponse,
    type CredentialListResponse as CredentialListResponse,
    type CredentialDeleteResponse as CredentialDeleteResponse,
    type CredentialCreateParams as CredentialCreateParams,
    type CredentialUpdateParams as CredentialUpdateParams,
    type CredentialListParams as CredentialListParams,
    type CredentialDeleteParams as CredentialDeleteParams,
  };

  export {
    Files as Files,
    type File as File,
    type Fileslist as Fileslist,
    type FileDeleteResponse as FileDeleteResponse,
    type FileDeleteAllResponse as FileDeleteAllResponse,
    type FileUploadParams as FileUploadParams,
  };
}
