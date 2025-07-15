// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Captchas extends APIResource {
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

export interface CaptchaSolveImageResponse {
  /**
   * Whether the action was successful
   */
  success: boolean;

  /**
   * Whether the message was broadcasted
   */
  broadcasted?: boolean;

  /**
   * Response message
   */
  message?: string;

  /**
   * Whether the state was requested
   */
  requested?: boolean;
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
   * URL where the captcha is located
   */
  url?: string;
}

export declare namespace Captchas {
  export {
    type CaptchaSolveImageResponse as CaptchaSolveImageResponse,
    type CaptchaStatusResponse as CaptchaStatusResponse,
    type CaptchaSolveImageParams as CaptchaSolveImageParams,
  };
}
