// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Steel from 'steel';
import { Response } from 'node-fetch';

const client = new Steel({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource steelSession', () => {
  test('getContext', async () => {
    const responsePromise = client.steelSession.getContext('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getContext: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.steelSession.getContext('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Steel.NotFoundError);
  });

  test('getSessionData: only required params', async () => {
    const responsePromise = client.steelSession.getSessionData('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('getSessionData: required and optional params', async () => {
    const response = await client.steelSession.getSessionData('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      orgid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('releaseSession: only required params', async () => {
    const responsePromise = client.steelSession.releaseSession('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('releaseSession: required and optional params', async () => {
    const response = await client.steelSession.releaseSession('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      orgid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
