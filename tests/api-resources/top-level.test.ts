// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Steel from 'steel';
import { Response } from 'node-fetch';

const client = new Steel({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  test('createSession: only required params', async () => {
    const responsePromise = client.createSession({
      orgId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      orgid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createSession: required and optional params', async () => {
    const response = await client.createSession({
      orgId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      orgid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('getSessions: only required params', async () => {
    const responsePromise = client.getSessions({ orgid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getSessions: required and optional params', async () => {
    const response = await client.getSessions({ orgid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });

  test('pdf: required and optional params', async () => {
    const response = await client.pdf({ url: 'url' });
  });

  test('scrape: only required params', async () => {
    const responsePromise = client.scrape({ url: 'url', orgid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
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
      url: 'url',
      orgid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      format: ['html', 'cleaned_html', 'readability'],
    });
  });

  test('screenshot: required and optional params', async () => {
    const response = await client.screenshot({ url: 'url', orgid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });
});
