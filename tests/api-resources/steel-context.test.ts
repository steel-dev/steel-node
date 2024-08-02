// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Steel from 'steel';
import { Response } from 'node-fetch';

const client = new Steel({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource steelContext', () => {
  test('createContext', async () => {
    const responsePromise = client.steelContext.createContext();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createContext: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.steelContext.createContext({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Steel.NotFoundError,
    );
  });

  test('createContext: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.steelContext.createContext({ proxy: 'proxy' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Steel.NotFoundError);
  });

  test('deleteContext', async () => {
    const responsePromise = client.steelContext.deleteContext('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteContext: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.steelContext.deleteContext('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Steel.NotFoundError);
  });

  test('getContextData', async () => {
    const responsePromise = client.steelContext.getContextData('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getContextData: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.steelContext.getContextData('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Steel.NotFoundError);
  });
});
