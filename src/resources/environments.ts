// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Environments extends APIResource {
  /**
   * Create an Environment
   */
  create(body: EnvironmentCreateParams, options?: Core.RequestOptions): Core.APIPromise<Environment> {
    return this._client.post('/v1/environments', { body, ...options });
  }

  /**
   * Get an Environment
   */
  retrieve(
    id: string,
    query?: EnvironmentRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Environment>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Environment>;
  retrieve(
    id: string,
    query: EnvironmentRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Environment> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/v1/environments/${id}`, { query, ...options });
  }

  /**
   * Update an Environment
   */
  update(
    id: string,
    params: EnvironmentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Environment> {
    const { projectId, ...body } = params;
    return this._client.patch(`/v1/environments/${id}`, { query: { projectId }, body, ...options });
  }

  /**
   * List Environments
   */
  list(query?: EnvironmentListParams, options?: Core.RequestOptions): Core.APIPromise<EnvironmentList>;
  list(options?: Core.RequestOptions): Core.APIPromise<EnvironmentList>;
  list(
    query: EnvironmentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EnvironmentList> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/environments', { query, ...options });
  }

  /**
   * Delete an Environment
   */
  delete(id: string, params?: EnvironmentDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    id: string,
    params: EnvironmentDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { projectId } = params;
    return this._client.delete(`/v1/environments/${id}`, {
      query: { projectId },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface Environment {
  id: string;

  createdAt: string;

  name: string;

  networkSecrets: Array<Environment.NetworkSecret>;

  secrets: { [key: string]: string };

  spec: Environment.Spec;

  updatedAt: string;

  version: number;
}

export namespace Environment {
  export interface NetworkSecret {
    domain: string;

    header: string;

    secretId: string;

    template: string;

    port?: number;
  }

  export interface Spec {
    autoPause?: boolean;

    diskMib?: number;

    env?: { [key: string]: string };

    memoryMib?: number;

    name?: string;

    networkPolicy?: Spec.NetworkPolicy;

    template?: string;

    timeoutSeconds?: number;

    vcpu?: number;
  }

  export namespace Spec {
    export interface NetworkPolicy {
      cidrs?: NetworkPolicy.Cidrs;

      domains?: NetworkPolicy.Domains;

      internetAccess?: boolean;
    }

    export namespace NetworkPolicy {
      export interface Cidrs {
        allow?: Array<string>;

        deny?: Array<string>;
      }

      export interface Domains {
        allow?: Array<string>;

        deny?: Array<string>;
      }
    }
  }
}

export interface EnvironmentList {
  environments: Array<EnvironmentList.Environment>;
}

export namespace EnvironmentList {
  export interface Environment {
    id: string;

    createdAt: string;

    name: string;

    networkSecrets: Array<Environment.NetworkSecret>;

    secrets: { [key: string]: string };

    spec: Environment.Spec;

    updatedAt: string;

    version: number;
  }

  export namespace Environment {
    export interface NetworkSecret {
      domain: string;

      header: string;

      secretId: string;

      template: string;

      port?: number;
    }

    export interface Spec {
      autoPause?: boolean;

      diskMib?: number;

      env?: { [key: string]: string };

      memoryMib?: number;

      name?: string;

      networkPolicy?: Spec.NetworkPolicy;

      template?: string;

      timeoutSeconds?: number;

      vcpu?: number;
    }

    export namespace Spec {
      export interface NetworkPolicy {
        cidrs?: NetworkPolicy.Cidrs;

        domains?: NetworkPolicy.Domains;

        internetAccess?: boolean;
      }

      export namespace NetworkPolicy {
        export interface Cidrs {
          allow?: Array<string>;

          deny?: Array<string>;
        }

        export interface Domains {
          allow?: Array<string>;

          deny?: Array<string>;
        }
      }
    }
  }
}

export interface EnvironmentCreateParams {
  name: string;

  networkSecrets?: Array<EnvironmentCreateParams.NetworkSecret>;

  projectId?: string;

  secrets?: { [key: string]: EnvironmentCreateParams.SecretID | EnvironmentCreateParams.Value };

  spec?: EnvironmentCreateParams.Spec;
}

export namespace EnvironmentCreateParams {
  export interface NetworkSecret {
    domain: string;

    header: string;

    secret: NetworkSecret.SecretID | NetworkSecret.Value;

    template: string;

    port?: number;
  }

  export namespace NetworkSecret {
    export interface SecretID {
      secretId: string;
    }

    export interface Value {
      value: string;
    }
  }

  export interface SecretID {
    secretId: string;
  }

  export interface Value {
    value: string;
  }

  export interface Spec {
    autoPause?: boolean;

    diskMib?: number;

    env?: { [key: string]: string };

    memoryMib?: number;

    name?: string;

    networkPolicy?: Spec.NetworkPolicy;

    template?: string;

    timeoutSeconds?: number;

    vcpu?: number;
  }

  export namespace Spec {
    export interface NetworkPolicy {
      cidrs?: NetworkPolicy.Cidrs;

      domains?: NetworkPolicy.Domains;

      internetAccess?: boolean;
    }

    export namespace NetworkPolicy {
      export interface Cidrs {
        allow?: Array<string>;

        deny?: Array<string>;
      }

      export interface Domains {
        allow?: Array<string>;

        deny?: Array<string>;
      }
    }
  }
}

export interface EnvironmentRetrieveParams {
  projectId?: string;
}

export type EnvironmentUpdateParams =
  | EnvironmentUpdateParams.Variant0
  | EnvironmentUpdateParams.Variant1
  | EnvironmentUpdateParams.Variant2
  | EnvironmentUpdateParams.Variant3;

export declare namespace EnvironmentUpdateParams {
  export interface Variant0 {
    /**
     * Body param
     */
    name: string;

    /**
     * Query param
     */
    projectId?: string;

    /**
     * Body param
     */
    networkSecrets?: Array<Variant0.NetworkSecret>;

    /**
     * Body param
     */
    secrets?: { [key: string]: Variant0.SecretID | Variant0.Value | string | null };

    /**
     * Body param
     */
    spec?: Variant0.Spec;
  }

  export namespace Variant0 {
    export interface NetworkSecret {
      domain: string;

      header: string;

      secret: NetworkSecret.SecretID | NetworkSecret.Value;

      template: string;

      port?: number;
    }

    export namespace NetworkSecret {
      export interface SecretID {
        secretId: string;
      }

      export interface Value {
        value: string;
      }
    }

    export interface SecretID {
      secretId: string;
    }

    export interface Value {
      value: string;
    }

    export interface Spec {
      autoPause?: boolean;

      diskMib?: number;

      env?: { [key: string]: string };

      memoryMib?: number;

      name?: string;

      networkPolicy?: Spec.NetworkPolicy;

      template?: string;

      timeoutSeconds?: number;

      vcpu?: number;
    }

    export namespace Spec {
      export interface NetworkPolicy {
        cidrs?: NetworkPolicy.Cidrs;

        domains?: NetworkPolicy.Domains;

        internetAccess?: boolean;
      }

      export namespace NetworkPolicy {
        export interface Cidrs {
          allow?: Array<string>;

          deny?: Array<string>;
        }

        export interface Domains {
          allow?: Array<string>;

          deny?: Array<string>;
        }
      }
    }
  }

  export interface Variant1 {
    /**
     * Body param
     */
    spec: Variant1.Spec;

    /**
     * Query param
     */
    projectId?: string;

    /**
     * Body param
     */
    name?: string;

    /**
     * Body param
     */
    networkSecrets?: Array<Variant1.NetworkSecret>;

    /**
     * Body param
     */
    secrets?: { [key: string]: Variant1.SecretID | Variant1.Value | string | null };
  }

  export namespace Variant1 {
    export interface Spec {
      autoPause?: boolean;

      diskMib?: number;

      env?: { [key: string]: string };

      memoryMib?: number;

      name?: string;

      networkPolicy?: Spec.NetworkPolicy;

      template?: string;

      timeoutSeconds?: number;

      vcpu?: number;
    }

    export namespace Spec {
      export interface NetworkPolicy {
        cidrs?: NetworkPolicy.Cidrs;

        domains?: NetworkPolicy.Domains;

        internetAccess?: boolean;
      }

      export namespace NetworkPolicy {
        export interface Cidrs {
          allow?: Array<string>;

          deny?: Array<string>;
        }

        export interface Domains {
          allow?: Array<string>;

          deny?: Array<string>;
        }
      }
    }

    export interface NetworkSecret {
      domain: string;

      header: string;

      secret: NetworkSecret.SecretID | NetworkSecret.Value;

      template: string;

      port?: number;
    }

    export namespace NetworkSecret {
      export interface SecretID {
        secretId: string;
      }

      export interface Value {
        value: string;
      }
    }

    export interface SecretID {
      secretId: string;
    }

    export interface Value {
      value: string;
    }
  }

  export interface Variant2 {
    /**
     * Body param
     */
    secrets: { [key: string]: Variant2.SecretID | Variant2.Value | string | null };

    /**
     * Query param
     */
    projectId?: string;

    /**
     * Body param
     */
    name?: string;

    /**
     * Body param
     */
    networkSecrets?: Array<Variant2.NetworkSecret>;

    /**
     * Body param
     */
    spec?: Variant2.Spec;
  }

  export namespace Variant2 {
    export interface SecretID {
      secretId: string;
    }

    export interface Value {
      value: string;
    }

    export interface NetworkSecret {
      domain: string;

      header: string;

      secret: NetworkSecret.SecretID | NetworkSecret.Value;

      template: string;

      port?: number;
    }

    export namespace NetworkSecret {
      export interface SecretID {
        secretId: string;
      }

      export interface Value {
        value: string;
      }
    }

    export interface Spec {
      autoPause?: boolean;

      diskMib?: number;

      env?: { [key: string]: string };

      memoryMib?: number;

      name?: string;

      networkPolicy?: Spec.NetworkPolicy;

      template?: string;

      timeoutSeconds?: number;

      vcpu?: number;
    }

    export namespace Spec {
      export interface NetworkPolicy {
        cidrs?: NetworkPolicy.Cidrs;

        domains?: NetworkPolicy.Domains;

        internetAccess?: boolean;
      }

      export namespace NetworkPolicy {
        export interface Cidrs {
          allow?: Array<string>;

          deny?: Array<string>;
        }

        export interface Domains {
          allow?: Array<string>;

          deny?: Array<string>;
        }
      }
    }
  }

  export interface Variant3 {
    /**
     * Body param
     */
    networkSecrets: Array<Variant3.NetworkSecret>;

    /**
     * Query param
     */
    projectId?: string;

    /**
     * Body param
     */
    name?: string;

    /**
     * Body param
     */
    secrets?: { [key: string]: Variant3.SecretID | Variant3.Value | string | null };

    /**
     * Body param
     */
    spec?: Variant3.Spec;
  }

  export namespace Variant3 {
    export interface NetworkSecret {
      domain: string;

      header: string;

      secret: NetworkSecret.SecretID | NetworkSecret.Value;

      template: string;

      port?: number;
    }

    export namespace NetworkSecret {
      export interface SecretID {
        secretId: string;
      }

      export interface Value {
        value: string;
      }
    }

    export interface SecretID {
      secretId: string;
    }

    export interface Value {
      value: string;
    }

    export interface Spec {
      autoPause?: boolean;

      diskMib?: number;

      env?: { [key: string]: string };

      memoryMib?: number;

      name?: string;

      networkPolicy?: Spec.NetworkPolicy;

      template?: string;

      timeoutSeconds?: number;

      vcpu?: number;
    }

    export namespace Spec {
      export interface NetworkPolicy {
        cidrs?: NetworkPolicy.Cidrs;

        domains?: NetworkPolicy.Domains;

        internetAccess?: boolean;
      }

      export namespace NetworkPolicy {
        export interface Cidrs {
          allow?: Array<string>;

          deny?: Array<string>;
        }

        export interface Domains {
          allow?: Array<string>;

          deny?: Array<string>;
        }
      }
    }
  }
}

export interface EnvironmentListParams {
  projectId?: string;
}

export interface EnvironmentDeleteParams {
  projectId?: string;
}

export declare namespace Environments {
  export {
    type Environment as Environment,
    type EnvironmentList as EnvironmentList,
    type EnvironmentCreateParams as EnvironmentCreateParams,
    type EnvironmentRetrieveParams as EnvironmentRetrieveParams,
    type EnvironmentUpdateParams as EnvironmentUpdateParams,
    type EnvironmentListParams as EnvironmentListParams,
    type EnvironmentDeleteParams as EnvironmentDeleteParams,
  };
}
