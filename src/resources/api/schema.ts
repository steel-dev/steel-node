// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SchemaAPI from './schema';

export class Schema extends APIResource {
  /**
   * OpenApi3 schema for this API. Format can be selected via content negotiation.
   *
   * - YAML: application/vnd.oai.openapi
   * - JSON: application/vnd.oai.openapi+json
   */
  retrieve(
    query?: SchemaRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SchemaRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<SchemaRetrieveResponse>;
  retrieve(
    query: SchemaRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SchemaRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/api/schema/', { query, ...options });
  }
}

export type SchemaRetrieveResponse = Record<string, unknown>;

export interface SchemaRetrieveParams {
  format?: 'json' | 'yaml';

  lang?:
    | 'af'
    | 'ar'
    | 'ar-dz'
    | 'ast'
    | 'az'
    | 'be'
    | 'bg'
    | 'bn'
    | 'br'
    | 'bs'
    | 'ca'
    | 'cs'
    | 'cy'
    | 'da'
    | 'de'
    | 'dsb'
    | 'el'
    | 'en'
    | 'en-au'
    | 'en-gb'
    | 'eo'
    | 'es'
    | 'es-ar'
    | 'es-co'
    | 'es-mx'
    | 'es-ni'
    | 'es-ve'
    | 'et'
    | 'eu'
    | 'fa'
    | 'fi'
    | 'fr'
    | 'fy'
    | 'ga'
    | 'gd'
    | 'gl'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hsb'
    | 'hu'
    | 'hy'
    | 'ia'
    | 'id'
    | 'ig'
    | 'io'
    | 'is'
    | 'it'
    | 'ja'
    | 'ka'
    | 'kab'
    | 'kk'
    | 'km'
    | 'kn'
    | 'ko'
    | 'ky'
    | 'lb'
    | 'lt'
    | 'lv'
    | 'mk'
    | 'ml'
    | 'mn'
    | 'mr'
    | 'my'
    | 'nb'
    | 'ne'
    | 'nl'
    | 'nn'
    | 'os'
    | 'pa'
    | 'pl'
    | 'pt'
    | 'pt-br'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sq'
    | 'sr'
    | 'sr-latn'
    | 'sv'
    | 'sw'
    | 'ta'
    | 'te'
    | 'tg'
    | 'th'
    | 'tk'
    | 'tr'
    | 'tt'
    | 'udm'
    | 'uk'
    | 'ur'
    | 'uz'
    | 'vi'
    | 'zh-hans'
    | 'zh-hant';
}

export namespace Schema {
  export import SchemaRetrieveResponse = SchemaAPI.SchemaRetrieveResponse;
  export import SchemaRetrieveParams = SchemaAPI.SchemaRetrieveParams;
}
