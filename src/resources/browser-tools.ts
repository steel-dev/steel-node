// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as BrowserToolsAPI from './browser-tools';
import { type Response } from '../_shims/index';

export class BrowserTools extends APIResource {
  /**
   * Generate a PDF from the specified webpage. This endpoint supports bulk
   * operations by passing an array of URLs.
   */
  pdf(body: BrowserToolPdfParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post('/v1/pdf', { body, ...options, __binaryResponse: true });
  }

  /**
   * Scrape content from a webpage. This endpoint supports bulk operations by passing
   * an array of URLs. You can specify the desired return type(s) using the 'format'
   * parameter and request a screenshot using the 'screenshot' flag.
   */
  scrape(body: BrowserToolScrapeParams, options?: Core.RequestOptions): Core.APIPromise<Scrape> {
    return this._client.post('/v1/scrape', { body, ...options });
  }

  /**
   * Capture a screenshot of the specified webpage. This endpoint supports bulk
   * operations by passing an array of URLs.
   */
  screenshot(body: BrowserToolScreenshotParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post('/v1/screenshot', { body, ...options, __binaryResponse: true });
  }
}

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
  screenshot?: Core.Uploadable;
}

export interface BrowserToolPdfParams {
  /**
   * The URL of the webpage to convert to PDF
   */
  url: string;
}

export interface BrowserToolScrapeParams {
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

export interface BrowserToolScreenshotParams {
  /**
   * The URL of the webpage to screenshot
   */
  url: string;
}

export namespace BrowserTools {
  export import Scrape = BrowserToolsAPI.Scrape;
  export import BrowserToolPdfParams = BrowserToolsAPI.BrowserToolPdfParams;
  export import BrowserToolScrapeParams = BrowserToolsAPI.BrowserToolScrapeParams;
  export import BrowserToolScreenshotParams = BrowserToolsAPI.BrowserToolScreenshotParams;
}
