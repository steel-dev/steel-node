// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface PdfResponse {
  /**
   * URL where the PDF is hosted
   */
  url: string;
}

/**
 * Response from a successful scrape request
 */
export interface ScrapeResponse {
  content: ScrapeResponse.Content;

  links: Array<ScrapeResponse.Link>;

  metadata: ScrapeResponse.Metadata;

  pdf?: ScrapeResponse.Pdf;

  screenshot?: ScrapeResponse.Screenshot;
}

export namespace ScrapeResponse {
  export interface Content {
    /**
     * Cleaned HTML content of the webpage
     */
    cleaned_html?: string;

    /**
     * Raw HTML content of the webpage
     */
    html?: string;

    /**
     * Webpage content converted to Markdown
     */
    markdown?: string;

    /**
     * Webpage content in Readability format
     */
    readability?: { [key: string]: unknown };
  }

  export interface Link {
    /**
     * Text content of the link
     */
    text: string;

    /**
     * URL of the link
     */
    url: string;
  }

  export interface Metadata {
    /**
     * HTTP status code of the response
     */
    statusCode: number;

    /**
     * Author of the article content
     */
    articleAuthor?: string;

    /**
     * Author of the webpage content
     */
    author?: string;

    /**
     * Canonical URL of the webpage
     */
    canonical?: string;

    /**
     * Description of the webpage
     */
    description?: string;

    /**
     * Favicon URL of the website
     */
    favicon?: string;

    /**
     * JSON-LD structured data from the webpage
     */
    jsonLd?: unknown;

    /**
     * Keywords associated with the webpage
     */
    keywords?: string;

    /**
     * Detected language of the webpage
     */
    language?: string;

    /**
     * Last modification time of the content
     */
    modifiedTime?: string;

    /**
     * Open Graph description
     */
    ogDescription?: string;

    /**
     * Open Graph image URL
     */
    ogImage?: string;

    /**
     * Open Graph site name
     */
    ogSiteName?: string;

    /**
     * Open Graph title
     */
    ogTitle?: string;

    /**
     * Open Graph URL
     */
    ogUrl?: string;

    /**
     * Publication time of the content
     */
    publishedTime?: string;

    /**
     * Timestamp when the scrape was performed
     */
    timestamp?: string;

    /**
     * Title of the webpage
     */
    title?: string;

    /**
     * Source URL of the scraped page
     */
    urlSource?: string;
  }

  export interface Pdf {
    /**
     * URL of the generated PDF
     */
    url: string;
  }

  export interface Screenshot {
    /**
     * URL of the screenshot image
     */
    url: string;
  }
}

export interface ScreenshotResponse {
  /**
   * URL where the screenshot is hosted
   */
  url: string;
}

export interface PdfParams {
  /**
   * URL of the webpage to convert to PDF
   */
  url: string;

  /**
   * Delay before generating the PDF (in milliseconds)
   */
  delay?: number;

  /**
   * The desired region for the action to be performed in
   */
  region?: 'lax' | 'ord' | 'iad' | 'bom' | 'scl' | 'fra' | 'hkg';

  /**
   * Use a Steel-provided residential proxy for generating the PDF
   */
  useProxy?: boolean;
}

export interface ScrapeParams {
  /**
   * URL of the webpage to scrape
   */
  url: string;

  /**
   * Delay before scraping (in milliseconds)
   */
  delay?: number;

  /**
   * Desired format(s) for the scraped content. Default is `html`.
   */
  format?: Array<'html' | 'readability' | 'cleaned_html' | 'markdown'>;

  /**
   * Include a PDF in the response
   */
  pdf?: boolean;

  /**
   * The desired region for the action to be performed in
   */
  region?: 'lax' | 'ord' | 'iad' | 'bom' | 'scl' | 'fra' | 'hkg';

  /**
   * Include a screenshot in the response
   */
  screenshot?: boolean;

  /**
   * Use a Steel-provided residential proxy for the scrape
   */
  useProxy?: boolean;
}

export interface ScreenshotParams {
  /**
   * URL of the webpage to capture
   */
  url: string;

  /**
   * Delay before capturing the screenshot (in milliseconds)
   */
  delay?: number;

  /**
   * Capture the full page screenshot. Default is `false`.
   */
  fullPage?: boolean;

  /**
   * The desired region for the action to be performed in
   */
  region?: 'lax' | 'ord' | 'iad' | 'bom' | 'scl' | 'fra' | 'hkg';

  /**
   * Use a Steel-provided residential proxy for capturing the screenshot
   */
  useProxy?: boolean;
}

export declare namespace TopLevel {
  export {
    type PdfResponse as PdfResponse,
    type ScrapeResponse as ScrapeResponse,
    type ScreenshotResponse as ScreenshotResponse,
    type PdfParams as PdfParams,
    type ScrapeParams as ScrapeParams,
    type ScreenshotParams as ScreenshotParams,
  };
}
