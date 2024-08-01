// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as TopLevelAPI from './top-level';

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

export interface CreateSessionParams {
  /**
   * Body param: Unique identifier for the organization creating the session
   */
  orgId: string;

  /**
   * Header param: Organization ID
   */
  orgid: string;
}

export interface GetSessionsParams {
  /**
   * Organization ID
   */
  orgid: string;
}

export interface PdfParams {
  /**
   * The URL of the webpage to convert to PDF
   */
  url: string;
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
  export import ScrapeResponse = TopLevelAPI.ScrapeResponse;
  export import SessionResponse = TopLevelAPI.SessionResponse;
  export import SessionsResponse = TopLevelAPI.SessionsResponse;
  export import CreateSessionParams = TopLevelAPI.CreateSessionParams;
  export import GetSessionsParams = TopLevelAPI.GetSessionsParams;
  export import PdfParams = TopLevelAPI.PdfParams;
  export import ScrapeParams = TopLevelAPI.ScrapeParams;
  export import ScreenshotParams = TopLevelAPI.ScreenshotParams;
}
