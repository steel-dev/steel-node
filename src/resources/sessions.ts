// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SessionsAPI from './sessions';
import { CursorPage } from '../pagination';

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
   * Get the browser context for a specific session
   */
  getContext(id: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get(`/v1/sessions/${id}/context`, options);
  }

  /**
   * Get detailed information about a specific browser session
   */
  getData(id: string, options?: Core.RequestOptions): Core.APIPromise<Session> {
    return this._client.get(`/v1/sessions/${id}`, options);
  }

  /**
   * Release and terminate a browser session using its ID
   */
  release(id: string, options?: Core.RequestOptions): Core.APIPromise<ReleaseSessionResponse> {
    return this._client.get(`/v1/sessions/${id}/release`, options);
  }
}

export class SessionsCursorPage extends CursorPage<Session> {}

export interface CreateSessionRequest {
  /**
   * Proxy configuration for the browser session
   */
  proxy?: string;

  /**
   * Region for the browser session
   */
  region?: 'CA' | 'US' | 'FR';

  /**
   * Custom session context data to be used in the created sessio
   */
  sessionContext?: unknown;

  /**
   * How long after starting should the session timeout (in milliseconds).
   */
  sessionTimeout?: number;

  /**
   * Flag to enable automatic captcha solving
   */
  solveCaptcha?: boolean;

  /**
   * Flag to enable stealth mode for the browser session (default: false)
   */
  stealthMode?: boolean;

  /**
   * Custom user agent string for the browser session
   */
  userAgent?: string;
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

/**
 * Represents the information for a browser session, including both static and
 * dynamic data.
 */
export interface Session {
  /**
   * Duration of the session in seconds (updates in real-time for live sessions)
   */
  duration: number;

  /**
   * Number of events that occurred in the session (updates in real-time for live
   * sessions)
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
   * When to timeout session in milliseconds
   */
  sessionTimeout: number;

  /**
   * Timestamp when the session was started
   */
  startDate: string;

  /**
   * Indicates if stealth mode is enabled for the session
   */
  stealthMode: boolean;

  /**
   * WebSocket URL for connecting to the session
   */
  websocketUrl: string;

  /**
   * debug URL for debugging or embedding the session
   */
  debugUrl?: string;

  /**
   * URL for viewing the session in the Steel Session Viewer
   */
  sessionViewerUrl?: string;
}

/**
 * A JSON object representing the browser context
 */
export type SessionGetContextResponse = unknown;

export interface SessionCreateParams {
  /**
   * Proxy configuration for the browser session
   */
  proxy?: string;

  /**
   * Region for the browser session
   */
  region?: 'CA' | 'US' | 'FR';

  /**
   * Custom session context data to be used in the created sessio
   */
  sessionContext?: unknown;

  /**
   * How long after starting should the session timeout (in milliseconds).
   */
  sessionTimeout?: number;

  /**
   * Flag to enable automatic captcha solving
   */
  solveCaptcha?: boolean;

  /**
   * Flag to enable stealth mode for the browser session (default: false)
   */
  stealthMode?: boolean;

  /**
   * Custom user agent string for the browser session
   */
  userAgent?: string;
}

export namespace Sessions {
  export import CreateSessionRequest = SessionsAPI.CreateSessionRequest;
  export import ReleaseSessionResponse = SessionsAPI.ReleaseSessionResponse;
  export import Session = SessionsAPI.Session;
  export import SessionGetContextResponse = SessionsAPI.SessionGetContextResponse;
  export import SessionCreateParams = SessionsAPI.SessionCreateParams;
}
