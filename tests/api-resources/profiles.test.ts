// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Steel, { toFile } from 'steel-sdk';
import { Response } from 'node-fetch';

const client = new Steel({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource profiles', () => {
  test('create: only required params', async () => {
    const responsePromise = client.profiles.create({
      userDataDir: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.profiles.create({
      userDataDir: await toFile(Buffer.from('# my file contents'), 'README.md'),
      dimensions: { height: 0, width: 0 },
      proxyUrl: 'https://example.com',
      userAgent: 'userAgent',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.profiles.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      userDataDir: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.profiles.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      userDataDir: await toFile(Buffer.from('# my file contents'), 'README.md'),
      dimensions: { height: 0, width: 0 },
      proxyUrl: 'https://example.com',
      userAgent: 'userAgent',
    });
  });

  test('list', async () => {
    const responsePromise = client.profiles.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.profiles.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Steel.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.profiles.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.profiles.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Steel.NotFoundError);
  });
});
