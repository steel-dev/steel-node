// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as SessionsAPI from './sessions';

export class Sessions extends APIResource {
  create(body: SessionCreateParams, options?: Core.RequestOptions): Core.APIPromise<Session> {
    return this._client.post(
      '/v1/sdk/sessions/',
      Core.maybeMultipartFormRequestOptions({ body, ...options }),
    );
  }

  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Session> {
    return this._client.get(`/v1/sdk/sessions/${id}/`, options);
  }

  update(id: string, body?: SessionUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Session>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<Session>;
  update(
    id: string,
    body: SessionUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(
      `/v1/sdk/sessions/${id}/`,
      Core.maybeMultipartFormRequestOptions({ body, ...options }),
    );
  }

  list(options?: Core.RequestOptions): Core.APIPromise<SessionListResponse> {
    return this._client.get('/v1/sdk/sessions/', options);
  }

  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/sdk/sessions/${id}/`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface Session {
  id: string;

  created_at: string;

  updated_at: string;

  websocket_url?: string | null;
}

export type SessionListResponse = Array<Session>;

export interface SessionCreateParams {
  org_id: string;
}

export interface SessionUpdateParams {
  websocket_url?: string | null;
}

export namespace Sessions {
  export import Session = SessionsAPI.Session;
  export import SessionListResponse = SessionsAPI.SessionListResponse;
  export import SessionCreateParams = SessionsAPI.SessionCreateParams;
  export import SessionUpdateParams = SessionsAPI.SessionUpdateParams;
}
