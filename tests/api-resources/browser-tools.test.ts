// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Steel from 'steel';
import { Response } from 'node-fetch';

const client = new Steel({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource browserTools', () => {
  test('pdf: required and optional params', async () => {
    const response = await client.browserTools.pdf({ url: 'url' });
  });

  test('scrape: only required params', async () => {
    const responsePromise = client.browserTools.scrape({ url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('scrape: required and optional params', async () => {
    const response = await client.browserTools.scrape({
      url: 'url',
      format: ['html', 'cleaned_html', 'readability'],
      screenshot: true,
    });
  });

  test('screenshot: required and optional params', async () => {
    const response = await client.browserTools.screenshot({ url: 'url' });
  });
});
