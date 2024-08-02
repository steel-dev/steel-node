// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as TopLevelAPI from './top-level';
import { type Uploadable } from '../core';

export interface ListSessionsResponse {
  sessions: Array<ListSessionsResponse.Session>;
}

export namespace ListSessionsResponse {
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
     * When to timeout session in ms.
     */
    timeout: number;

    /**
     * WebSocket URL for connecting to the session
     */
    websocketUrl: string;
  }
}

export interface ScrapeResponse {
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
  screenshot?: Uploadable;
}

export interface CreateSessionParams {
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
   * Body param: How long after starting should the session timeout.
   */
  timeout?: number;

  /**
   * Body param: Custom user agent string for the browser session
   */
  userAgent?: string;
}

export interface ListSessionsParams {
  /**
   * Header param: Organization ID
   */
  orgid: string;

  /**
   * Query param: Flag to retrieve only live sessions (default: true)
   */
  live_only?: boolean;
}

export interface PdfParams {
  /**
   * The URL of the webpage to convert to PDF
   */
  url: string;
}

export interface RetrieveSessionParams {
  /**
   * Organization ID
   */
  orgid: string;
}

export interface ScrapeParams {
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

export interface ScreenshotParams {
  /**
   * Body param: The URL of the webpage to screenshot
   */
  url: string;

  /**
   * Header param: Organization ID
   */
  orgid: string;
}

export namespace TopLevel {
  export import ListSessionsResponse = TopLevelAPI.ListSessionsResponse;
  export import ScrapeResponse = TopLevelAPI.ScrapeResponse;
  export import CreateSessionParams = TopLevelAPI.CreateSessionParams;
  export import ListSessionsParams = TopLevelAPI.ListSessionsParams;
  export import PdfParams = TopLevelAPI.PdfParams;
  export import RetrieveSessionParams = TopLevelAPI.RetrieveSessionParams;
  export import ScrapeParams = TopLevelAPI.ScrapeParams;
  export import ScreenshotParams = TopLevelAPI.ScreenshotParams;
}
