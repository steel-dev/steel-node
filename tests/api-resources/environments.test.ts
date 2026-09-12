// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Steel from 'steel-sdk';
import { Response } from 'node-fetch';

const client = new Steel({
  steelAPIKey: 'My Steel API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource environments', () => {
  test('create: only required params', async () => {
    const responsePromise = client.environments.create({ name: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.environments.create({
      name: 'x',
      networkSecrets: [
        {
          domain: 'domain',
          header: 'header',
          secret: { secretId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
          template: '{{secret}}',
          port: 1,
        },
      ],
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      secrets: { foo: { secretId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' } },
      spec: {
        autoPause: true,
        diskMib: 1,
        env: { foo: 'string' },
        memoryMib: 128,
        name: 'x',
        networkPolicy: {
          cidrs: { allow: ['x'], deny: ['x'] },
          domains: { allow: ['x'], deny: ['x'] },
          internetAccess: true,
        },
        template: 'x',
        timeoutSeconds: 1,
        vcpu: 1,
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.environments.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.environments.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Steel.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.environments.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Steel.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.environments.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { name: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.environments.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'x',
      projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      networkSecrets: [
        {
          domain: 'domain',
          header: 'header',
          secret: { secretId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
          template: '{{secret}}',
          port: 1,
        },
      ],
      secrets: { foo: { secretId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' } },
      spec: {
        autoPause: true,
        diskMib: 1,
        env: { foo: 'string' },
        memoryMib: 128,
        name: 'x',
        networkPolicy: {
          cidrs: { allow: ['x'], deny: ['x'] },
          domains: { allow: ['x'], deny: ['x'] },
          internetAccess: true,
        },
        template: 'x',
        timeoutSeconds: 1,
        vcpu: 1,
      },
    });
  });

  test('list', async () => {
    const responsePromise = client.environments.list();
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
    await expect(client.environments.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Steel.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.environments.list(
        { projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Steel.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.environments.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.environments.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Steel.NotFoundError);
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.environments.delete(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { projectId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Steel.NotFoundError);
  });
});
