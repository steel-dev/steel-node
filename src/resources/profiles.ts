// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Profiles extends APIResource {
  /**
   * Create a new profile
   */
  create(body?: ProfileCreateParams, options?: Core.RequestOptions): Core.APIPromise<ProfileCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<ProfileCreateResponse>;
  create(
    body: ProfileCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/v1/profiles', Core.multipartFormRequestOptions({ body, ...options }));
  }

  /**
   * Retrieve a list of all profiles
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ProfileListResponse> {
    return this._client.get('/v1/profiles', options);
  }
}

export interface ProfileCreateResponse {
  /**
   * The unique identifier for the profile
   */
  id: string;

  /**
   * The date and time when the profile was created
   */
  createdAt: string;

  /**
   * The dimensions associated with the profile
   */
  dimensions: ProfileCreateResponse.Dimensions | null;

  /**
   * The extension IDs associated with the profile
   */
  extensionIds: Array<string> | null;

  /**
   * The fingerprint associated with the profile
   */
  fingerprint: ProfileCreateResponse.Fingerprint | null;

  /**
   * The last session ID associated with the profile
   */
  sourceSessionId: string | null;

  /**
   * The status of the profile
   */
  status: 'UPLOADING' | 'READY' | 'FAILED';

  /**
   * The date and time when the profile was last updated
   */
  updatedAt: string;

  /**
   * The user agent associated with the profile
   */
  userAgent: string | null;

  /**
   * The credentials configuration associated with the profile
   */
  credentialsConfig?: unknown;

  /**
   * The proxy configuration associated with the profile
   */
  useProxyConfig?: unknown;
}

export namespace ProfileCreateResponse {
  /**
   * The dimensions associated with the profile
   */
  export interface Dimensions {
    height: number;

    width: number;
  }

  /**
   * The fingerprint associated with the profile
   */
  export interface Fingerprint {
    fingerprint: Fingerprint.Fingerprint;

    headers: Fingerprint.Headers;
  }

  export namespace Fingerprint {
    export interface Fingerprint {
      audioCodecs: { [key: string]: string | null };

      battery: Fingerprint.Battery;

      fonts: Array<string | null>;

      mockWebRTC: boolean | null;

      multimediaDevices: Fingerprint.MultimediaDevices;

      navigator: Fingerprint.Navigator;

      pluginsData: Fingerprint.PluginsData;

      screen: Fingerprint.Screen;

      slim: boolean | null;

      videoCard: Fingerprint.VideoCard;

      videoCodecs: { [key: string]: string | null };

      [k: string]: unknown;
    }

    export namespace Fingerprint {
      export interface Battery {
        charging: boolean | null;

        chargingTime: number | null;

        dischargingTime: number | null;

        level: number | null;

        [k: string]: unknown;
      }

      export interface MultimediaDevices {
        micros: Array<MultimediaDevices.Micro>;

        speakers: Array<MultimediaDevices.Speaker>;

        webcams: Array<MultimediaDevices.Webcam>;

        [k: string]: unknown;
      }

      export namespace MultimediaDevices {
        export interface Micro {
          deviceId: string | null;

          groupId: string | null;

          kind: string | null;

          label: string | null;

          [k: string]: unknown;
        }

        export interface Speaker {
          deviceId: string | null;

          groupId: string | null;

          kind: string | null;

          label: string | null;

          [k: string]: unknown;
        }

        export interface Webcam {
          deviceId: string | null;

          groupId: string | null;

          kind: string | null;

          label: string | null;

          [k: string]: unknown;
        }
      }

      export interface Navigator {
        appCodeName: string | null;

        appName: string | null;

        appVersion: string | null;

        deviceMemory: number | null;

        extraProperties: Navigator.ExtraProperties;

        hardwareConcurrency: number | null;

        language: string | null;

        languages: Array<string | null>;

        maxTouchPoints: number | null;

        oscpu: string | null;

        platform: string | null;

        product: string | null;

        productSub: string | null;

        userAgent: string | null;

        userAgentData: Navigator.UserAgentData;

        vendor: string | null;

        vendorSub: string | null;

        webdriver: boolean | null;

        doNotTrack?: string | null;

        [k: string]: unknown;
      }

      export namespace Navigator {
        export interface ExtraProperties {
          globalPrivacyControl: boolean | null;

          installedApps: Array<string | null>;

          pdfViewerEnabled: boolean | null;

          vendorFlavors: Array<string | null>;

          [k: string]: unknown;
        }

        export interface UserAgentData {
          brands: Array<UserAgentData.Brand>;

          mobile: boolean | null;

          platform: string | null;

          [k: string]: unknown;
        }

        export namespace UserAgentData {
          export interface Brand {
            brand: string | null;

            version: string | null;

            [k: string]: unknown;
          }
        }
      }

      export interface PluginsData {
        mimeTypes: Array<string | null>;

        plugins: Array<PluginsData.Plugin>;

        [k: string]: unknown;
      }

      export namespace PluginsData {
        export interface Plugin {
          description: string | null;

          filename: string | null;

          mimeTypes: Array<Plugin.MimeType>;

          name: string | null;

          [k: string]: unknown;
        }

        export namespace Plugin {
          export interface MimeType {
            description: string | null;

            enabledPlugin: string | null;

            suffixes: string | null;

            type: string | null;

            [k: string]: unknown;
          }
        }
      }

      export interface Screen {
        availHeight: number | null;

        availLeft: number | null;

        availTop: number | null;

        availWidth: number | null;

        clientHeight: number | null;

        clientWidth: number | null;

        colorDepth: number | null;

        devicePixelRatio: number | null;

        hasHDR: boolean | null;

        height: number | null;

        innerHeight: number | null;

        innerWidth: number | null;

        outerHeight: number | null;

        outerWidth: number | null;

        pageXOffset: number | null;

        pageYOffset: number | null;

        pixelDepth: number | null;

        screenX: number | null;

        width: number | null;

        [k: string]: unknown;
      }

      export interface VideoCard {
        renderer: string | null;

        vendor: string | null;

        [k: string]: unknown;
      }
    }

    export interface Headers {
      'user-agent': string | null;

      accept?: string | null;

      'accept-encoding'?: string | null;

      'accept-language'?: string | null;

      dnt?: string | null;

      'sec-ch-ua'?: string | null;

      'sec-ch-ua-mobile'?: string | null;

      'sec-ch-ua-platform'?: string | null;

      'sec-fetch-dest'?: string | null;

      'sec-fetch-mode'?: string | null;

      'sec-fetch-site'?: string | null;

      'sec-fetch-user'?: string | null;

      'upgrade-insecure-requests'?: string | null;

      [k: string]: unknown;
    }
  }
}

export interface ProfileListResponse {
  /**
   * The total number of profiles
   */
  count: number;

  /**
   * The list of profiles
   */
  profiles: Array<ProfileListResponse.Profile>;
}

export namespace ProfileListResponse {
  export interface Profile {
    /**
     * The unique identifier for the profile
     */
    id: string;

    /**
     * The date and time when the profile was created
     */
    createdAt: string;

    /**
     * The dimensions associated with the profile
     */
    dimensions: Profile.Dimensions | null;

    /**
     * The extension IDs associated with the profile
     */
    extensionIds: Array<string> | null;

    /**
     * The fingerprint associated with the profile
     */
    fingerprint: Profile.Fingerprint | null;

    /**
     * The last session ID associated with the profile
     */
    sourceSessionId: string | null;

    /**
     * The status of the profile
     */
    status: 'UPLOADING' | 'READY' | 'FAILED';

    /**
     * The date and time when the profile was last updated
     */
    updatedAt: string;

    /**
     * The user agent associated with the profile
     */
    userAgent: string | null;

    /**
     * The credentials configuration associated with the profile
     */
    credentialsConfig?: unknown;

    /**
     * The proxy configuration associated with the profile
     */
    useProxyConfig?: unknown;
  }

  export namespace Profile {
    /**
     * The dimensions associated with the profile
     */
    export interface Dimensions {
      height: number;

      width: number;
    }

    /**
     * The fingerprint associated with the profile
     */
    export interface Fingerprint {
      fingerprint: Fingerprint.Fingerprint;

      headers: Fingerprint.Headers;
    }

    export namespace Fingerprint {
      export interface Fingerprint {
        audioCodecs: { [key: string]: string | null };

        battery: Fingerprint.Battery;

        fonts: Array<string | null>;

        mockWebRTC: boolean | null;

        multimediaDevices: Fingerprint.MultimediaDevices;

        navigator: Fingerprint.Navigator;

        pluginsData: Fingerprint.PluginsData;

        screen: Fingerprint.Screen;

        slim: boolean | null;

        videoCard: Fingerprint.VideoCard;

        videoCodecs: { [key: string]: string | null };

        [k: string]: unknown;
      }

      export namespace Fingerprint {
        export interface Battery {
          charging: boolean | null;

          chargingTime: number | null;

          dischargingTime: number | null;

          level: number | null;

          [k: string]: unknown;
        }

        export interface MultimediaDevices {
          micros: Array<MultimediaDevices.Micro>;

          speakers: Array<MultimediaDevices.Speaker>;

          webcams: Array<MultimediaDevices.Webcam>;

          [k: string]: unknown;
        }

        export namespace MultimediaDevices {
          export interface Micro {
            deviceId: string | null;

            groupId: string | null;

            kind: string | null;

            label: string | null;

            [k: string]: unknown;
          }

          export interface Speaker {
            deviceId: string | null;

            groupId: string | null;

            kind: string | null;

            label: string | null;

            [k: string]: unknown;
          }

          export interface Webcam {
            deviceId: string | null;

            groupId: string | null;

            kind: string | null;

            label: string | null;

            [k: string]: unknown;
          }
        }

        export interface Navigator {
          appCodeName: string | null;

          appName: string | null;

          appVersion: string | null;

          deviceMemory: number | null;

          extraProperties: Navigator.ExtraProperties;

          hardwareConcurrency: number | null;

          language: string | null;

          languages: Array<string | null>;

          maxTouchPoints: number | null;

          oscpu: string | null;

          platform: string | null;

          product: string | null;

          productSub: string | null;

          userAgent: string | null;

          userAgentData: Navigator.UserAgentData;

          vendor: string | null;

          vendorSub: string | null;

          webdriver: boolean | null;

          doNotTrack?: string | null;

          [k: string]: unknown;
        }

        export namespace Navigator {
          export interface ExtraProperties {
            globalPrivacyControl: boolean | null;

            installedApps: Array<string | null>;

            pdfViewerEnabled: boolean | null;

            vendorFlavors: Array<string | null>;

            [k: string]: unknown;
          }

          export interface UserAgentData {
            brands: Array<UserAgentData.Brand>;

            mobile: boolean | null;

            platform: string | null;

            [k: string]: unknown;
          }

          export namespace UserAgentData {
            export interface Brand {
              brand: string | null;

              version: string | null;

              [k: string]: unknown;
            }
          }
        }

        export interface PluginsData {
          mimeTypes: Array<string | null>;

          plugins: Array<PluginsData.Plugin>;

          [k: string]: unknown;
        }

        export namespace PluginsData {
          export interface Plugin {
            description: string | null;

            filename: string | null;

            mimeTypes: Array<Plugin.MimeType>;

            name: string | null;

            [k: string]: unknown;
          }

          export namespace Plugin {
            export interface MimeType {
              description: string | null;

              enabledPlugin: string | null;

              suffixes: string | null;

              type: string | null;

              [k: string]: unknown;
            }
          }
        }

        export interface Screen {
          availHeight: number | null;

          availLeft: number | null;

          availTop: number | null;

          availWidth: number | null;

          clientHeight: number | null;

          clientWidth: number | null;

          colorDepth: number | null;

          devicePixelRatio: number | null;

          hasHDR: boolean | null;

          height: number | null;

          innerHeight: number | null;

          innerWidth: number | null;

          outerHeight: number | null;

          outerWidth: number | null;

          pageXOffset: number | null;

          pageYOffset: number | null;

          pixelDepth: number | null;

          screenX: number | null;

          width: number | null;

          [k: string]: unknown;
        }

        export interface VideoCard {
          renderer: string | null;

          vendor: string | null;

          [k: string]: unknown;
        }
      }

      export interface Headers {
        'user-agent': string | null;

        accept?: string | null;

        'accept-encoding'?: string | null;

        'accept-language'?: string | null;

        dnt?: string | null;

        'sec-ch-ua'?: string | null;

        'sec-ch-ua-mobile'?: string | null;

        'sec-ch-ua-platform'?: string | null;

        'sec-fetch-dest'?: string | null;

        'sec-fetch-mode'?: string | null;

        'sec-fetch-site'?: string | null;

        'sec-fetch-user'?: string | null;

        'upgrade-insecure-requests'?: string | null;

        [k: string]: unknown;
      }
    }
  }
}

export interface ProfileCreateParams {
  /**
   * The dimensions associated with the profile
   */
  dimensions?: ProfileCreateParams.Dimensions;

  /**
   * The proxy associated with the profile
   */
  proxyUrl?: string;

  /**
   * The user agent associated with the profile
   */
  userAgent?: string;

  /**
   * The user data directory associated with the profile
   */
  userDataDir?: unknown;
}

export namespace ProfileCreateParams {
  /**
   * The dimensions associated with the profile
   */
  export interface Dimensions {
    height: number;

    width: number;
  }
}

export declare namespace Profiles {
  export {
    type ProfileCreateResponse as ProfileCreateResponse,
    type ProfileListResponse as ProfileListResponse,
    type ProfileCreateParams as ProfileCreateParams,
  };
}
