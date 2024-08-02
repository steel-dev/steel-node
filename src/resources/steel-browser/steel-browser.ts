// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SteelBrowserAPI from './steel-browser';
import * as SteelSessionAPI from './steel-session/steel-session';
import { type Response } from '../../_shims/index';

export class SteelBrowser extends APIResource {
  steelSession: SteelSessionAPI.SteelSession = new SteelSessionAPI.SteelSession(this._client);

  /**
   * Start a new browser session for the organization
   */
  createSession(
    params: SteelBrowserCreateSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SteelSessionAPI.Session> {
    const { orgid, ...body } = params;
    return this._client.post('/v1/sessions', {
      body,
      ...options,
      headers: { orgid: orgid, ...options?.headers },
    });
  }

  /**
   * Get a list of browser sessions for the organization
   */
  listSessions(
    params: SteelBrowserListSessionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SteelBrowserListSessionsResponse> {
    const { orgid, ...query } = params;
    return this._client.get('/v1/sessions', {
      query,
      ...options,
      headers: { orgid: orgid, ...options?.headers },
    });
  }

  /**
   * Generate a PDF from the specified webpage. This endpoint supports bulk
   * operations by passing an array of URLs.
   */
  pdf(body: SteelBrowserPdfParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post('/v1/pdf', { body, ...options, __binaryResponse: true });
  }

  /**
   * Get detailed information about a specific browser session
   */
  retrieveSession(
    id: string,
    params: SteelBrowserRetrieveSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SteelSessionAPI.Session> {
    const { orgid } = params;
    return this._client.get(`/v1/sessions/${id}`, {
      ...options,
      headers: { orgid: orgid, ...options?.headers },
    });
  }

  /**
   * Scrape content from a webpage. This endpoint supports bulk operations by passing
   * an array of URLs. You can specify the desired return type(s) using the 'format'
   * parameter and request a screenshot using the 'screenshot' flag.
   */
  scrape(
    params: SteelBrowserScrapeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SteelBrowserScrapeResponse> {
    const { orgid, ...body } = params;
    return this._client.post('/v1/scrape', {
      body,
      ...options,
      headers: { orgid: orgid, ...options?.headers },
    });
  }

  /**
   * Capture a screenshot of the specified webpage. This endpoint supports bulk
   * operations by passing an array of URLs.
   */
  screenshot(params: SteelBrowserScreenshotParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    const { orgid, ...body } = params;
    return this._client.post('/v1/screenshot', {
      body,
      ...options,
      headers: { orgid: orgid, ...options?.headers },
      __binaryResponse: true,
    });
  }
}

export interface SteelBrowserListSessionsResponse {
  sessions: Array<SteelBrowserListSessionsResponse.Session>;
}

export namespace SteelBrowserListSessionsResponse {
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
}

export interface SteelBrowserScrapeResponse {
  /**
   * The cleaned HTML content of the scraped webpage
   */
  cleaned_html?: string;

  /**
   * The raw HTML content of the scraped webpage
   */
  html?: string;

  /**
   * The content of the webpage converted to Markdown format
   */
  markdown?: string;

  /**
   * The readable content extracted from the webpage
   */
  readability?: unknown;

  /**
   * Base64 encoded screenshot of the webpage (if requested)
   */
  screenshot?: Core.Uploadable;
}

export interface SteelBrowserCreateSessionParams {
  /**
   * Body param: Unique identifier for the organization creating the session
   */
  orgId: string;

  /**
   * Header param: Organization ID
   */
  orgid: string;

  /**
   * Body param: Custom user context data for the session
   */
  contextData?: unknown;

  /**
   * Body param: Proxy configuration for the browser session
   */
  proxy?: string;

  /**
   * Body param: Region for the browser session
   */
  region?: 'CA' | 'US' | 'FR';

  /**
   * Body param: Flag to enable automatic captcha solving
   */
  solveCaptcha?: boolean;

  /**
   * Body param: Custom user agent string for the browser session
   */
  userAgent?: string;
}

export interface SteelBrowserListSessionsParams {
  /**
   * Header param: Organization ID
   */
  orgid: string;

  /**
   * Query param: Flag to retrieve only live sessions (default: true)
   */
  live_only?: boolean;
}

export interface SteelBrowserPdfParams {
  /**
   * The URL of the webpage to convert to PDF
   */
  url: string;
}

export interface SteelBrowserRetrieveSessionParams {
  /**
   * Organization ID
   */
  orgid: string;
}

export interface SteelBrowserScrapeParams {
  /**
   * Body param: The URL of the webpage to scrape
   */
  url: string;

  /**
   * Header param: Organization ID
   */
  orgid: string;

  /**
   * Body param: The desired format(s) for the scraped content
   */
  format?: Array<'html' | 'cleaned_html' | 'readability' | 'markdown'>;

  /**
   * Body param: Flag to include a screenshot of the page in the response
   */
  screenshot?: boolean;
}

export interface SteelBrowserScreenshotParams {
  /**
   * Body param: The URL of the webpage to screenshot
   */
  url: string;

  /**
   * Header param: Organization ID
   */
  orgid: string;
}

export namespace SteelBrowser {
  export import SteelBrowserListSessionsResponse = SteelBrowserAPI.SteelBrowserListSessionsResponse;
  export import SteelBrowserScrapeResponse = SteelBrowserAPI.SteelBrowserScrapeResponse;
  export import SteelBrowserCreateSessionParams = SteelBrowserAPI.SteelBrowserCreateSessionParams;
  export import SteelBrowserListSessionsParams = SteelBrowserAPI.SteelBrowserListSessionsParams;
  export import SteelBrowserPdfParams = SteelBrowserAPI.SteelBrowserPdfParams;
  export import SteelBrowserRetrieveSessionParams = SteelBrowserAPI.SteelBrowserRetrieveSessionParams;
  export import SteelBrowserScrapeParams = SteelBrowserAPI.SteelBrowserScrapeParams;
  export import SteelBrowserScreenshotParams = SteelBrowserAPI.SteelBrowserScreenshotParams;
  export import SteelSession = SteelSessionAPI.SteelSession;
  export import Session = SteelSessionAPI.Session;
  export import SteelSessionReleaseSessionResponse = SteelSessionAPI.SteelSessionReleaseSessionResponse;
  export import SteelSessionGetSessionDataParams = SteelSessionAPI.SteelSessionGetSessionDataParams;
  export import SteelSessionReleaseSessionParams = SteelSessionAPI.SteelSessionReleaseSessionParams;
}
