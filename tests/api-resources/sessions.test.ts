// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Steel from 'steel';
import { Response } from 'node-fetch';

const client = new Steel({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessions', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.sessions.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('retrieve: required and optional params', async () => {
    const response = await client.sessions.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      orgid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.sessions.list({ orgid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.sessions.list({ orgid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });

  test('createNewSession: only required params', async () => {
    const responsePromise = client.sessions.createNewSession({
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

  test('createNewSession: required and optional params', async () => {
    const response = await client.sessions.createNewSession({
      orgId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      orgid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('release: only required params', async () => {
    const responsePromise = client.sessions.release('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('release: required and optional params', async () => {
    const response = await client.sessions.release('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      orgid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
