// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SessionsAPI from './sessions';

export class Sessions extends APIResource {
  /**
   * Start a new browser session for the organization
   */
  create(params: SessionCreateParams, options?: Core.RequestOptions): Core.APIPromise<SessionCreateResponse> {
    const { orgid, ...body } = params;
    return this._client.post('/v1/sessions', {
      body,
      ...options,
      headers: { orgid: orgid, ...options?.headers },
    });
  }

  /**
   * Get detailed information about a specific browser session
   */
  retrieve(
    id: string,
    params: SessionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionRetrieveResponse> {
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
   * Release and delete a browser session using its ID
   */
  delete(
    id: string,
    params: SessionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionDeleteResponse> {
    const { orgid } = params;
    return this._client.delete(`/v1/sessions/${id}`, {
      ...options,
      headers: { orgid: orgid, ...options?.headers },
    });
  }
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

export interface SessionCreateResponse {
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

export interface SessionRetrieveResponse {
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

export interface SessionDeleteResponse {
  /**
   * Indicates whether the session was successfully deleted
   */
  success: boolean;
}

export interface SessionCreateParams {
  /**
   * Body param: Unique identifier for the organization creating the session
   */
  orgId: string;

  /**
   * Header param: Organization ID
   */
  orgid: string;
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

export interface SessionDeleteParams {
  /**
   * Organization ID
   */
  orgid: string;
}

export namespace Sessions {
  export import SessionsResponse = SessionsAPI.SessionsResponse;
  export import SessionCreateResponse = SessionsAPI.SessionCreateResponse;
  export import SessionRetrieveResponse = SessionsAPI.SessionRetrieveResponse;
  export import SessionDeleteResponse = SessionsAPI.SessionDeleteResponse;
  export import SessionCreateParams = SessionsAPI.SessionCreateParams;
  export import SessionRetrieveParams = SessionsAPI.SessionRetrieveParams;
  export import SessionListParams = SessionsAPI.SessionListParams;
  export import SessionDeleteParams = SessionsAPI.SessionDeleteParams;
}
