// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Steel from 'steel-sdk';
import { Response } from 'node-fetch';

const client = new Steel({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource profiles', () => {
  test('create: only required params', async () => {
    const responsePromise = client.profiles.create({
      fingerprint: {
        fingerprint: {
          audioCodecs: { foo: 'string' },
          battery: { charging: true, chargingTime: 0, dischargingTime: 0, level: 0 },
          fonts: ['string'],
          mockWebRTC: true,
          multimediaDevices: {
            micros: [{ deviceId: 'deviceId', groupId: 'groupId', kind: 'kind', label: 'label' }],
            speakers: [{ deviceId: 'deviceId', groupId: 'groupId', kind: 'kind', label: 'label' }],
            webcams: [{ deviceId: 'deviceId', groupId: 'groupId', kind: 'kind', label: 'label' }],
          },
          navigator: {
            appCodeName: 'appCodeName',
            appName: 'appName',
            appVersion: 'appVersion',
            deviceMemory: 0,
            extraProperties: {
              globalPrivacyControl: true,
              installedApps: ['string'],
              pdfViewerEnabled: true,
              vendorFlavors: ['string'],
            },
            hardwareConcurrency: 0,
            language: 'language',
            languages: ['string'],
            maxTouchPoints: 0,
            oscpu: 'oscpu',
            platform: 'platform',
            product: 'product',
            productSub: 'productSub',
            userAgent: 'userAgent',
            userAgentData: {
              brands: [{ brand: 'brand', version: 'version' }],
              mobile: true,
              platform: 'platform',
            },
            vendor: 'vendor',
            vendorSub: 'vendorSub',
            webdriver: true,
          },
          pluginsData: {
            mimeTypes: ['string'],
            plugins: [
              {
                description: 'description',
                filename: 'filename',
                mimeTypes: [
                  {
                    description: 'description',
                    enabledPlugin: 'enabledPlugin',
                    suffixes: 'suffixes',
                    type: 'type',
                  },
                ],
                name: 'name',
              },
            ],
          },
          screen: {
            availHeight: 0,
            availLeft: 0,
            availTop: 0,
            availWidth: 0,
            clientHeight: 0,
            clientWidth: 0,
            colorDepth: 0,
            devicePixelRatio: 0,
            hasHDR: true,
            height: 0,
            innerHeight: 0,
            innerWidth: 0,
            outerHeight: 0,
            outerWidth: 0,
            pageXOffset: 0,
            pageYOffset: 0,
            pixelDepth: 0,
            screenX: 0,
            width: 0,
          },
          slim: true,
          videoCard: { renderer: 'renderer', vendor: 'vendor' },
          videoCodecs: { foo: 'string' },
        },
        headers: { 'user-agent': 'user-agent' },
      },
      proxyUrl: 'https://example.com',
      userAgent: 'userAgent',
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
      fingerprint: {
        fingerprint: {
          audioCodecs: { foo: 'string' },
          battery: { charging: true, chargingTime: 0, dischargingTime: 0, level: 0 },
          fonts: ['string'],
          mockWebRTC: true,
          multimediaDevices: {
            micros: [{ deviceId: 'deviceId', groupId: 'groupId', kind: 'kind', label: 'label' }],
            speakers: [{ deviceId: 'deviceId', groupId: 'groupId', kind: 'kind', label: 'label' }],
            webcams: [{ deviceId: 'deviceId', groupId: 'groupId', kind: 'kind', label: 'label' }],
          },
          navigator: {
            appCodeName: 'appCodeName',
            appName: 'appName',
            appVersion: 'appVersion',
            deviceMemory: 0,
            extraProperties: {
              globalPrivacyControl: true,
              installedApps: ['string'],
              pdfViewerEnabled: true,
              vendorFlavors: ['string'],
            },
            hardwareConcurrency: 0,
            language: 'language',
            languages: ['string'],
            maxTouchPoints: 0,
            oscpu: 'oscpu',
            platform: 'platform',
            product: 'product',
            productSub: 'productSub',
            userAgent: 'userAgent',
            userAgentData: {
              brands: [{ brand: 'brand', version: 'version' }],
              mobile: true,
              platform: 'platform',
            },
            vendor: 'vendor',
            vendorSub: 'vendorSub',
            webdriver: true,
            doNotTrack: 'doNotTrack',
          },
          pluginsData: {
            mimeTypes: ['string'],
            plugins: [
              {
                description: 'description',
                filename: 'filename',
                mimeTypes: [
                  {
                    description: 'description',
                    enabledPlugin: 'enabledPlugin',
                    suffixes: 'suffixes',
                    type: 'type',
                  },
                ],
                name: 'name',
              },
            ],
          },
          screen: {
            availHeight: 0,
            availLeft: 0,
            availTop: 0,
            availWidth: 0,
            clientHeight: 0,
            clientWidth: 0,
            colorDepth: 0,
            devicePixelRatio: 0,
            hasHDR: true,
            height: 0,
            innerHeight: 0,
            innerWidth: 0,
            outerHeight: 0,
            outerWidth: 0,
            pageXOffset: 0,
            pageYOffset: 0,
            pixelDepth: 0,
            screenX: 0,
            width: 0,
          },
          slim: true,
          videoCard: { renderer: 'renderer', vendor: 'vendor' },
          videoCodecs: { foo: 'string' },
        },
        headers: {
          'user-agent': 'user-agent',
          accept: 'accept',
          'accept-encoding': 'accept-encoding',
          'accept-language': 'accept-language',
          dnt: 'dnt',
          'sec-ch-ua': 'sec-ch-ua',
          'sec-ch-ua-mobile': 'sec-ch-ua-mobile',
          'sec-ch-ua-platform': 'sec-ch-ua-platform',
          'sec-fetch-dest': 'sec-fetch-dest',
          'sec-fetch-mode': 'sec-fetch-mode',
          'sec-fetch-site': 'sec-fetch-site',
          'sec-fetch-user': 'sec-fetch-user',
          'upgrade-insecure-requests': 'upgrade-insecure-requests',
        },
      },
      proxyUrl: 'https://example.com',
      userAgent: 'userAgent',
      dimensions: { height: 0, width: 0 },
      userDataDir: {},
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
});
