// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ContextAPI from './context';
import * as PdfAPI from './pdf';
import * as ScrapeAPI from './scrape';
import * as ScreenshotAPI from './screenshot';
import * as SessionsAPI from './sessions';

export class SDK extends APIResource {
  context: ContextAPI.ContextResource = new ContextAPI.ContextResource(this._client);
  pdf: PdfAPI.Pdf = new PdfAPI.Pdf(this._client);
  scrape: ScrapeAPI.Scrape = new ScrapeAPI.Scrape(this._client);
  screenshot: ScreenshotAPI.Screenshot = new ScreenshotAPI.Screenshot(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
}

export namespace SDK {
  export import ContextResource = ContextAPI.ContextResource;
  export import Context = ContextAPI.Context;
  export import ContextListResponse = ContextAPI.ContextListResponse;
  export import ContextCreateParams = ContextAPI.ContextCreateParams;
  export import ContextUpdateParams = ContextAPI.ContextUpdateParams;
  export import Pdf = PdfAPI.Pdf;
  export import PdfCreateResponse = PdfAPI.PdfCreateResponse;
  export import PdfCreateParams = PdfAPI.PdfCreateParams;
  export import Scrape = ScrapeAPI.Scrape;
  export import ScrapeCreateResponse = ScrapeAPI.ScrapeCreateResponse;
  export import ScrapeCreateParams = ScrapeAPI.ScrapeCreateParams;
  export import Screenshot = ScreenshotAPI.Screenshot;
  export import ScreenshotCreateResponse = ScreenshotAPI.ScreenshotCreateResponse;
  export import ScreenshotCreateParams = ScreenshotAPI.ScreenshotCreateParams;
  export import Sessions = SessionsAPI.Sessions;
  export import Session = SessionsAPI.Session;
  export import SessionListResponse = SessionsAPI.SessionListResponse;
  export import SessionCreateParams = SessionsAPI.SessionCreateParams;
  export import SessionUpdateParams = SessionsAPI.SessionUpdateParams;
}
