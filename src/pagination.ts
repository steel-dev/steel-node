// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface SessionsCursorResponse<Item> {
  sessions: Array<Item>;
}

export interface SessionsCursorParams {
  cursorId?: string;

  limit?: number;
}

export class SessionsCursor<Item extends { id: string }>
  extends AbstractPage<Item>
  implements SessionsCursorResponse<Item>
{
  sessions: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: SessionsCursorResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.sessions = body.sessions || [];
  }

  getPaginatedItems(): Item[] {
    return this.sessions ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<SessionsCursorParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const sessions = this.getPaginatedItems();
    if (!sessions.length) {
      return null;
    }

    const id = sessions[sessions.length - 1]?.id;
    if (!id) {
      return null;
    }

    return { params: { cursorId: id } };
  }
}
