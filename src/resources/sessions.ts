// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SessionsAPI from './sessions';

export class Sessions extends APIResource {
  /**
   * Start a new browser session
   */
  create(body?: SessionCreateParams, options?: Core.RequestOptions): Core.APIPromise<SessionResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<SessionResponse>;
  create(
    body: SessionCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/v1/sessions', { body, ...options });
  }

  /**
   * Get detailed information about a specific browser session
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<SessionResponse> {
    return this._client.get(`/v1/sessions/${id}`, options);
  }

  /**
   * Get a paginated list of browser sessions. Use the `next_cursor` from the
   * response to fetch the next page of results.
   */
  list(query?: SessionListParams, options?: Core.RequestOptions): Core.APIPromise<SessionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SessionListResponse>;
  list(
    query: SessionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/sessions', { query, ...options });
  }

  /**
   * Release and terminate a browser session using its ID
   */
  release(id: string, options?: Core.RequestOptions): Core.APIPromise<ReleaseSessionResponse> {
    return this._client.get(`/v1/sessions/${id}/release`, options);
  }
}

export interface ReleaseSessionResponse {
  /**
   * A message describing the result of the release operation
   */
  message: string;

  /**
   * Indicates whether the session was successfully released
   */
  success: boolean;
}

export interface SessionResponse {
  /**
   * Duration of the session in seconds
   */
  duration: number;

  /**
   * Number of events that occurred in the session
   */
  eventCount: number;

  /**
   * Indicates if the session is currently active
   */
  isLive: boolean;

  /**
   * Unique identifier for the session
   */
  sessionId: string;

  /**
   * When to timeout session in milliseconds.
   */
  sessionTimeout: number;

  /**
   * Timestamp when the session was started
   */
  startDate: string;

  /**
   * WebSocket URL for connecting to the session
   */
  websocketUrl: string;
}

export interface SessionListResponse {
  /**
   * Cursor to use for the next page of results. If null, there are no more results.
   */
  next_cursor: string;

  sessions: Array<SessionListResponse.Session>;

  /**
   * Total number of sessions matching the query
   */
  total_count: number;
}

export namespace SessionListResponse {
  export interface Session {
    /**
     * Duration of the session in seconds
     */
    duration: number;

    /**
     * Number of events that occurred in the session
     */
    eventCount: number;

    /**
     * Indicates if the session is currently active
     */
    isLive: boolean;

    /**
     * Unique identifier for the session
     */
    sessionId: string;

    /**
     * When to timeout session in milliseconds.
     */
    sessionTimeout: number;

    /**
     * Timestamp when the session was started
     */
    startDate: string;

    /**
     * WebSocket URL for connecting to the session
     */
    websocketUrl: string;
  }
}

export interface SessionCreateParams {
  /**
   * Custom user context data for the session
   */
  contextData?: unknown;

  /**
   * Proxy configuration for the browser session
   */
  proxy?: string;

  /**
   * Region for the browser session
   */
  region?: 'CA' | 'US' | 'FR';

  /**
   * How long after starting should the session timeout (in milliseconds).
   */
  sessionTimeout?: number;

  /**
   * Flag to enable automatic captcha solving
   */
  solveCaptcha?: boolean;

  /**
   * Custom user agent string for the browser session
   */
  userAgent?: string;
}

export interface SessionListParams {
  /**
   * Cursor for pagination, use the `next_cursor` from the previous response
   */
  cursor?: string;

  /**
   * Number of sessions to return per request (default: 25, max: 100)
   */
  limit?: number;

  /**
   * Flag to retrieve only live sessions (default: true)
   */
  live_only?: boolean;
}

export namespace Sessions {
  export import ReleaseSessionResponse = SessionsAPI.ReleaseSessionResponse;
  export import SessionResponse = SessionsAPI.SessionResponse;
  export import SessionListResponse = SessionsAPI.SessionListResponse;
  export import SessionCreateParams = SessionsAPI.SessionCreateParams;
  export import SessionListParams = SessionsAPI.SessionListParams;
}
