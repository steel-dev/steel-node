// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Steel from 'steel-sdk';
import { Response } from 'node-fetch';

const client = new Steel({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('top level methods', () => {
  test('pdf: only required params', async () => {
    const responsePromise = client.pdf({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('pdf: required and optional params', async () => {
    const response = await client.pdf({ url: 'https://example.com', delay: 0, useProxy: true });
  });

  test('scrape: only required params', async () => {
    const responsePromise = client.scrape({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('scrape: required and optional params', async () => {
    const response = await client.scrape({
      url: 'https://example.com',
      delay: 0,
      format: ['html'],
      pdf: true,
      screenshot: true,
      useProxy: true,
    });
  });

  test('screenshot: only required params', async () => {
    const responsePromise = client.screenshot({ url: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('screenshot: required and optional params', async () => {
    const response = await client.screenshot({
      url: 'https://example.com',
      delay: 0,
      fullPage: true,
      useProxy: true,
    });
  });
});
