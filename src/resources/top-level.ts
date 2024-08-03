// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as TopLevelAPI from './top-level';
import { type Uploadable } from '../core';

export interface Scrape {
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

export interface PdfParams {
  /**
   * The URL of the webpage to convert to PDF
   */
  url: string;
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
  export import Scrape = TopLevelAPI.Scrape;
  export import PdfParams = TopLevelAPI.PdfParams;
  export import ScrapeParams = TopLevelAPI.ScrapeParams;
  export import ScreenshotParams = TopLevelAPI.ScreenshotParams;
}
