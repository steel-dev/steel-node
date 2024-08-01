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
  export import PdfParams = TopLevelAPI.PdfParams;
  export import ScrapeParams = TopLevelAPI.ScrapeParams;
  export import ScreenshotParams = TopLevelAPI.ScreenshotParams;
}
