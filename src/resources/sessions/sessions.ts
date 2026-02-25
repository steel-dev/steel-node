// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CaptchasAPI from './captchas';
import {
  CaptchaSolveImageParams,
  CaptchaSolveImageResponse,
  CaptchaSolveParams,
  CaptchaSolveResponse,
  CaptchaStatusResponse,
  Captchas,
} from './captchas';
import * as FilesAPI from './files';
import { FileUploadParams, Files } from './files';
import { SessionsCursor, type SessionsCursorParams } from '../../pagination';

export class Sessions extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  captchas: CaptchasAPI.Captchas = new CaptchasAPI.Captchas(this._client);

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
   * Execute computer actions like mouse movements, clicks, keyboard input, and more
   */
  computer(
    sessionId: string,
    body: SessionComputerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionComputerResponse> {
    return this._client.post(`/v1/sessions/${sessionId}/computer`, { body, ...options });
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
  events(
    id: string,
    query?: SessionEventsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionEventsResponse>;
  events(id: string, options?: Core.RequestOptions): Core.APIPromise<SessionEventsResponse>;
  events(
    id: string,
    query: SessionEventsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionEventsResponse> {
    if (isRequestOptions(query)) {
      return this.events(id, {}, query);
    }
    return this._client.get(`/v1/sessions/${id}/events`, { query, ...options });
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
   * Bandwidth optimizations that were applied to the session.
   */
  optimizeBandwidth: Session.OptimizeBandwidth;

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
   * Configuration for the debug URL and session viewer. Controls interaction
   * capabilities and cursor visibility.
   */
  debugConfig?: Session.DebugConfig;

  /**
   * Device configuration for the session
   */
  deviceConfig?: Session.DeviceConfig;

  /**
   * Indicates if the session is headless or headful
   */
  headless?: boolean;

  /**
   * Indicates if Selenium is used in the session
   */
  isSelenium?: boolean;

  /**
   * This flag will persist the profile for the session.
   */
  persistProfile?: boolean;

  /**
   * The ID of the profile associated with the session
   */
  profileId?: string;

  /**
   * The region where the session was created
   */
  region?: 'lax' | 'ord' | 'iad' | 'scl' | 'fra' | 'nrt';

  /**
   * Indicates if captcha solving is enabled
   */
  solveCaptcha?: boolean;

  /**
   * Stealth configuration for the session
   */
  stealthConfig?: Session.StealthConfig;

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

  /**
   * Bandwidth optimizations that were applied to the session.
   */
  export interface OptimizeBandwidth {
    blockHosts?: Array<string>;

    blockImages?: boolean;

    blockMedia?: boolean;

    blockStylesheets?: boolean;

    blockUrlPatterns?: Array<string>;
  }

  /**
   * Configuration for the debug URL and session viewer. Controls interaction
   * capabilities and cursor visibility.
   */
  export interface DebugConfig {
    /**
     * Whether interaction is allowed via the debug URL viewer. When false, the session
     * viewer is view-only.
     */
    interactive?: boolean;

    /**
     * Whether the OS-level mouse cursor is shown in the WebRTC stream (headful mode
     * only).
     */
    systemCursor?: boolean;
  }

  /**
   * Device configuration for the session
   */
  export interface DeviceConfig {
    device?: 'desktop' | 'mobile';
  }

  /**
   * Stealth configuration for the session
   */
  export interface StealthConfig {
    /**
     * When true, captchas will be automatically solved when detected. When false, use
     * the solve endpoints to manually initiate solving.
     */
    autoCaptchaSolving?: boolean;

    /**
     * This flag will make the browser act more human-like by moving the mouse in a
     * more natural way
     */
    humanizeInteractions?: boolean;

    /**
     * This flag will skip the fingerprint generation for the session.
     */
    skipFingerprintInjection?: boolean;
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
        key: unknown;

        value: unknown;

        blobFiles?: Array<Record.BlobFile>;
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
   * Cursor for the next page of results. Null if no more pages.
   */
  nextCursor: string | null;

  /**
   * List of browser sessions
   */
  sessions: Array<Sessionslist.Session>;

  /**
   * Total number of sessions matching the query
   */
  totalCount: number;
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
     * Bandwidth optimizations that were applied to the session.
     */
    optimizeBandwidth: Session.OptimizeBandwidth;

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
     * Configuration for the debug URL and session viewer. Controls interaction
     * capabilities and cursor visibility.
     */
    debugConfig?: Session.DebugConfig;

    /**
     * Device configuration for the session
     */
    deviceConfig?: Session.DeviceConfig;

    /**
     * Indicates if the session is headless or headful
     */
    headless?: boolean;

    /**
     * Indicates if Selenium is used in the session
     */
    isSelenium?: boolean;

    /**
     * This flag will persist the profile for the session.
     */
    persistProfile?: boolean;

    /**
     * The ID of the profile associated with the session
     */
    profileId?: string;

    /**
     * The region where the session was created
     */
    region?: 'lax' | 'ord' | 'iad' | 'scl' | 'fra' | 'nrt';

    /**
     * Indicates if captcha solving is enabled
     */
    solveCaptcha?: boolean;

    /**
     * Stealth configuration for the session
     */
    stealthConfig?: Session.StealthConfig;

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

    /**
     * Bandwidth optimizations that were applied to the session.
     */
    export interface OptimizeBandwidth {
      blockHosts?: Array<string>;

      blockImages?: boolean;

      blockMedia?: boolean;

      blockStylesheets?: boolean;

      blockUrlPatterns?: Array<string>;
    }

    /**
     * Configuration for the debug URL and session viewer. Controls interaction
     * capabilities and cursor visibility.
     */
    export interface DebugConfig {
      /**
       * Whether interaction is allowed via the debug URL viewer. When false, the session
       * viewer is view-only.
       */
      interactive?: boolean;

      /**
       * Whether the OS-level mouse cursor is shown in the WebRTC stream (headful mode
       * only).
       */
      systemCursor?: boolean;
    }

    /**
     * Device configuration for the session
     */
    export interface DeviceConfig {
      device?: 'desktop' | 'mobile';
    }

    /**
     * Stealth configuration for the session
     */
    export interface StealthConfig {
      /**
       * When true, captchas will be automatically solved when detected. When false, use
       * the solve endpoints to manually initiate solving.
       */
      autoCaptchaSolving?: boolean;

      /**
       * This flag will make the browser act more human-like by moving the mouse in a
       * more natural way
       */
      humanizeInteractions?: boolean;

      /**
       * This flag will skip the fingerprint generation for the session.
       */
      skipFingerprintInjection?: boolean;
    }
  }
}

export interface SessionComputerResponse {
  /**
   * Base64 encoded screenshot if requested
   */
  base64_image?: string;

  /**
   * Error message if action failed
   */
  error?: string;

  /**
   * Output message from the action
   */
  output?: string;

  /**
   * System information
   */
  system?: string;
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
   * Configuration for the debug URL and session viewer. Controls interaction
   * capabilities, cursor visibility, and other debug-related settings.
   */
  debugConfig?: SessionCreateParams.DebugConfig;

  /**
   * Device configuration for the session. Specify 'mobile' for mobile device
   * fingerprints and configurations.
   */
  deviceConfig?: SessionCreateParams.DeviceConfig;

  /**
   * Viewport and browser window dimensions for the session
   */
  dimensions?: SessionCreateParams.Dimensions;

  /**
   * Array of extension IDs to install in the session. Use ['all_ext'] to install all
   * uploaded extensions.
   */
  extensionIds?: Array<string>;

  /**
   * Enable headless browser mode (disable Headful mode)
   */
  headless?: boolean;

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
   * Enable bandwidth optimizations. Passing true enables all flags (except
   * hosts/patterns). Object allows granular control.
   */
  optimizeBandwidth?: boolean | SessionCreateParams.UnionMember1;

  /**
   * This flag will persist the user profile for the session.
   */
  persistProfile?: boolean;

  /**
   * This flag will set the profile for the session.
   */
  profileId?: string;

  /**
   * Custom proxy URL for the browser session. Overrides useProxy, disabling
   * Steel-provided proxies in favor of your specified proxy. Format:
   * http(s)://username:password@hostname:port
   */
  proxyUrl?: string;

  /**
   * The desired region for the session to be started in. Available regions are lax,
   * ord, iad
   */
  region?: unknown;

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
   * Stealth configuration for the session
   */
  stealthConfig?: SessionCreateParams.StealthConfig;

  /**
   * Session timeout duration in milliseconds. Default is 300000 (5 minutes).
   */
  timeout?: number;

  /**
   * Simple boolean to enable/disable Steel proxies
   */
  useProxy?: boolean | SessionCreateParams.Geolocation | SessionCreateParams.Server | unknown;

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
   * Configuration for the debug URL and session viewer. Controls interaction
   * capabilities, cursor visibility, and other debug-related settings.
   */
  export interface DebugConfig {
    /**
     * Allow interaction with the browser session via the debug URL viewer. When false,
     * the session viewer will be view-only. Default is true.
     */
    interactive?: boolean;

    /**
     * Show the OS-level mouse cursor in the WebRTC stream (headful mode only). When
     * false, the system cursor will not be rendered in the stream. Default is true.
     */
    systemCursor?: boolean;
  }

  /**
   * Device configuration for the session. Specify 'mobile' for mobile device
   * fingerprints and configurations.
   */
  export interface DeviceConfig {
    device?: 'desktop' | 'mobile';
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

  export interface UnionMember1 {
    blockHosts?: Array<string>;

    blockImages?: boolean;

    blockMedia?: boolean;

    blockStylesheets?: boolean;

    blockUrlPatterns?: Array<string>;
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
          key: unknown;

          value: unknown;

          blobFiles?: Array<Record.BlobFile>;
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
   * Stealth configuration for the session
   */
  export interface StealthConfig {
    /**
     * When true, captchas will be automatically solved when detected. When false, use
     * the solve endpoints to manually initiate solving.
     */
    autoCaptchaSolving?: boolean;

    /**
     * This flag will make the browser act more human-like by moving the mouse in a
     * more natural way.
     */
    humanizeInteractions?: boolean;

    /**
     * This flag will skip the fingerprint generation for the session.
     */
    skipFingerprintInjection?: boolean;
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
      city?:
        | 'A_CORUNA'
        | 'ABIDJAN'
        | 'ABU_DHABI'
        | 'ABUJA'
        | 'ACAPULCO_DE JUAREZ'
        | 'ACCRA'
        | 'ADANA'
        | 'ADAPAZARI'
        | 'ADDIS_ABABA'
        | 'ADELAIDE'
        | 'AFYONKARAHISAR'
        | 'AGADIR'
        | 'AGUAS_LINDAS DE GOIAS'
        | 'AGUASCALIENTES'
        | 'AHMEDABAD'
        | 'AIZAWL'
        | 'AJMAN'
        | 'AKRON'
        | 'AKSARAY'
        | 'AL_AIN CITY'
        | 'AL_MANSURAH'
        | 'AL_QATIF'
        | 'ALAJUELA'
        | 'ALBANY'
        | 'ALBUQUERQUE'
        | 'ALEXANDRIA'
        | 'ALGIERS'
        | 'ALICANTE'
        | 'ALMADA'
        | 'ALMATY'
        | 'ALMERE_STAD'
        | 'ALVORADA'
        | 'AMADORA'
        | 'AMASYA'
        | 'AMBATO'
        | 'AMERICANA'
        | 'AMMAN'
        | 'AMSTERDAM'
        | 'ANANINDEUA'
        | 'ANAPOLIS'
        | 'ANGELES_CITY'
        | 'ANGERS'
        | 'ANGRA_DOS REIS'
        | 'ANKARA'
        | 'ANTAKYA'
        | 'ANTALYA'
        | 'ANTANANARIVO'
        | 'ANTIPOLO_CITY'
        | 'ANTOFAGASTA'
        | 'ANTWERP'
        | 'APARECIDA_DE GOIANIA'
        | 'APODACA'
        | 'ARACAJU'
        | 'ARACATUBA'
        | 'ARAD'
        | 'ARAGUAINA'
        | 'ARAPIRACA'
        | 'ARARAQUARA'
        | 'AREQUIPA'
        | 'ARICA'
        | 'ARLINGTON'
        | 'ARYANAH'
        | 'ASTANA'
        | 'ASUNCION'
        | 'ASYUT'
        | 'ATAKUM'
        | 'ATHENS'
        | 'ATIBAIA'
        | 'ATLANTA'
        | 'AUBURN'
        | 'AUCKLAND'
        | 'AURORA'
        | 'AUSTIN'
        | 'AVELLANEDA'
        | 'AYDIN'
        | 'AZCAPOTZALCO'
        | 'BACOLOD_CITY'
        | 'BACOOR'
        | 'BAGHDAD'
        | 'BAGUIO_CITY'
        | 'BAHIA_BLANCA'
        | 'BAKERSFIELD'
        | 'BAKU'
        | 'BALIKESIR'
        | 'BALIKPAPAN'
        | 'BALNEARIO_CAMBORIU'
        | 'BALTIMORE'
        | 'BANDAR_LAMPUNG'
        | 'BANDAR_SERI BEGAWAN'
        | 'BANDUNG'
        | 'BANGKOK'
        | 'BANJA_LUKA'
        | 'BANJARMASIN'
        | 'BARCELONA'
        | 'BARI'
        | 'BARQUISIMETO'
        | 'BARRA_MANSA'
        | 'BARRANQUILLA'
        | 'BARUERI'
        | 'BATAM'
        | 'BATANGAS'
        | 'BATMAN'
        | 'BATNA_CITY'
        | 'BATON_ROUGE'
        | 'BATUMI'
        | 'BAURU'
        | 'BEIRUT'
        | 'BEJAIA'
        | 'BEKASI'
        | 'BELEM'
        | 'BELFAST'
        | 'BELFORD_ROXO'
        | 'BELGRADE'
        | 'BELO_HORIZONTE'
        | 'BENGALURU'
        | 'BENI_MELLAL'
        | 'BERAZATEGUI'
        | 'BERN'
        | 'BETIM'
        | 'BHARATPUR'
        | 'BHOPAL'
        | 'BHUBANESWAR'
        | 'BIALYSTOK'
        | 'BIEN_HOA'
        | 'BILBAO'
        | 'BILECIK'
        | 'BIRATNAGAR'
        | 'BIRMINGHAM'
        | 'BISHKEK'
        | 'BIZERTE'
        | 'BLIDA'
        | 'BLOEMFONTEIN'
        | 'BLOOMINGTON'
        | 'BLUMENAU'
        | 'BOA_VISTA'
        | 'BOCHUM'
        | 'BOGOR'
        | 'BOGOTA'
        | 'BOISE'
        | 'BOKSBURG'
        | 'BOLOGNA'
        | 'BOLU'
        | 'BORDEAUX'
        | 'BOSTON'
        | 'BOTUCATU'
        | 'BRADFORD'
        | 'BRAGA'
        | 'BRAGANCA_PAULISTA'
        | 'BRAMPTON'
        | 'BRASILIA'
        | 'BRASOV'
        | 'BRATISLAVA'
        | 'BREMEN'
        | 'BRESCIA'
        | 'BREST'
        | 'BRIDGETOWN'
        | 'BRISBANE'
        | 'BRISTOL'
        | 'BRNO'
        | 'BROOKLYN'
        | 'BRUSSELS'
        | 'BUCARAMANGA'
        | 'BUCHAREST'
        | 'BUDAPEST'
        | 'BUENOS_AIRES'
        | 'BUFFALO'
        | 'BUK_GU'
        | 'BUKHARA'
        | 'BURGAS'
        | 'BURNABY'
        | 'BURSA'
        | 'BUTUAN'
        | 'BYDGOSZCZ'
        | 'CABANATUAN_CITY'
        | 'CABO_FRIO'
        | 'CABUYAO'
        | 'CACHOEIRO_DE ITAPEMIRIM'
        | 'CAGAYAN_DE ORO'
        | 'CAGLIARI'
        | 'CAIRO'
        | 'CALAMBA'
        | 'CALGARY'
        | 'CALOOCAN_CITY'
        | 'CAMACARI'
        | 'CAMARAGIBE'
        | 'CAMPECHE'
        | 'CAMPINA_GRANDE'
        | 'CAMPINAS'
        | 'CAMPO_GRANDE'
        | 'CAMPO_LARGO'
        | 'CAMPOS_DOS GOYTACAZES'
        | 'CAN_THO'
        | 'CANOAS'
        | 'CANTON'
        | 'CAPE_TOWN'
        | 'CARACAS'
        | 'CARAGUATATUBA'
        | 'CARAPICUIBA'
        | 'CARDIFF'
        | 'CARIACICA'
        | 'CARMONA'
        | 'CARTAGENA'
        | 'CARUARU'
        | 'CASABLANCA'
        | 'CASCAVEL'
        | 'CASEROS'
        | 'CASTANHAL'
        | 'CASTRIES'
        | 'CATALAO'
        | 'CATAMARCA'
        | 'CATANDUVA'
        | 'CATANIA'
        | 'CAUCAIA'
        | 'CAXIAS_DO SUL'
        | 'CEBU_CITY'
        | 'CENTRAL'
        | 'CENTRO'
        | 'CENTURION'
        | 'CHAGUANAS'
        | 'CHANDIGARH'
        | 'CHANDLER'
        | 'CHANG_HUA'
        | 'CHAPECO'
        | 'CHARLESTON'
        | 'CHARLOTTE'
        | 'CHELYABINSK'
        | 'CHENNAI'
        | 'CHERKASY'
        | 'CHERNIVTSI'
        | 'CHIA'
        | 'CHIANG_MAI'
        | 'CHICLAYO'
        | 'CHIHUAHUA_CITY'
        | 'CHIMBOTE'
        | 'CHISINAU'
        | 'CHITTAGONG'
        | 'CHRISTCHURCH'
        | 'CINCINNATI'
        | 'CIREBON'
        | 'CITY_OF MUNTINLUPA'
        | 'CIUDAD_DEL ESTE'
        | 'CIUDAD_GUAYANA'
        | 'CIUDAD_JUAREZ'
        | 'CIUDAD_NEZAHUALCOYOTL'
        | 'CIUDAD_OBREGON'
        | 'CLEVELAND'
        | 'CLUJ_NAPOCA'
        | 'COCHABAMBA'
        | 'COIMBATORE'
        | 'COIMBRA'
        | 'COLOGNE'
        | 'COLOMBO'
        | 'COLORADO_SPRINGS'
        | 'COLUMBIA'
        | 'COLUMBUS'
        | 'COMODORO_RIVADAVIA'
        | 'CONCEPCION'
        | 'CONCORD'
        | 'CONSTANTA'
        | 'CONSTANTINE'
        | 'CONTAGEM'
        | 'COPENHAGEN'
        | 'CORDOBA'
        | 'CORRIENTES'
        | 'CORUM'
        | 'COTIA'
        | 'COVENTRY'
        | 'CRAIOVA'
        | 'CRICIUMA'
        | 'CROYDON'
        | 'CUAUTITLAN_IZCALLI'
        | 'CUCUTA'
        | 'CUENCA'
        | 'CUERNAVACA'
        | 'CUIABA'
        | 'CULIACAN'
        | 'CURITIBA'
        | 'CUSCO'
        | 'DA_NANG'
        | 'DAGUPAN'
        | 'DAKAR'
        | 'DALLAS'
        | 'DAMIETTA'
        | 'DAMMAM'
        | 'DAR_ES SALAAM'
        | 'DASMARINAS'
        | 'DAVAO_CITY'
        | 'DAYTON'
        | 'DEBRECEN'
        | 'DECATUR'
        | 'DEHRADUN'
        | 'DELHI'
        | 'DENIZLI'
        | 'DENPASAR'
        | 'DENVER'
        | 'DEPOK'
        | 'DERBY'
        | 'DETROIT'
        | 'DHAKA'
        | 'DIADEMA'
        | 'DIVINOPOLIS'
        | 'DIYARBAKIR'
        | 'DJELFA'
        | 'DNIPRO'
        | 'DOHA'
        | 'DORTMUND'
        | 'DOURADOS'
        | 'DRESDEN'
        | 'DUBAI'
        | 'DUBLIN'
        | 'DUEZCE'
        | 'DUISBURG'
        | 'DUQUE_DE CAXIAS'
        | 'DURANGO'
        | 'DURBAN'
        | 'DUSSELDORF'
        | 'ECATEPEC'
        | 'EDINBURGH'
        | 'EDIRNE'
        | 'EDMONTON'
        | 'EL_JADIDA'
        | 'EL_PASO'
        | 'ELAZIG'
        | 'EMBU'
        | 'ENSENADA'
        | 'ERBIL'
        | 'ERZURUM'
        | 'ESKISEHIR'
        | 'ESPOO'
        | 'ESSEN'
        | 'FAISALABAD'
        | 'FAYETTEVILLE'
        | 'FAZENDA_RIO GRANDE'
        | 'FEIRA_DE SANTANA'
        | 'FES'
        | 'FLORENCE'
        | 'FLORENCIO_VARELA'
        | 'FLORIANOPOLIS'
        | 'FONTANA'
        | 'FORMOSA'
        | 'FORT_LAUDERDALE'
        | 'FORT_WAYNE'
        | 'FORT_WORTH'
        | 'FORTALEZA'
        | 'FOZ_DO IGUACU'
        | 'FRANCA'
        | 'FRANCISCO_MORATO'
        | 'FRANCO_DA ROCHA'
        | 'FRANKFURT_AM MAIN'
        | 'FREDERICKSBURG'
        | 'FRESNO'
        | 'FUNCHAL'
        | 'GABORONE'
        | 'GAINESVILLE'
        | 'GALATI'
        | 'GANGNAM_GU'
        | 'GARANHUNS'
        | 'GATINEAU'
        | 'GAZIANTEP'
        | 'GDANSK'
        | 'GDYNIA'
        | 'GENERAL_TRIAS'
        | 'GENEVA'
        | 'GENOA'
        | 'GEORGE_TOWN'
        | 'GEORGETOWN'
        | 'GHAZIABAD'
        | 'GHENT'
        | 'GIJON'
        | 'GIRESUN'
        | 'GIZA'
        | 'GLASGOW'
        | 'GLENDALE'
        | 'GLIWICE'
        | 'GOIANIA'
        | 'GOMEL'
        | 'GOTHENBURG'
        | 'GOVERNADOR_VALADARES'
        | 'GOYANG_SI'
        | 'GRANADA'
        | 'GRAND_RAPIDS'
        | 'GRAVATAI'
        | 'GRAZ'
        | 'GREENSBORO'
        | 'GREENVILLE'
        | 'GUADALAJARA'
        | 'GUADALUPE'
        | 'GUANGZHOU'
        | 'GUARAPUAVA'
        | 'GUARATINGUETA'
        | 'GUARUJA'
        | 'GUARULHOS'
        | 'GUATEMALA_CITY'
        | 'GUAYAQUIL'
        | 'GUJRANWALA'
        | 'GURUGRAM'
        | 'GUSTAVO_ADOLFO MADERO'
        | 'GUWAHATI'
        | 'GWANAK_GU'
        | 'HACKNEY'
        | 'HAIFA'
        | 'HAIPHONG'
        | 'HAMBURG'
        | 'HAMILTON'
        | 'HANOI'
        | 'HANOVER'
        | 'HARARE'
        | 'HAVANA'
        | 'HELSINKI'
        | 'HENDERSON'
        | 'HEREDIA'
        | 'HERMOSILLO'
        | 'HIALEAH'
        | 'HO_CHI MINH CITY'
        | 'HOLLYWOOD'
        | 'HOLON'
        | 'HONOLULU'
        | 'HORTOLANDIA'
        | 'HRODNA'
        | 'HSINCHU'
        | 'HUANCAYO'
        | 'HUANUCO'
        | 'HULL'
        | 'HURLINGHAM'
        | 'HYDERABAD'
        | 'IASI'
        | 'IBAGUE'
        | 'ICA'
        | 'ILAM'
        | 'ILFORD'
        | 'ILIGAN'
        | 'ILOILO_CITY'
        | 'IMPERATRIZ'
        | 'IMUS'
        | 'INCHEON'
        | 'INDAIATUBA'
        | 'INDIANAPOLIS'
        | 'INDORE'
        | 'IPATINGA'
        | 'IPOH'
        | 'IQUIQUE'
        | 'IRVINE'
        | 'ISIDRO_CASANOVA'
        | 'ISLAMABAD'
        | 'ISLINGTON'
        | 'ISMAILIA'
        | 'ISPARTA'
        | 'ISTANBUL'
        | 'ITABORAI'
        | 'ITABUNA'
        | 'ITAJAI'
        | 'ITANHAEM'
        | 'ITAPEVI'
        | 'ITAQUAQUECETUBA'
        | 'ITUZAINGO'
        | 'IZMIR'
        | 'IZTAPALAPA'
        | 'JABOATAO_DOS GUARARAPES'
        | 'JACAREI'
        | 'JACKSON'
        | 'JACKSONVILLE'
        | 'JAIPUR'
        | 'JAKARTA'
        | 'JARAGUA_DO SUL'
        | 'JAU'
        | 'JEDDAH'
        | 'JEMBER'
        | 'JERUSALEM'
        | 'JOAO_MONLEVADE'
        | 'JOAO_PESSOA'
        | 'JODHPUR'
        | 'JOHANNESBURG'
        | 'JOHOR_BAHRU'
        | 'JOINVILLE'
        | 'JOSE_C PAZ'
        | 'JOSE_MARIA EZEIZA'
        | 'JUAREZ'
        | 'JUAZEIRO_DO NORTE'
        | 'JUIZ_DE FORA'
        | 'JUNDIAI'
        | 'KAHRAMANMARAS'
        | 'KAMPALA'
        | 'KANPUR'
        | 'KANSAS_CITY'
        | 'KAOHSIUNG_CITY'
        | 'KARABUK'
        | 'KARACHI'
        | 'KARLSRUHE'
        | 'KARNAL'
        | 'KASKI'
        | 'KASTAMONU'
        | 'KATHMANDU'
        | 'KATOWICE'
        | 'KATSINA'
        | 'KATY'
        | 'KAUNAS'
        | 'KAYSERI'
        | 'KAZAN'
        | 'KECSKEMET'
        | 'KEDIRI'
        | 'KENITRA'
        | 'KHARKIV'
        | 'KHMELNYTSKYI'
        | 'KHON_KAEN'
        | 'KIELCE'
        | 'KIGALI'
        | 'KINGSTON'
        | 'KIRKLARELI'
        | 'KISSIMMEE'
        | 'KITCHENER'
        | 'KLAIPEDA'
        | 'KNOXVILLE'
        | 'KOCHI'
        | 'KOLKATA'
        | 'KOLLAM'
        | 'KONYA'
        | 'KOSEKOY'
        | 'KOSICE'
        | 'KOTA_KINABALU'
        | 'KOZHIKODE'
        | 'KRAKOW'
        | 'KRASNODAR'
        | 'KRYVYI_RIH'
        | 'KUALA_LUMPUR'
        | 'KUCHING'
        | 'KUTAHYA'
        | 'KUTAISI'
        | 'KUWAIT_CITY'
        | 'KYIV'
        | 'LA_PAZ'
        | 'LA_PLATA'
        | 'LA_RIOJA'
        | 'LA_SERENA'
        | 'LAFAYETTE'
        | 'LAFERRERE'
        | 'LAGES'
        | 'LAGOS'
        | 'LAHORE'
        | 'LAHUG'
        | 'LAKE_WORTH'
        | 'LAKELAND'
        | 'LANCASTER'
        | 'LANUS'
        | 'LAS_PALMAS DE GRAN CANARIA'
        | 'LAS_PINAS'
        | 'LAS_VEGAS'
        | 'LAUSANNE'
        | 'LAVAL'
        | 'LAWRENCEVILLE'
        | 'LE_MANS'
        | 'LEEDS'
        | 'LEICESTER'
        | 'LEIPZIG'
        | 'LEON'
        | 'LEXINGTON'
        | 'LIBREVILLE'
        | 'LIEGE'
        | 'LILLE'
        | 'LIMA'
        | 'LIMASSOL'
        | 'LIMEIRA'
        | 'LINCOLN'
        | 'LINHARES'
        | 'LIPA_CITY'
        | 'LISBON'
        | 'LIVERPOOL'
        | 'LJUBLJANA'
        | 'LODZ'
        | 'LOJA'
        | 'LOMAS_DE ZAMORA'
        | 'LOME'
        | 'LONDRINA'
        | 'LONG_BEACH'
        | 'LONGUEUIL'
        | 'LOUISVILLE'
        | 'LUANDA'
        | 'LUBLIN'
        | 'LUCENA_CITY'
        | 'LUCKNOW'
        | 'LUDHIANA'
        | 'LUSAKA'
        | 'LUXEMBOURG'
        | 'LUZIANIA'
        | 'LVIV'
        | 'LYON'
        | 'MABALACAT'
        | 'MACAE'
        | 'MACAO'
        | 'MACAPA'
        | 'MACEIO'
        | 'MACHALA'
        | 'MADISON'
        | 'MADRID'
        | 'MAGE'
        | 'MAGELANG'
        | 'MAGNESIA_AD SIPYLUM'
        | 'MAKASSAR'
        | 'MAKATI_CITY'
        | 'MALABON'
        | 'MALAGA'
        | 'MALANG'
        | 'MALAPPURAM'
        | 'MALDONADO'
        | 'MALE'
        | 'MALMO'
        | 'MANADO'
        | 'MANAGUA'
        | 'MANAMA'
        | 'MANAUS'
        | 'MANCHESTER'
        | 'MANDALUYONG_CITY'
        | 'MANILA'
        | 'MANIZALES'
        | 'MANNHEIM'
        | 'MAPUTO'
        | 'MAR_DEL PLATA'
        | 'MARABA'
        | 'MARACAIBO'
        | 'MARACANAU'
        | 'MARACAY'
        | 'MARDIN'
        | 'MARIBOR'
        | 'MARICA'
        | 'MARIETTA'
        | 'MARIKINA_CITY'
        | 'MARILIA'
        | 'MARINGA'
        | 'MARRAKESH'
        | 'MARSEILLE'
        | 'MAUA'
        | 'MAZATLAN'
        | 'MEDAN'
        | 'MEDELLIN'
        | 'MEDINA'
        | 'MEERUT'
        | 'MEKNES'
        | 'MELBOURNE'
        | 'MEMPHIS'
        | 'MENDOZA'
        | 'MERIDA'
        | 'MERKEZ'
        | 'MERLO'
        | 'MERSIN'
        | 'MESA'
        | 'MEXICALI'
        | 'MEXICO_CITY'
        | 'MILAN'
        | 'MILTON_KEYNES'
        | 'MILWAUKEE'
        | 'MINNEAPOLIS'
        | 'MINSK'
        | 'MISKOLC'
        | 'MISSISSAUGA'
        | 'MOGI_DAS CRUZES'
        | 'MOHALI'
        | 'MONROE'
        | 'MONTE_GRANDE'
        | 'MONTEGO_BAY'
        | 'MONTERREY'
        | 'MONTES_CLAROS'
        | 'MONTEVIDEO'
        | 'MONTGOMERY'
        | 'MONTPELLIER'
        | 'MONTREAL'
        | 'MORELIA'
        | 'MORENO'
        | 'MORON'
        | 'MOSSORO'
        | 'MUGLA'
        | 'MULTAN'
        | 'MUMBAI'
        | 'MUNICH'
        | 'MURCIA'
        | 'MUSCAT'
        | 'MUZAFFARGARH'
        | 'MYKOLAYIV'
        | 'NAALDWIJK'
        | 'NAGA'
        | 'NAGPUR'
        | 'NAIROBI'
        | 'NANTES'
        | 'NAPLES'
        | 'NASHVILLE'
        | 'NASSAU'
        | 'NASUGBU'
        | 'NATAL'
        | 'NAUCALPAN'
        | 'NAVI_MUMBAI'
        | 'NEIVA'
        | 'NEUQUEN'
        | 'NEVSEHIR'
        | 'NEW_DELHI'
        | 'NEW_ORLEANS'
        | 'NEW_TAIPEI'
        | 'NEWARK'
        | 'NEWCASTLE_UPON TYNE'
        | 'NHA_TRANG'
        | 'NICE'
        | 'NICOSIA'
        | 'NILOPOLIS'
        | 'NIS'
        | 'NITEROI'
        | 'NITRA'
        | 'NIZHNIY_NOVGOROD'
        | 'NOGALES'
        | 'NOIDA'
        | 'NORTHAMPTON'
        | 'NORWICH'
        | 'NOTTINGHAM'
        | 'NOVA_FRIBURGO'
        | 'NOVA_IGUACU'
        | 'NOVI_SAD'
        | 'NOVO_HAMBURGO'
        | 'NOVOSIBIRSK'
        | 'NUREMBERG'
        | 'OAKLAND'
        | 'OAXACA_CITY'
        | 'ODESA'
        | 'OKLAHOMA_CITY'
        | 'OLINDA'
        | 'OLOMOUC'
        | 'OLONGAPO_CITY'
        | 'OLSZTYN'
        | 'OMAHA'
        | 'ORADEA'
        | 'ORAN'
        | 'ORDU'
        | 'ORLANDO'
        | 'OSASCO'
        | 'OSLO'
        | 'OSMANIYE'
        | 'OSTRAVA'
        | 'OTTAWA'
        | 'OUJDA'
        | 'OURINHOS'
        | 'PACHUCA'
        | 'PADOVA'
        | 'PALAKKAD'
        | 'PALEMBANG'
        | 'PALERMO'
        | 'PALHOCA'
        | 'PALMA'
        | 'PALMAS'
        | 'PANAMA_CITY'
        | 'PARAMARIBO'
        | 'PARANA'
        | 'PARANAGUA'
        | 'PARANAQUE_CITY'
        | 'PARAUAPEBAS'
        | 'PARIS'
        | 'PARNAIBA'
        | 'PARNAMIRIM'
        | 'PASSO_FUNDO'
        | 'PASTO'
        | 'PATAN'
        | 'PATNA'
        | 'PATOS_DE MINAS'
        | 'PAULISTA'
        | 'PECS'
        | 'PEKANBARU'
        | 'PELOTAS'
        | 'PEORIA'
        | 'PEREIRA'
        | 'PERM'
        | 'PERTH'
        | 'PESCARA'
        | 'PESHAWAR'
        | 'PETAH_TIKVA'
        | 'PETALING_JAYA'
        | 'PETROLINA'
        | 'PETROPOLIS'
        | 'PHILADELPHIA'
        | 'PHNOM_PENH'
        | 'PHOENIX'
        | 'PILAR'
        | 'PINDAMONHANGABA'
        | 'PIRACICABA'
        | 'PITESTI'
        | 'PITTSBURGH'
        | 'PIURA'
        | 'PLANO'
        | 'PLOIESTI'
        | 'PLOVDIV'
        | 'PLYMOUTH'
        | 'POCOS_DE CALDAS'
        | 'PODGORICA'
        | 'POLTAVA'
        | 'PONTA_GROSSA'
        | 'PONTIANAK'
        | 'POPAYAN'
        | 'PORT_AU PRINCE'
        | 'PORT_ELIZABETH'
        | 'PORT_HARCOURT'
        | 'PORT_LOUIS'
        | 'PORT_MONTT'
        | 'PORT_OF SPAIN'
        | 'PORT_SAID'
        | 'PORTLAND'
        | 'PORTO'
        | 'PORTO_ALEGRE'
        | 'PORTO_SEGURO'
        | 'PORTO_VELHO'
        | 'PORTOVIEJO'
        | 'POSADAS'
        | 'POUSO_ALEGRE'
        | 'POZNAN'
        | 'PRAGUE'
        | 'PRAIA_GRANDE'
        | 'PRESIDENTE_PRUDENTE'
        | 'PRETORIA'
        | 'PRISTINA'
        | 'PROVIDENCE'
        | 'PUCALLPA'
        | 'PUCHONG_BATU DUA BELAS'
        | 'PUEBLA_CITY'
        | 'PUNE'
        | 'QUEBEC'
        | 'QUEENS'
        | 'QUEIMADOS'
        | 'QUERETARO_CITY'
        | 'QUEZON_CITY'
        | 'QUILMES'
        | 'QUITO'
        | 'RABAT'
        | 'RAIPUR'
        | 'RAJKOT'
        | 'RAJSHAHI'
        | 'RALEIGH'
        | 'RAMAT_GAN'
        | 'RANCAGUA'
        | 'RANCHI'
        | 'RAS_AL KHAIMAH'
        | 'RAWALPINDI'
        | 'READING'
        | 'RECIFE'
        | 'REGINA'
        | 'RENNES'
        | 'RENO'
        | 'RESISTENCIA'
        | 'REYKJAVIK'
        | 'REYNOSA'
        | 'RIBEIRAO_DAS NEVES'
        | 'RIBEIRAO_PRETO'
        | 'RICHMOND'
        | 'RIGA'
        | 'RIO_BRANCO'
        | 'RIO_CLARO'
        | 'RIO_CUARTO'
        | 'RIO_DE JANEIRO'
        | 'RIO_DO SUL'
        | 'RIO_GALLEGOS'
        | 'RIO_GRANDE'
        | 'RISHON_LETSIYYON'
        | 'RIVERSIDE'
        | 'RIYADH'
        | 'RIZE'
        | 'ROCHESTER'
        | 'ROME'
        | 'RONDONOPOLIS'
        | 'ROSARIO'
        | 'ROSEAU'
        | 'ROSTOV_ON DON'
        | 'ROTTERDAM'
        | 'ROUEN'
        | 'ROUSSE'
        | 'RZESZOW'
        | 'SACRAMENTO'
        | 'SAGAR'
        | 'SAINT_PAUL'
        | 'SALE'
        | 'SALT_LAKE CITY'
        | 'SALTA'
        | 'SALTILLO'
        | 'SALVADOR'
        | 'SAMARA'
        | 'SAMARINDA'
        | 'SAMARKAND'
        | 'SAMSUN'
        | 'SAN_ANTONIO'
        | 'SAN_DIEGO'
        | 'SAN_FERNANDO'
        | 'SAN_FRANCISCO'
        | 'SAN_JOSE'
        | 'SAN_JOSE DEL MONTE'
        | 'SAN_JUAN'
        | 'SAN_JUSTO'
        | 'SAN_LUIS'
        | 'SAN_LUIS POTOSI CITY'
        | 'SAN_MIGUEL'
        | 'SAN_MIGUEL DE TUCUMAN'
        | 'SAN_PABLO CITY'
        | 'SAN_PEDRO'
        | 'SAN_PEDRO SULA'
        | 'SAN_SALVADOR'
        | 'SAN_SALVADOR DE JUJUY'
        | 'SANAA'
        | 'SANLIURFA'
        | 'SANTA_CRUZ'
        | 'SANTA_CRUZ DE TENERIFE'
        | 'SANTA_CRUZ DO SUL'
        | 'SANTA_FE'
        | 'SANTA_LUZIA'
        | 'SANTA_MARIA'
        | 'SANTA_MARTA'
        | 'SANTA_ROSA'
        | 'SANTAREM'
        | 'SANTIAGO'
        | 'SANTIAGO_DE CALI'
        | 'SANTIAGO_DE LOS CABALLEROS'
        | 'SANTO_ANDRE'
        | 'SANTO_DOMINGO'
        | 'SANTO_DOMINGO ESTE'
        | 'SANTOS'
        | 'SAO_BERNARDO DO CAMPO'
        | 'SAO_CARLOS'
        | 'SAO_GONCALO'
        | 'SAO_JOAO DE MERITI'
        | 'SAO_JOSE'
        | 'SAO_JOSE DO RIO PRETO'
        | 'SAO_JOSE DOS CAMPOS'
        | 'SAO_JOSE DOS PINHAIS'
        | 'SAO_LEOPOLDO'
        | 'SAO_LUIS'
        | 'SAO_PAULO'
        | 'SAO_VICENTE'
        | 'SARAJEVO'
        | 'SASKATOON'
        | 'SCARBOROUGH'
        | 'SEATTLE'
        | 'SEMARANG'
        | 'SEO_GU'
        | 'SEONGNAM_SI'
        | 'SEOUL'
        | 'SERRA'
        | 'SETE_LAGOAS'
        | 'SETIF'
        | 'SETUBAL'
        | 'SEVILLE'
        | 'SFAX'
        | 'SHAH_ALAM'
        | 'SHANGHAI'
        | 'SHARJAH'
        | 'SHEFFIELD'
        | 'SHENZHEN'
        | 'SHIMLA'
        | 'SIAULIAI'
        | 'SIBIU'
        | 'SIDOARJO'
        | 'SIKAR'
        | 'SILVER_SPRING'
        | 'SINOP'
        | 'SIVAS'
        | 'SKIKDA'
        | 'SKOPJE'
        | 'SLOUGH'
        | 'SOBRAL'
        | 'SOFIA'
        | 'SOROCABA'
        | 'SOUSSE'
        | 'SOUTH_TANGERANG'
        | 'SOUTHAMPTON'
        | 'SOUTHWARK'
        | 'SPLIT'
        | 'SPOKANE'
        | 'SPRING'
        | 'SPRINGFIELD'
        | 'ST_LOUIS'
        | 'ST_PETERSBURG'
        | 'STARA_ZAGORA'
        | 'STATEN_ISLAND'
        | 'STOCKHOLM'
        | 'STOCKTON'
        | 'STOKE_ON TRENT'
        | 'STRASBOURG'
        | 'STUTTGART'
        | 'SUMARE'
        | 'SURABAYA'
        | 'SURAKARTA'
        | 'SURAT'
        | 'SURREY'
        | 'SUWON'
        | 'SUZANO'
        | 'SYDNEY'
        | 'SZCZECIN'
        | 'SZEGED'
        | 'SZEKESFEHERVAR'
        | 'TABOAO_DA SERRA'
        | 'TACNA'
        | 'TACOMA'
        | 'TAGUIG'
        | 'TAICHUNG'
        | 'TAINAN_CITY'
        | 'TAIPEI'
        | 'TALAVERA'
        | 'TALCA'
        | 'TALLAHASSEE'
        | 'TALLINN'
        | 'TAMPA'
        | 'TAMPERE'
        | 'TAMPICO'
        | 'TANGERANG'
        | 'TANGIER'
        | 'TANTA'
        | 'TANZA'
        | 'TAOYUAN_DISTRICT'
        | 'TAPPAHANNOCK'
        | 'TARLAC_CITY'
        | 'TASHKENT'
        | 'TASIKMALAYA'
        | 'TATUI'
        | 'TAUBATE'
        | 'TBILISI'
        | 'TEGUCIGALPA'
        | 'TEHRAN'
        | 'TEIXEIRA_DE FREITAS'
        | 'TEKIRDAG'
        | 'TEL_AVIV'
        | 'TEMUCO'
        | 'TEPIC'
        | 'TERESINA'
        | 'TERNOPIL'
        | 'TERRASSA'
        | 'TETOUAN'
        | 'THANE'
        | 'THE_BRONX'
        | 'THE_HAGUE'
        | 'THESSALONIKI'
        | 'THIRUVANANTHAPURAM'
        | 'THRISSUR'
        | 'TIJUANA'
        | 'TIMISOARA'
        | 'TIRANA'
        | 'TLALNEPANTLA'
        | 'TLAXCALA_CITY'
        | 'TLEMCEN'
        | 'TOKAT_PROVINCE'
        | 'TOKYO'
        | 'TOLUCA'
        | 'TORONTO'
        | 'TORREON'
        | 'TOULOUSE'
        | 'TRABZON'
        | 'TRUJILLO'
        | 'TUBARAO'
        | 'TUCSON'
        | 'TUGUEGARAO_CITY'
        | 'TULSA'
        | 'TUNIS'
        | 'TUNJA'
        | 'TURIN'
        | 'TUXTLA_GUTIERREZ'
        | 'TUZLA'
        | 'UBERABA'
        | 'UBERLANDIA'
        | 'UFA'
        | 'ULAN_BATOR'
        | 'UMEDA'
        | 'URDANETA'
        | 'USAK'
        | 'VADODARA'
        | 'VALENCIA'
        | 'VALINHOS'
        | 'VALLADOLID'
        | 'VALLEDUPAR'
        | 'VALPARAISO'
        | 'VALPARAISO_DE GOIAS'
        | 'VAN'
        | 'VANCOUVER'
        | 'VARANASI'
        | 'VARGINHA'
        | 'VARNA'
        | 'VARZEA_PAULISTA'
        | 'VENUSTIANO_CARRANZA'
        | 'VERACRUZ'
        | 'VERONA'
        | 'VIAMAO'
        | 'VICTORIA'
        | 'VIENNA'
        | 'VIENTIANE'
        | 'VIGO'
        | 'VIJAYAWADA'
        | 'VILA_NOVA DE GAIA'
        | 'VILA_VELHA'
        | 'VILLA_BALLESTER'
        | 'VILLAVICENCIO'
        | 'VILNIUS'
        | 'VINA_DEL MAR'
        | 'VINNYTSIA'
        | 'VIRGINIA_BEACH'
        | 'VISAKHAPATNAM'
        | 'VITORIA'
        | 'VITORIA_DA CONQUISTA'
        | 'VITORIA_DE SANTO ANTAO'
        | 'VOLTA_REDONDA'
        | 'VORONEZH'
        | 'WARSAW'
        | 'WASHINGTON'
        | 'WELLINGTON'
        | 'WEST_PALM BEACH'
        | 'WICHITA'
        | 'WILLEMSTAD'
        | 'WILMINGTON'
        | 'WINDHOEK'
        | 'WINDSOR'
        | 'WINNIPEG'
        | 'WOLVERHAMPTON'
        | 'WOODBRIDGE'
        | 'WROCLAW'
        | 'WUPPERTAL'
        | 'XALAPA'
        | 'YALOVA'
        | 'YANGON'
        | 'YEKATERINBURG'
        | 'YEREVAN'
        | 'YOGYAKARTA'
        | 'YOKOHAMA'
        | 'YONGIN_SI'
        | 'ZABRZE'
        | 'ZAGAZIG'
        | 'ZAGREB'
        | 'ZAMBOANGA_CITY'
        | 'ZAPOPAN'
        | 'ZAPORIZHZHYA'
        | 'ZARAGOZA'
        | 'ZHONGLI_DISTRICT'
        | 'ZIELONA_GORA'
        | 'ZONGULDAK'
        | 'ZURICH';

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

export type SessionComputerParams =
  | SessionComputerParams.Variant0
  | SessionComputerParams.Variant1
  | SessionComputerParams.Variant2
  | SessionComputerParams.Variant3
  | SessionComputerParams.Variant4
  | SessionComputerParams.Variant5
  | SessionComputerParams.Variant6
  | SessionComputerParams.Variant7
  | SessionComputerParams.Variant8;

export declare namespace SessionComputerParams {
  export interface Variant0 {
    action: 'move_mouse';

    /**
     * X and Y coordinates [x, y]
     */
    coordinates: Array<number>;

    /**
     * Keys to hold while moving
     */
    hold_keys?: Array<string>;

    /**
     * Whether to take a screenshot after the action
     */
    screenshot?: boolean;
  }

  export interface Variant1 {
    action: 'click_mouse';

    /**
     * Mouse button to click
     */
    button: 'left' | 'right' | 'middle' | 'back' | 'forward';

    /**
     * Type of click (down, up, or click). Defaults to 'click'
     */
    click_type?: 'down' | 'up' | 'click';

    /**
     * X and Y coordinates [x, y]
     */
    coordinates?: Array<number>;

    /**
     * Keys to hold while clicking
     */
    hold_keys?: Array<string>;

    /**
     * Number of clicks. Defaults to 1
     */
    num_clicks?: number;

    /**
     * Whether to take a screenshot after the action
     */
    screenshot?: boolean;
  }

  export interface Variant2 {
    action: 'drag_mouse';

    /**
     * Array of [x, y] coordinate pairs
     */
    path: Array<Array<number>>;

    /**
     * Keys to hold while dragging
     */
    hold_keys?: Array<string>;

    /**
     * Whether to take a screenshot after the action
     */
    screenshot?: boolean;
  }

  export interface Variant3 {
    action: 'scroll';

    /**
     * X and Y coordinates [x, y]
     */
    coordinates?: Array<number>;

    /**
     * Horizontal scroll amount. Defaults to 0
     */
    delta_x?: number;

    /**
     * Vertical scroll amount. Defaults to 0
     */
    delta_y?: number;

    /**
     * Keys to hold while scrolling
     */
    hold_keys?: Array<string>;

    /**
     * Whether to take a screenshot after the action
     */
    screenshot?: boolean;
  }

  export interface Variant4 {
    action: 'press_key';

    /**
     * Keys to press
     */
    keys: Array<string>;

    /**
     * Duration to hold keys in seconds
     */
    duration?: number;

    /**
     * Whether to take a screenshot after the action
     */
    screenshot?: boolean;
  }

  export interface Variant5 {
    action: 'type_text';

    /**
     * Text to type
     */
    text: string;

    /**
     * Keys to hold while typing
     */
    hold_keys?: Array<string>;

    /**
     * Whether to take a screenshot after the action
     */
    screenshot?: boolean;
  }

  export interface Variant6 {
    action: 'wait';

    /**
     * Duration to wait in seconds
     */
    duration: number;

    /**
     * Whether to take a screenshot after the action
     */
    screenshot?: boolean;
  }

  export interface Variant7 {
    action: 'take_screenshot';
  }

  export interface Variant8 {
    action: 'get_cursor_position';
  }
}

export interface SessionEventsParams {
  /**
   * Compress the events
   */
  compressed?: boolean;

  /**
   * Optional pagination limit
   */
  limit?: number;

  /**
   * Opaque pagination token. Pass the Next-Cursor header value to get the next page.
   */
  pointer?: string;
}

export interface SessionReleaseParams {}

export interface SessionReleaseAllParams {}

Sessions.SessionslistSessionsSessionsCursor = SessionslistSessionsSessionsCursor;
Sessions.Files = Files;
Sessions.Captchas = Captchas;

export declare namespace Sessions {
  export {
    type Session as Session,
    type SessionContext as SessionContext,
    type Sessionslist as Sessionslist,
    type SessionComputerResponse as SessionComputerResponse,
    type SessionEventsResponse as SessionEventsResponse,
    type SessionLiveDetailsResponse as SessionLiveDetailsResponse,
    type SessionReleaseResponse as SessionReleaseResponse,
    type SessionReleaseAllResponse as SessionReleaseAllResponse,
    SessionslistSessionsSessionsCursor as SessionslistSessionsSessionsCursor,
    type SessionCreateParams as SessionCreateParams,
    type SessionListParams as SessionListParams,
    type SessionComputerParams as SessionComputerParams,
    type SessionEventsParams as SessionEventsParams,
    type SessionReleaseParams as SessionReleaseParams,
    type SessionReleaseAllParams as SessionReleaseAllParams,
  };

  export { Files as Files, type FileUploadParams as FileUploadParams };

  export {
    Captchas as Captchas,
    type CaptchaSolveResponse as CaptchaSolveResponse,
    type CaptchaSolveImageResponse as CaptchaSolveImageResponse,
    type CaptchaStatusResponse as CaptchaStatusResponse,
    type CaptchaSolveParams as CaptchaSolveParams,
    type CaptchaSolveImageParams as CaptchaSolveImageParams,
  };
}
