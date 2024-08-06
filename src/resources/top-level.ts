// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as TopLevelAPI from './top-level';
import { type CursorPageParams } from '../pagination';
import { SessionsCursorPage } from './sessions';

export interface PdfRequest {
  /**
   * The URL of the webpage to convert to PDF
   */
  url: string;
}

export interface PdfResponse {
  /**
   * URL where the generated PDF is hosted
   */
  url: string;
}

export interface ScrapeRequest {
  /**
   * The URL of the webpage to scrape
   */
  url: string;

  /**
   * The desired format(s) for the scraped content
   */
  format?: Array<'html' | 'cleaned_html' | 'readability' | 'markdown'>;

  /**
   * Flag to include a PDF of the page in the response
   */
  pdf?: boolean;

  /**
   * Flag to include a screenshot of the page in the response
   */
  screenshot?: boolean;
}

export interface ScrapeResponse {
  content?: ScrapeResponse.Content;

  links?: Array<ScrapeResponse.Link>;

  metadata?: ScrapeResponse.Metadata;

  pdf?: ScrapeResponse.Pdf;

  screenshot?: ScrapeResponse.Screenshot;
}

export namespace ScrapeResponse {
  export interface Content {
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
  }

  export interface Link {
    /**
     * The text content of the link
     */
    text?: string;

    /**
     * The URL of the link
     */
    url?: string;
  }

  export interface Metadata {
    /**
     * The description of the webpage
     */
    description?: string;

    /**
     * The detected language of the webpage
     */
    language?: string;

    /**
     * The Open Graph description
     */
    ogDescription?: string;

    /**
     * The Open Graph image URL
     */
    ogImage?: string;

    /**
     * The Open Graph title
     */
    ogTitle?: string;

    /**
     * The timestamp of when the content was published (if available)
     */
    published_timestamp?: string;

    /**
     * The HTTP status code of the response
     */
    statusCode?: number;

    /**
     * The timestamp of when the scrape was performed
     */
    timestamp?: string;

    /**
     * The title of the webpage
     */
    title?: string;

    /**
     * The source URL of the scraped page
     */
    urlSource?: string;
  }

  export interface Pdf {
    /**
     * The URL of the generated PDF
     */
    url?: string;
  }

  export interface Screenshot {
    /**
     * The URL of the screenshot image
     */
    url?: string;
  }
}

export interface ScreenshotRequest {
  /**
   * The URL of the webpage to screenshot
   */
  url: string;
}

export interface ScreenshotResponse {
  /**
   * URL where the screenshot image is hosted
   */
  url: string;
}

/**
 * Represents the information for a browser session, including both static and
 * dynamic data.
 */
export interface Session {
  /**
   * Duration of the session in seconds (updates in real-time for live sessions)
   */
  duration: number;

  /**
   * Number of events that occurred in the session (updates in real-time for live
   * sessions)
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
   * When to timeout session in milliseconds
   */
  sessionTimeout: number;

  /**
   * Timestamp when the session was started
   */
  startDate: string;

  /**
   * Indicates if stealth mode is enabled for the session
   */
  stealthMode: boolean;

  /**
   * WebSocket URL for connecting to the session
   */
  websocketUrl: string;

  /**
   * debug URL for debugging or embedding the session
   */
  debugUrl?: string;

  /**
   * URL for viewing the session in the Steel Session Viewer
   */
  sessionViewerUrl?: string;
}

export interface GeneratePdfParams {
  /**
   * The URL of the webpage to convert to PDF
   */
  url: string;
}

export interface ListSessionsParams extends CursorPageParams {
  /**
   * Flag to retrieve only live sessions (default: true)
   */
  live_only?: boolean;
}

export interface ScrapeParams {
  /**
   * The URL of the webpage to scrape
   */
  url: string;

  /**
   * The desired format(s) for the scraped content
   */
  format?: Array<'html' | 'cleaned_html' | 'readability' | 'markdown'>;

  /**
   * Flag to include a PDF of the page in the response
   */
  pdf?: boolean;

  /**
   * Flag to include a screenshot of the page in the response
   */
  screenshot?: boolean;
}

export interface ScreenshotParams {
  /**
   * The URL of the webpage to screenshot
   */
  url: string;
}

export namespace TopLevel {
  export import PdfRequest = TopLevelAPI.PdfRequest;
  export import PdfResponse = TopLevelAPI.PdfResponse;
  export import ScrapeRequest = TopLevelAPI.ScrapeRequest;
  export import ScrapeResponse = TopLevelAPI.ScrapeResponse;
  export import ScreenshotRequest = TopLevelAPI.ScreenshotRequest;
  export import ScreenshotResponse = TopLevelAPI.ScreenshotResponse;
  export import Session = TopLevelAPI.Session;
  export import GeneratePdfParams = TopLevelAPI.GeneratePdfParams;
  export import ListSessionsParams = TopLevelAPI.ListSessionsParams;
  export import ScrapeParams = TopLevelAPI.ScrapeParams;
  export import ScreenshotParams = TopLevelAPI.ScreenshotParams;
}

export { SessionsCursorPage };
