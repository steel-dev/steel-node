// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { type Record as BuiltinRecord } from '../core';
import * as CredentialsAPI from './credentials/credentials';
import { SessionslistSessionsSessionsCursor } from './credentials/credentials';
import { type SessionsCursorParams } from '../pagination';

export class Sessions extends APIResource {
  /**
   * Creates a new session with the provided configuration.
   */
  create(body?: SessionCreateParams, options?: Core.RequestOptions): Core.APIPromise<CredentialsAPI.Session>;
  create(options?: Core.RequestOptions): Core.APIPromise<CredentialsAPI.Session>;
  create(
    body: SessionCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CredentialsAPI.Session> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/v1/sessions', { body, ...options });
  }

  /**
   * Retrieves details of a specific session by ID.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<CredentialsAPI.Session> {
    return this._client.get(`/v1/sessions/${id}`, options);
  }

  /**
   * Fetches all active sessions for the current organization.
   */
  list(
    query?: SessionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionslistSessionsSessionsCursor, CredentialsAPI.Sessionslist.Session>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionslistSessionsSessionsCursor, CredentialsAPI.Sessionslist.Session>;
  list(
    query: SessionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionslistSessionsSessionsCursor, CredentialsAPI.Sessionslist.Session> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/sessions', SessionslistSessionsSessionsCursor, { query, ...options });
  }

  /**
   * Fetches the context data of a specific session.
   */
  context(id: string, options?: Core.RequestOptions): Core.APIPromise<CredentialsAPI.SessionContext> {
    return this._client.get(`/v1/sessions/${id}/context`, options);
  }

  /**
   * This endpoint allows you to get the recorded session events in the RRWeb format
   */
  events(id: string, options?: Core.RequestOptions): Core.APIPromise<SessionEventsResponse> {
    return this._client.get(`/v1/sessions/${id}/events`, options);
  }

  /**
   * Returns the live state of the session, including pages, tabs, and browser state
   */
  liveDetails(id: string, options?: Core.RequestOptions): Core.APIPromise<SessionLiveDetailsResponse> {
    return this._client.get(`/v1/sessions/${id}/live-details`, options);
  }

  /**
   * Releases a specific session by ID.
   */
  release(
    id: string,
    body?: SessionReleaseParams | null | undefined,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionReleaseResponse> {
    return this._client.post(`/v1/sessions/${id}/release`, { body, ...options });
  }
}

/**
 * Events for a browser session
 */
export type SessionEventsResponse = Array<unknown>;

export interface SessionLiveDetailsResponse {
  pages: Array<SessionLiveDetailsResponse.Page>;

  sessionViewerFullscreenUrl: string;

  sessionViewerUrl: string;

  wsUrl: string;
}

export namespace SessionLiveDetailsResponse {
  export interface Page {
    id: string;

    favicon: string | null;

    sessionViewerFullscreenUrl: string;

    sessionViewerUrl: string;

    title: string;

    url: string;
  }
}

/**
 * Response for releasing a single session.
 */
export interface SessionReleaseResponse {
  /**
   * Details about the outcome of the release operation
   */
  message: string;

  /**
   * Indicates if the session was successfully released
   */
  success: boolean;
}

export interface SessionCreateParams {
  /**
   * Block ads in the browser session. Default is false.
   */
  blockAds?: boolean;

  /**
   * Number of sessions to create concurrently (check your plan limit)
   */
  concurrency?: number;

  /**
   * Configuration for session credentials
   */
  credentials?: SessionCreateParams.Credentials;

  /**
   * Viewport and browser window dimensions for the session
   */
  dimensions?: SessionCreateParams.Dimensions;

  /**
   * Enable Selenium mode for the browser session (default is false). Use this when
   * you plan to connect to the browser session via Selenium.
   */
  isSelenium?: boolean;

  /**
   * The namespace the session should be created against. Defaults to "default".
   */
  namespace?: string;

  /**
   * Custom proxy URL for the browser session. Overrides useProxy, disabling
   * Steel-provided proxies in favor of your specified proxy. Format:
   * http(s)://username:password@hostname:port
   */
  proxyUrl?: string;

  /**
   * Session context data to be used in the created session. Sessions will start with
   * an empty context by default.
   */
  sessionContext?: SessionCreateParams.SessionContext;

  /**
   * Optional custom UUID for the session
   */
  sessionId?: string;

  /**
   * Enable automatic captcha solving. Default is false.
   */
  solveCaptcha?: boolean;

  /**
   * Session timeout duration in milliseconds. Default is 300000 (5 minutes).
   */
  timeout?: number;

  /**
   * Enable Steel-provided residential proxy usage for the browser session. Default
   * is false, which routes requests through datacenter proxies.
   */
  useProxy?: boolean;

  /**
   * Custom user agent string for the browser session
   */
  userAgent?: string;
}

export namespace SessionCreateParams {
  /**
   * Configuration for session credentials
   */
  export interface Credentials {
    autoSubmit?: boolean;

    blurFields?: boolean;

    exactOrigin?: boolean;
  }

  /**
   * Viewport and browser window dimensions for the session
   */
  export interface Dimensions {
    /**
     * Height of the session
     */
    height: number;

    /**
     * Width of the session
     */
    width: number;
  }

  /**
   * Session context data to be used in the created session. Sessions will start with
   * an empty context by default.
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
}

export interface SessionListParams extends SessionsCursorParams {
  /**
   * Filter sessions by current status
   */
  status?: 'live' | 'released' | 'failed';
}

export interface SessionReleaseParams {}

export declare namespace Sessions {
  export {
    type SessionEventsResponse as SessionEventsResponse,
    type SessionLiveDetailsResponse as SessionLiveDetailsResponse,
    type SessionReleaseResponse as SessionReleaseResponse,
    type SessionCreateParams as SessionCreateParams,
    type SessionListParams as SessionListParams,
    type SessionReleaseParams as SessionReleaseParams,
  };
}

export { SessionslistSessionsSessionsCursor };
