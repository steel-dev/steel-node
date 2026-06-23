// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Captchas extends APIResource {
  /**
   * Solves captcha(s) for the session. If pageId, url, or taskId is provided, solves
   * that specific captcha. If no parameters are provided, solves all detected
   * captchas. Use this when autoCaptchaSolving is disabled in stealthConfig.
   */
  solve(
    sessionId: string,
    body?: CaptchaSolveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptchaSolveResponse>;
  solve(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<CaptchaSolveResponse>;
  solve(
    sessionId: string,
    body: CaptchaSolveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptchaSolveResponse> {
    if (isRequestOptions(body)) {
      return this.solve(sessionId, {}, body);
    }
    return this._client.post(`/v1/sessions/${sessionId}/captchas/solve`, { body, ...options });
  }

  /**
   * Solves an image captcha using XPath selectors
   */
  solveImage(
    sessionId: string,
    body: CaptchaSolveImageParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptchaSolveImageResponse> {
    return this._client.post(`/v1/sessions/${sessionId}/captchas/solve-image`, { body, ...options });
  }

  /**
   * Gets the current captcha status for a session
   */
  status(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<CaptchaStatusResponse> {
    return this._client.get(`/v1/sessions/${sessionId}/captchas/status`, options);
  }
}

export interface CaptchaSolveResponse {
  /**
   * Whether the action was successful
   */
  success: boolean;

  /**
   * Response message
   */
  message?: string;
}

export interface CaptchaSolveImageResponse {
  /**
   * Whether the action was successful
   */
  success: boolean;

  /**
   * Response message
   */
  message?: string;
}

export type CaptchaStatusResponse = Array<CaptchaStatusResponse.CaptchaStatusResponseItem>;

export namespace CaptchaStatusResponse {
  export interface CaptchaStatusResponseItem {
    /**
     * Whether a captcha is currently being solved
     */
    isSolvingCaptcha: boolean;

    /**
     * The page ID where the captcha is located
     */
    pageId: string;

    /**
     * Array of captcha tasks
     */
    tasks: Array<unknown>;

    /**
     * The URL where the captcha is located
     */
    url: string;

    /**
     * Timestamp when the state was created
     */
    created?: number;

    /**
     * Timestamp when the state was last updated
     */
    lastUpdated?: number;
  }
}

export interface CaptchaSolveParams {
  /**
   * The page ID where the captcha is located
   */
  pageId?: string;

  /**
   * The task ID of the specific captcha to solve
   */
  taskId?: string;

  /**
   * The URL where the captcha is located
   */
  url?: string;
}

export interface CaptchaSolveImageParams {
  /**
   * XPath to the captcha image element
   */
  imageXPath: string;

  /**
   * XPath to the captcha input element
   */
  inputXPath: string;

  /**
   * URL where the captcha is located. Defaults to the current page URL
   */
  url?: string;
}

export declare namespace Captchas {
  export {
    type CaptchaSolveResponse as CaptchaSolveResponse,
    type CaptchaSolveImageResponse as CaptchaSolveImageResponse,
    type CaptchaStatusResponse as CaptchaStatusResponse,
    type CaptchaSolveParams as CaptchaSolveParams,
    type CaptchaSolveImageParams as CaptchaSolveImageParams,
  };
}
