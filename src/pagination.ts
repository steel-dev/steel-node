// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, coerceInteger, coerceFloat, coerceBoolean, ensurePresent, PageInfo } from './core';
import * as Core from './core';

export interface CursorPageResponse<Item> {
  sessions: Array<Item>;

  next_cursor: string | null;

  total_count: number;
}

export interface CursorPageParams {
  cursor?: string;

  limit?: number;
}

export class CursorPage<Item> extends AbstractPage<Item> implements CursorPageResponse<Item> {
  sessions: Array<Item>;

  next_cursor: string | null;

  total_count: number;

  constructor(client: APIClient, response: Response, body: CursorPageResponse<Item>, options: FinalRequestOptions) {
    super(client, response, body, options);

    this.sessions = body.sessions || [];
    this.next_cursor = body.next_cursor || '';
    this.total_count = body.total_count || 0;
  }

  getPaginatedItems(): Item[] {
    return this.sessions ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<CursorPageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const cursor = this.next_cursor
    if (!cursor) {
      return null;
    }

    return {
      params: {
        cursor: cursor
      }
    };
  }
}
