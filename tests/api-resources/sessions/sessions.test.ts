// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Steel from 'steel-sdk';
import { Response } from 'node-fetch';

const client = new Steel({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource sessions', () => {
  test('create', async () => {
    const responsePromise = client.sessions.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sessions.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Steel.NotFoundError,
    );
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.create(
        {
          blockAds: true,
          concurrency: 0,
          credentials: { autoSubmit: true, blurFields: true, exactOrigin: true },
          debugConfig: { interactive: true, systemCursor: true },
          deviceConfig: { device: 'desktop' },
          dimensions: { height: 0, width: 0 },
          extensionIds: ['string'],
          headless: true,
          isSelenium: true,
          namespace: 'namespace',
          optimizeBandwidth: true,
          persistProfile: true,
          profileId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          proxyUrl: 'https://example.com',
          region: 'region',
          sessionContext: {
            cookies: [
              {
                name: 'name',
                value: 'value',
                domain: 'domain',
                expires: 0,
                httpOnly: true,
                partitionKey: { hasCrossSiteAncestor: true, topLevelSite: 'topLevelSite' },
                path: 'path',
                priority: 'Low',
                sameParty: true,
                sameSite: 'Strict',
                secure: true,
                session: true,
                size: 0,
                sourcePort: 0,
                sourceScheme: 'Unset',
                url: 'url',
              },
            ],
            indexedDB: {
              foo: [
                {
                  id: 0,
                  data: [
                    {
                      id: 0,
                      name: 'name',
                      records: [
                        {
                          blobFiles: [
                            {
                              blobNumber: 0,
                              mimeType: 'mimeType',
                              size: 0,
                              filename: 'filename',
                              lastModified: '2019-12-27T18:11:19.117Z',
                              path: 'path',
                            },
                          ],
                          key: {},
                          value: {},
                        },
                      ],
                    },
                  ],
                  name: 'name',
                },
              ],
            },
            localStorage: { foo: { foo: 'string' } },
            sessionStorage: { foo: { foo: 'string' } },
          },
          sessionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          solveCaptcha: true,
          stealthConfig: { humanizeInteractions: true, skipFingerprintInjection: true },
          timeout: 0,
          useProxy: {},
          userAgent: 'userAgent',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Steel.NotFoundError);
  });

  test('retrieve', async () => {
    const responsePromise = client.sessions.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Steel.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.sessions.list();
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
    await expect(client.sessions.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Steel.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.list(
        { cursorId: 'cursorId', limit: 0, status: 'live' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Steel.NotFoundError);
  });

  test('computer: only required params', async () => {
    const responsePromise = client.sessions.computer('sessionId', {
      action: 'move_mouse',
      coordinates: [0, 0],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('computer: required and optional params', async () => {
    const response = await client.sessions.computer('sessionId', {
      action: 'move_mouse',
      coordinates: [0, 0],
      hold_keys: ['string'],
      screenshot: true,
    });
  });

  test('context', async () => {
    const responsePromise = client.sessions.context('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('context: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.context('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Steel.NotFoundError);
  });

  test('events', async () => {
    const responsePromise = client.sessions.events('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('events: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.events('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Steel.NotFoundError);
  });

  test('liveDetails', async () => {
    const responsePromise = client.sessions.liveDetails('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('liveDetails: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.liveDetails('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Steel.NotFoundError);
  });

  test('release', async () => {
    const responsePromise = client.sessions.release('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('release: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.release(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {},
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Steel.NotFoundError);
  });

  test('releaseAll', async () => {
    const responsePromise = client.sessions.releaseAll();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('releaseAll: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sessions.releaseAll({}, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Steel.NotFoundError,
    );
  });
});
