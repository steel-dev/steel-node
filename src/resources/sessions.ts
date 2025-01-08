// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { SessionsCursor, type SessionsCursorParams } from '../pagination';

export class Sessions extends APIResource {
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
  ): Core.PagePromise<SessionListResponsesSessionsCursor, SessionListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionListResponsesSessionsCursor, SessionListResponse>;
  list(
    query: SessionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionListResponsesSessionsCursor, SessionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/sessions', SessionListResponsesSessionsCursor, { query, ...options });
  }

  /**
   * Fetches the context data of a specific session.
   */
  context(id: string, options?: Core.RequestOptions): Core.APIPromise<SessionContext> {
    return this._client.get(`/v1/sessions/${id}/context`, options);
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

export class SessionListResponsesSessionsCursor extends SessionsCursor<SessionListResponse> {}

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
   * Duration of the session in milliseconds
   */
  duration: number;

  /**
   * Number of events processed in the session
   */
  eventCount: number;

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

/**
 * Context data of a browser session, including cookies and local storage.
 */
export interface SessionContext {
  /**
   * List of cookies associated with the session
   */
  cookies: Array<Record<string, unknown>>;

  /**
   * Local storage data associated with the session
   */
  localStorage: Record<string, unknown>;
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
     * Duration of the session in milliseconds
     */
    duration: number;

    /**
     * Number of events processed in the session
     */
    eventCount: number;

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
}

/**
 * Represents the data structure for a browser session, including its configuration
 * and status.
 */
export interface SessionListResponse {
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
   * Duration of the session in milliseconds
   */
  duration: number;

  /**
   * Number of events processed in the session
   */
  eventCount: number;

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
   * Enable Selenium mode for the browser session (default is false). Use this when
   * you plan to connect to the browser session via Selenium.
   */
  isSelenium?: boolean;

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
   * Session context data to be used in the created session. Sessions will start with
   * an empty context by default.
   */
  export interface SessionContext {
    /**
     * Cookies to initialize in the session
     */
    cookies?: Array<Record<string, unknown>>;

    /**
     * Local storage items to initialize in the session
     */
    localStorage?: Array<Record<string, unknown>>;
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

Sessions.SessionListResponsesSessionsCursor = SessionListResponsesSessionsCursor;

export declare namespace Sessions {
  export {
    type Session as Session,
    type SessionContext as SessionContext,
    type Sessionslist as Sessionslist,
    type SessionListResponse as SessionListResponse,
    type SessionReleaseResponse as SessionReleaseResponse,
    type SessionReleaseAllResponse as SessionReleaseAllResponse,
    SessionListResponsesSessionsCursor as SessionListResponsesSessionsCursor,
    type SessionCreateParams as SessionCreateParams,
    type SessionListParams as SessionListParams,
    type SessionReleaseParams as SessionReleaseParams,
    type SessionReleaseAllParams as SessionReleaseAllParams,
  };
}
