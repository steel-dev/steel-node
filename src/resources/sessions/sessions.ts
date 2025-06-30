// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as FilesAPI from './files';
import { FileUploadParams, Files } from './files';
import { SessionsCursor, type SessionsCursorParams } from '../../pagination';

export class Sessions extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * Creates a new session with the provided configuration.
   */
  create(body?: SessionCreateParams, options?: Core.RequestOptions): Core.APIPromise<Session>;
  create(options?: Core.RequestOptions): Core.APIPromise<Session>;
  create(
    body: SessionCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/v1/sessions', { body, ...options });
  }

  /**
   * Retrieves details of a specific session by ID.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Session> {
    return this._client.get(`/v1/sessions/${id}`, options);
  }

  /**
   * Fetches all active sessions for the current organization.
   */
  list(
    query?: SessionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionslistSessionsSessionsCursor, Sessionslist.Session>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionslistSessionsSessionsCursor, Sessionslist.Session>;
  list(
    query: SessionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionslistSessionsSessionsCursor, Sessionslist.Session> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/sessions', SessionslistSessionsSessionsCursor, { query, ...options });
  }

  /**
   * Fetches the context data of a specific session.
   */
  context(id: string, options?: Core.RequestOptions): Core.APIPromise<SessionContext> {
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

  /**
   * Releases all active sessions for the current organization.
   */
  releaseAll(
    body?: SessionReleaseAllParams | null | undefined,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionReleaseAllResponse> {
    return this._client.post('/v1/sessions/release', { body, ...options });
  }
}

export class SessionslistSessionsSessionsCursor extends SessionsCursor<Sessionslist.Session> {}

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
   * Source of the proxy used for the session
   */
  proxySource: 'steel' | 'external' | null;

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
   * Indicates if advanced stealth mode is enabled
   */
  advancedStealth?: boolean;

  /**
   * Indicates if Selenium is used in the session
   */
  isSelenium?: boolean;

  /**
   * The region where the session was created
   */
  region?: 'lax' | 'ord' | 'iad' | 'bom' | 'scl' | 'fra' | 'hkg';

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
  indexedDB?: { [key: string]: Array<SessionContext.IndexedDB> };

  /**
   * Domain-specific localStorage items to initialize in the session
   */
  localStorage?: { [key: string]: { [key: string]: string } };

  /**
   * Domain-specific sessionStorage items to initialize in the session
   */
  sessionStorage?: { [key: string]: { [key: string]: string } };
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
     * Source of the proxy used for the session
     */
    proxySource: 'steel' | 'external' | null;

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
     * Indicates if advanced stealth mode is enabled
     */
    advancedStealth?: boolean;

    /**
     * Indicates if Selenium is used in the session
     */
    isSelenium?: boolean;

    /**
     * The region where the session was created
     */
    region?: 'lax' | 'ord' | 'iad' | 'bom' | 'scl' | 'fra' | 'hkg';

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

/**
 * Response for releasing multiple sessions.
 */
export interface SessionReleaseAllResponse {
  /**
   * Details about the outcome of the release operation
   */
  message: string;

  /**
   * Indicates if the sessions were successfully released
   */
  success: boolean;
}

export interface SessionCreateParams {
  /**
   * Enable advanced stealth mode for the browser session. Default is false.
   */
  advancedStealth?: boolean;

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
   * The desired region for the session to be started in
   */
  region?: 'lax' | 'ord' | 'iad' | 'bom' | 'scl' | 'fra' | 'hkg';

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
   * Proxy configuration for the session. Can be a boolean or array of proxy
   * configurations
   */
  useProxy?: unknown | boolean | SessionCreateParams.Geolocation | SessionCreateParams.Server;

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
    indexedDB?: { [key: string]: Array<SessionContext.IndexedDB> };

    /**
     * Domain-specific localStorage items to initialize in the session
     */
    localStorage?: { [key: string]: { [key: string]: string } };

    /**
     * Domain-specific sessionStorage items to initialize in the session
     */
    sessionStorage?: { [key: string]: { [key: string]: string } };
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

  export interface Geolocation {
    /**
     * Geographic location for the proxy
     */
    geolocation: Geolocation.Geolocation;
  }

  export namespace Geolocation {
    /**
     * Geographic location for the proxy
     */
    export interface Geolocation {
      /**
       * Country code (e.g., 'US', 'GB', 'DE') - ISO 3166-1 alpha-2
       */
      country:
        | 'US'
        | 'CA'
        | 'MX'
        | 'GB'
        | 'DE'
        | 'FR'
        | 'IT'
        | 'ES'
        | 'PL'
        | 'NL'
        | 'SE'
        | 'NO'
        | 'DK'
        | 'FI'
        | 'CH'
        | 'AT'
        | 'BE'
        | 'IE'
        | 'PT'
        | 'GR'
        | 'CZ'
        | 'HU'
        | 'RO'
        | 'BG'
        | 'SK'
        | 'SI'
        | 'HR'
        | 'EE'
        | 'LV'
        | 'LT'
        | 'LU'
        | 'MT'
        | 'CY'
        | 'IS'
        | 'LI'
        | 'MC'
        | 'SM'
        | 'VA'
        | 'JP'
        | 'KR'
        | 'CN'
        | 'HK'
        | 'TW'
        | 'SG'
        | 'AU'
        | 'NZ'
        | 'IN'
        | 'TH'
        | 'MY'
        | 'PH'
        | 'ID'
        | 'VN'
        | 'AF'
        | 'BD'
        | 'BN'
        | 'KH'
        | 'LA'
        | 'LK'
        | 'MM'
        | 'NP'
        | 'PK'
        | 'FJ'
        | 'PG'
        | 'AE'
        | 'SA'
        | 'IL'
        | 'TR'
        | 'IR'
        | 'IQ'
        | 'JO'
        | 'KW'
        | 'LB'
        | 'OM'
        | 'QA'
        | 'BH'
        | 'YE'
        | 'SY'
        | 'ZA'
        | 'EG'
        | 'MA'
        | 'NG'
        | 'KE'
        | 'DZ'
        | 'AO'
        | 'BW'
        | 'ET'
        | 'GH'
        | 'CI'
        | 'LY'
        | 'MZ'
        | 'RW'
        | 'SN'
        | 'TN'
        | 'UG'
        | 'ZM'
        | 'ZW'
        | 'TZ'
        | 'MU'
        | 'SC'
        | 'BR'
        | 'AR'
        | 'CL'
        | 'CO'
        | 'PE'
        | 'VE'
        | 'EC'
        | 'UY'
        | 'PY'
        | 'BO'
        | 'CR'
        | 'CU'
        | 'DO'
        | 'GT'
        | 'HN'
        | 'JM'
        | 'NI'
        | 'PA'
        | 'SV'
        | 'TT'
        | 'BB'
        | 'BZ'
        | 'GY'
        | 'SR'
        | 'RU'
        | 'UA'
        | 'BY'
        | 'KZ'
        | 'UZ'
        | 'AZ'
        | 'GE'
        | 'AM'
        | 'MD'
        | 'MK'
        | 'AL'
        | 'BA'
        | 'RS'
        | 'ME'
        | 'XK'
        | 'MN'
        | 'KG'
        | 'TJ'
        | 'TM';

      /**
       * City name (e.g., 'NEW_YORK', 'LOS_ANGELES')
       */
      city?: string;

      /**
       * State code (e.g., 'NY', 'CA') - US states only
       */
      state?:
        | 'AL'
        | 'AK'
        | 'AZ'
        | 'AR'
        | 'CA'
        | 'CO'
        | 'CT'
        | 'DE'
        | 'FL'
        | 'GA'
        | 'HI'
        | 'ID'
        | 'IL'
        | 'IN'
        | 'IA'
        | 'KS'
        | 'KY'
        | 'LA'
        | 'ME'
        | 'MD'
        | 'MA'
        | 'MI'
        | 'MN'
        | 'MS'
        | 'MO'
        | 'MT'
        | 'NE'
        | 'NV'
        | 'NH'
        | 'NJ'
        | 'NM'
        | 'NY'
        | 'NC'
        | 'ND'
        | 'OH'
        | 'OK'
        | 'OR'
        | 'PA'
        | 'RI'
        | 'SC'
        | 'SD'
        | 'TN'
        | 'TX'
        | 'UT'
        | 'VT'
        | 'VA'
        | 'WA'
        | 'WV'
        | 'WI'
        | 'WY'
        | 'DC'
        | 'PR'
        | 'GU'
        | 'VI';
    }
  }

  export interface Server {
    /**
     * Proxy server URL
     */
    server: string;
  }
}

export interface SessionListParams extends SessionsCursorParams {
  /**
   * Filter sessions by current status
   */
  status?: 'live' | 'released' | 'failed';
}

export interface SessionReleaseParams {}

export interface SessionReleaseAllParams {}

Sessions.SessionslistSessionsSessionsCursor = SessionslistSessionsSessionsCursor;
Sessions.Files = Files;

export declare namespace Sessions {
  export {
    type Session as Session,
    type SessionContext as SessionContext,
    type Sessionslist as Sessionslist,
    type SessionEventsResponse as SessionEventsResponse,
    type SessionLiveDetailsResponse as SessionLiveDetailsResponse,
    type SessionReleaseResponse as SessionReleaseResponse,
    type SessionReleaseAllResponse as SessionReleaseAllResponse,
    SessionslistSessionsSessionsCursor as SessionslistSessionsSessionsCursor,
    type SessionCreateParams as SessionCreateParams,
    type SessionListParams as SessionListParams,
    type SessionReleaseParams as SessionReleaseParams,
    type SessionReleaseAllParams as SessionReleaseAllParams,
  };

  export { Files as Files, type FileUploadParams as FileUploadParams };
}
