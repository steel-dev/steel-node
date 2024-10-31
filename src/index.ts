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
  Session,
  SessionContext,
  SessionCreateParams,
  SessionListParams,
  SessionListResponse,
  SessionListResponsesSessionsCursor,
  SessionReleaseAllResponse,
  SessionReleaseResponse,
  Sessions,
  Sessionslist,
} from './resources/sessions';

export interface ClientOptions {
  /**
   * The API key required to authenticate the request. Typically provided in the header.
   */
  steelAPIKey?: string | undefined;

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
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

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
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Steel API.
 */
export class Steel extends Core.APIClient {
  steelAPIKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Steel API.
   *
   * @param {string | undefined} [opts.steelAPIKey=process.env['STEEL_API_KEY'] ?? undefined]
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
    steelAPIKey = Core.readEnv('STEEL_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (steelAPIKey === undefined) {
      throw new Errors.SteelError(
        "The STEEL_API_KEY environment variable is missing or empty; either provide it, or instantiate the Steel client with an steelAPIKey option, like new Steel({ steelAPIKey: 'My Steel API Key' }).",
      );
    }

    const options: ClientOptions = {
      steelAPIKey,
      ...opts,
      baseURL: baseURL || `https://api.steel.dev`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.steelAPIKey = steelAPIKey;
  }

  sessions: API.Sessions = new API.Sessions(this);

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

export const SteelError = Errors.SteelError;
export const APIError = Errors.APIError;
export const APIConnectionError = Errors.APIConnectionError;
export const APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
export const APIUserAbortError = Errors.APIUserAbortError;
export const NotFoundError = Errors.NotFoundError;
export const ConflictError = Errors.ConflictError;
export const RateLimitError = Errors.RateLimitError;
export const BadRequestError = Errors.BadRequestError;
export const AuthenticationError = Errors.AuthenticationError;
export const InternalServerError = Errors.InternalServerError;
export const PermissionDeniedError = Errors.PermissionDeniedError;
export const UnprocessableEntityError = Errors.UnprocessableEntityError;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

Steel.Sessions = Sessions;
Steel.SessionListResponsesSessionsCursor = SessionListResponsesSessionsCursor;

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
    Sessions as Sessions,
    type Session as Session,
    type SessionContext as SessionContext,
    type Sessionslist as Sessionslist,
    type SessionListResponse as SessionListResponse,
    type SessionReleaseResponse as SessionReleaseResponse,
    type SessionReleaseAllResponse as SessionReleaseAllResponse,
    SessionListResponsesSessionsCursor as SessionListResponsesSessionsCursor,
    type SessionCreateParams as SessionCreateParams,
    type SessionListParams as SessionListParams,
  };
}

export default Steel;
