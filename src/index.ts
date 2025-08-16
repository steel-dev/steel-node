// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type SessionsCursorParams, SessionsCursorResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import * as TopLevelAPI from './resources/top-level';
import {
  PdfParams,
  PdfResponse,
  ScrapeParams,
  ScrapeResponse,
  ScreenshotParams,
  ScreenshotResponse,
} from './resources/top-level';
import {
  CredentialCreateParams,
  CredentialCreateResponse,
  CredentialDeleteParams,
  CredentialDeleteResponse,
  CredentialListParams,
  CredentialListResponse,
  CredentialUpdateParams,
  CredentialUpdateResponse,
  Credentials,
} from './resources/credentials';
import { File, FileUploadParams, Files, Fileslist } from './resources/files';
import {
  Session,
  SessionContext,
  SessionCreateParams,
  SessionEventsResponse,
  SessionListParams,
  SessionLiveDetailsResponse,
  SessionReleaseAllParams,
  SessionReleaseAllResponse,
  SessionReleaseParams,
  SessionReleaseResponse,
  Sessions,
  Sessionslist,
  SessionslistSessionsSessionsCursor,
} from './resources/sessions/sessions';

export interface ClientOptions {
  /**
   * The API key required to authenticate the request. Typically provided in the header.
   */
  steelAPIKey?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['STEEL_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Steel API.
 */
export class Steel extends Core.APIClient {
  steelAPIKey: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Steel API.
   *
   * @param {string | null | undefined} [opts.steelAPIKey=process.env['STEEL_API_KEY'] ?? null]
   * @param {string} [opts.baseURL=process.env['STEEL_BASE_URL'] ?? https://api.steel.dev] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('STEEL_BASE_URL'),
    steelAPIKey = Core.readEnv('STEEL_API_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      steelAPIKey,
      ...opts,
      baseURL: baseURL || `https://api.steel.dev`,
    };

    super({
      baseURL: options.baseURL!,
      baseURLOverridden: baseURL ? baseURL !== 'https://api.steel.dev' : false,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.steelAPIKey = steelAPIKey;
  }

  credentials: API.Credentials = new API.Credentials(this);
  files: API.Files = new API.Files(this);
  sessions: API.Sessions = new API.Sessions(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.steel.dev';
  }

  /**
   * Generates a PDF from a specified webpage.
   */
  pdf(body: TopLevelAPI.PdfParams, options?: Core.RequestOptions): Core.APIPromise<TopLevelAPI.PdfResponse> {
    return this.post('/v1/pdf', { body, ...options });
  }

  /**
   * Extracts content from a specified URL.
   */
  scrape(
    body: TopLevelAPI.ScrapeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopLevelAPI.ScrapeResponse> {
    return this.post('/v1/scrape', { body, ...options });
  }

  /**
   * Captures a screenshot of a specified webpage.
   */
  screenshot(
    body: TopLevelAPI.ScreenshotParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopLevelAPI.ScreenshotResponse> {
    return this.post('/v1/screenshot', { body, ...options });
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.steelAPIKey == null) {
      return {};
    }
    return { 'steel-api-key': this.steelAPIKey };
  }

  static Steel = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static SteelError = Errors.SteelError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Steel.Credentials = Credentials;
Steel.Files = Files;
Steel.Sessions = Sessions;
Steel.SessionslistSessionsSessionsCursor = SessionslistSessionsSessionsCursor;

export declare namespace Steel {
  export type RequestOptions = Core.RequestOptions;

  export import SessionsCursor = Pagination.SessionsCursor;
  export {
    type SessionsCursorParams as SessionsCursorParams,
    type SessionsCursorResponse as SessionsCursorResponse,
  };

  export {
    type PdfResponse as PdfResponse,
    type ScrapeResponse as ScrapeResponse,
    type ScreenshotResponse as ScreenshotResponse,
    type PdfParams as PdfParams,
    type ScrapeParams as ScrapeParams,
    type ScreenshotParams as ScreenshotParams,
  };

  export {
    Credentials as Credentials,
    type CredentialCreateResponse as CredentialCreateResponse,
    type CredentialUpdateResponse as CredentialUpdateResponse,
    type CredentialListResponse as CredentialListResponse,
    type CredentialDeleteResponse as CredentialDeleteResponse,
    type CredentialCreateParams as CredentialCreateParams,
    type CredentialUpdateParams as CredentialUpdateParams,
    type CredentialListParams as CredentialListParams,
    type CredentialDeleteParams as CredentialDeleteParams,
  };

  export {
    Files as Files,
    type File as File,
    type Fileslist as Fileslist,
    type FileUploadParams as FileUploadParams,
  };

  export {
    Sessions as Sessions,
    type Session as Session,
    type SessionContext as SessionContext,
    type Sessionslist as Sessionslist,
    type SessionEventsResponse as SessionEventsResponse,
    type SessionLiveDetailsResponse as SessionLiveDetailsResponse,
    type SessionReleaseResponse as SessionReleaseResponse,
    type SessionReleaseAllResponse as SessionReleaseAllResponse,
    SessionslistSessionsSessionsCursor as SessionslistSessionsSessionsCursor,
    type SessionCreateParams as SessionCreateParams,
    type SessionListParams as SessionListParams,
    type SessionReleaseParams as SessionReleaseParams,
    type SessionReleaseAllParams as SessionReleaseAllParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  SteelError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Steel;
