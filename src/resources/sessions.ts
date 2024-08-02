// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SessionsAPI from './sessions';

export class Sessions extends APIResource {
  /**
   * Start a new browser session
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
   * Get detailed information about a specific browser session
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Session> {
    return this._client.get(`/v1/sessions/${id}`, options);
  }

  /**
   * Get a list of browser sessions
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
  release(id: string, options?: Core.RequestOptions): Core.APIPromise<SessionReleaseResponse> {
    return this._client.get(`/v1/sessions/${id}/release`, options);
  }
}

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
   * Timestamp when the session was started
   */
  startDate: string;

  /**
   * When to timeout session in ms.
   */
  timeout: number;

  /**
   * WebSocket URL for connecting to the session
   */
  websocketUrl: string;
}

export interface SessionListResponse {
  sessions: Array<SessionListResponse.Session>;
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
     * Timestamp when the session was started
     */
    startDate: string;

    /**
     * When to timeout session in ms.
     */
    timeout: number;

    /**
     * WebSocket URL for connecting to the session
     */
    websocketUrl: string;
  }
}

export interface SessionReleaseResponse {
  /**
   * A message describing the result of the release operation
   */
  message: string;

  /**
   * Indicates whether the session was successfully released
   */
  success: boolean;
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
   * Flag to enable automatic captcha solving
   */
  solveCaptcha?: boolean;

  /**
   * How long after starting should the session timeout.
   */
  timeout?: number;

  /**
   * Custom user agent string for the browser session
   */
  userAgent?: string;
}

export interface SessionListParams {
  /**
   * Flag to retrieve only live sessions (default: true)
   */
  live_only?: boolean;
}

export namespace Sessions {
  export import Session = SessionsAPI.Session;
  export import SessionListResponse = SessionsAPI.SessionListResponse;
  export import SessionReleaseResponse = SessionsAPI.SessionReleaseResponse;
  export import SessionCreateParams = SessionsAPI.SessionCreateParams;
  export import SessionListParams = SessionsAPI.SessionListParams;
}
