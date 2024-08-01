// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SessionAPI from './session';

export class Session extends APIResource {
  /**
   * Release and delete a browser session using its ID
   */
  releaseSession(
    id: string,
    params: SessionReleaseSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeleteSessionResponse> {
    const { orgid } = params;
    return this._client.delete(`/v1/sessions/${id}`, {
      ...options,
      headers: { orgid: orgid, ...options?.headers },
    });
  }
}

export interface DeleteSessionResponse {
  /**
   * Indicates whether the session was successfully deleted
   */
  success: boolean;
}

export interface SessionReleaseSessionParams {
  /**
   * Organization ID
   */
  orgid: string;
}

export namespace Session {
  export import DeleteSessionResponse = SessionAPI.DeleteSessionResponse;
  export import SessionReleaseSessionParams = SessionAPI.SessionReleaseSessionParams;
}
