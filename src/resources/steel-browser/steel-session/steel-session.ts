// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as SteelSessionAPI from './steel-session';
import * as SteelContextAPI from './steel-context';

export class SteelSession extends APIResource {
  steelContext: SteelContextAPI.SteelContext = new SteelContextAPI.SteelContext(this._client);

  /**
   * Retrieve details of a specific saved browser context
   */
  getContext(id: string, options?: Core.RequestOptions): Core.APIPromise<SteelContextAPI.Context> {
    return this._client.get(`/v1/context/${id}`, options);
  }

  /**
   * Get detailed information about a specific browser session
   */
  getSessionData(
    id: string,
    params: SteelSessionGetSessionDataParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    const { orgid } = params;
    return this._client.get(`/v1/sessions/${id}`, {
      ...options,
      headers: { orgid: orgid, ...options?.headers },
    });
  }

  /**
   * Release and terminate a browser session using its ID
   */
  releaseSession(
    id: string,
    params: SteelSessionReleaseSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SteelSessionReleaseSessionResponse> {
    const { orgid } = params;
    return this._client.get(`/v1/sessions/${id}/release`, {
      ...options,
      headers: { orgid: orgid, ...options?.headers },
    });
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
   * WebSocket URL for connecting to the session
   */
  websocketUrl: string;
}

export interface SteelSessionReleaseSessionResponse {
  /**
   * A message describing the result of the release operation
   */
  message: string;

  /**
   * Indicates whether the session was successfully released
   */
  success: boolean;
}

export interface SteelSessionGetSessionDataParams {
  /**
   * Organization ID
   */
  orgid: string;
}

export interface SteelSessionReleaseSessionParams {
  /**
   * Organization ID
   */
  orgid: string;
}

export namespace SteelSession {
  export import Session = SteelSessionAPI.Session;
  export import SteelSessionReleaseSessionResponse = SteelSessionAPI.SteelSessionReleaseSessionResponse;
  export import SteelSessionGetSessionDataParams = SteelSessionAPI.SteelSessionGetSessionDataParams;
  export import SteelSessionReleaseSessionParams = SteelSessionAPI.SteelSessionReleaseSessionParams;
  export import SteelContext = SteelContextAPI.SteelContext;
  export import Context = SteelContextAPI.Context;
  export import SteelContextCreateContextResponse = SteelContextAPI.SteelContextCreateContextResponse;
  export import SteelContextDeleteContextResponse = SteelContextAPI.SteelContextDeleteContextResponse;
  export import SteelContextCreateContextParams = SteelContextAPI.SteelContextCreateContextParams;
}
