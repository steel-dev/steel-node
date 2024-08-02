// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';
import * as TopLevelAPI from './resources/top-level';
import { type Response } from './_shims/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['STEEL_BEARER_TOKEN'].
   */
  bearerToken?: string | undefined;

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
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Steel API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['STEEL_BEARER_TOKEN'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['STEEL_BASE_URL'] ?? http://api.steel.dev] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('STEEL_BASE_URL'),
    bearerToken = Core.readEnv('STEEL_BEARER_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.SteelError(
        "The STEEL_BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Steel client with an bearerToken option, like new Steel({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL: baseURL || `http://api.steel.dev`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
  }

  sessions: API.Sessions = new API.Sessions(this);
  contexts: API.Contexts = new API.Contexts(this);

  /**
   * Generate a PDF from the specified webpage. This endpoint supports bulk
   * operations by passing an array of URLs.
   */
  pdf(body: TopLevelAPI.PdfParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this.post('/v1/pdf', { body, ...options, __binaryResponse: true });
  }

  /**
   * Scrape content from a webpage. This endpoint supports bulk operations by passing
   * an array of URLs. You can specify the desired return type(s) using the 'format'
   * parameter.
   */
  scrape(
    params: TopLevelAPI.ScrapeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopLevelAPI.ScrapeResponse> {
    const { orgid, ...body } = params;
    return this.post('/v1/scrape', { body, ...options, headers: { orgid: orgid, ...options?.headers } });
  }

  /**
   * Capture a screenshot of the specified webpage. This endpoint supports bulk
   * operations by passing an array of URLs.
   */
  screenshot(params: TopLevelAPI.ScreenshotParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    const { orgid, ...body } = params;
    return this.post('/v1/screenshot', {
      body,
      ...options,
      headers: { orgid: orgid, ...options?.headers },
      __binaryResponse: true,
    });
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
    return { Authorization: `Bearer ${this.bearerToken}` };
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

export const {
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
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Steel {
  export import RequestOptions = Core.RequestOptions;

  export import ScrapeResponse = API.ScrapeResponse;
  export import PdfParams = API.PdfParams;
  export import ScrapeParams = API.ScrapeParams;
  export import ScreenshotParams = API.ScreenshotParams;

  export import Sessions = API.Sessions;
  export import ReleaseSessionResponse = API.ReleaseSessionResponse;
  export import SessionResponse = API.SessionResponse;
  export import SessionsResponse = API.SessionsResponse;
  export import SessionRetrieveParams = API.SessionRetrieveParams;
  export import SessionListParams = API.SessionListParams;
  export import SessionCreateNewSessionParams = API.SessionCreateNewSessionParams;
  export import SessionReleaseParams = API.SessionReleaseParams;

  export import Contexts = API.Contexts;
  export import CreateContextResponse = API.CreateContextResponse;
  export import DeleteContextResponse = API.DeleteContextResponse;
  export import GetContextResponse = API.GetContextResponse;
  export import GetContextsResponse = API.GetContextsResponse;
  export import ContextCreateParams = API.ContextCreateParams;
}

export default Steel;
