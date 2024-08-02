// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SessionsAPI from './sessions';

export class Sessions extends APIResource {
  /**
   * Get detailed information about a specific browser session
   */
  retrieve(
    id: string,
    params: SessionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionResponse> {
    const { orgid } = params;
    return this._client.get(`/v1/sessions/${id}`, {
      ...options,
      headers: { orgid: orgid, ...options?.headers },
    });
  }

  /**
   * Get a list of all active browser sessions for the organization
   */
  list(params: SessionListParams, options?: Core.RequestOptions): Core.APIPromise<SessionsResponse> {
    const { orgid } = params;
    return this._client.get('/v1/sessions', { ...options, headers: { orgid: orgid, ...options?.headers } });
  }

  /**
   * Start a new browser session for the organization
   */
  createNewSession(
    params: SessionCreateNewSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionResponse> {
    const { orgid, ...body } = params;
    return this._client.post('/v1/sessions', {
      body,
      ...options,
      headers: { orgid: orgid, ...options?.headers },
    });
  }

  /**
   * Release and terminate a browser session using its ID
   */
  release(
    id: string,
    params: SessionReleaseParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReleaseSessionResponse> {
    const { orgid } = params;
    return this._client.get(`/v1/sessions/${id}/release`, {
      ...options,
      headers: { orgid: orgid, ...options?.headers },
    });
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
   * Unique identifier for the session
   */
  id: string;

  /**
   * Timestamp when the session was created
   */
  createdAt: string;

  /**
   * Timestamp when the session was last updated
   */
  updatedAt: string;

  /**
   * WebSocket URL for connecting to the session
   */
  websocketUrl?: string;
}

export interface SessionsResponse {
  sessions: Array<SessionsResponse.Session>;
}

export namespace SessionsResponse {
  export interface Session {
    /**
     * Unique identifier for the session
     */
    id: string;

    /**
     * Timestamp when the session was created
     */
    createdAt: string;

    /**
     * Timestamp when the session was last updated
     */
    updatedAt: string;

    /**
     * WebSocket URL for connecting to the session
     */
    websocketUrl?: string;
  }
}

export interface SessionRetrieveParams {
  /**
   * Organization ID
   */
  orgid: string;
}

export interface SessionListParams {
  /**
   * Organization ID
   */
  orgid: string;
}

export interface SessionCreateNewSessionParams {
  /**
   * Body param: Unique identifier for the organization creating the session
   */
  orgId: string;

  /**
   * Header param: Organization ID
   */
  orgid: string;
}

export interface SessionReleaseParams {
  /**
   * Organization ID
   */
  orgid: string;
}

export namespace Sessions {
  export import ReleaseSessionResponse = SessionsAPI.ReleaseSessionResponse;
  export import SessionResponse = SessionsAPI.SessionResponse;
  export import SessionsResponse = SessionsAPI.SessionsResponse;
  export import SessionRetrieveParams = SessionsAPI.SessionRetrieveParams;
  export import SessionListParams = SessionsAPI.SessionListParams;
  export import SessionCreateNewSessionParams = SessionsAPI.SessionCreateNewSessionParams;
  export import SessionReleaseParams = SessionsAPI.SessionReleaseParams;
}
