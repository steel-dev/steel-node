// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ComputersAPI from './computers';

export class Checkpoints extends APIResource {
  /**
   * Retrieve a checkpoint by its ID.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Checkpoint> {
    return this._client.get(`/v1/checkpoints/${id}`, options);
  }

  /**
   * List the organization's checkpoints, newest first; deleted ones are omitted.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CheckpointList> {
    return this._client.get('/v1/checkpoints', options);
  }

  /**
   * Request a delete; already deleting or deleted is a success.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<Checkpoint> {
    return this._client.delete(`/v1/checkpoints/${id}`, options);
  }

  /**
   * Start a new computer from a ready checkpoint; it restores asynchronously.
   */
  restore(
    id: string,
    body: CheckpointRestoreParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ComputersAPI.Computer> {
    return this._client.post(`/v1/checkpoints/${id}/computers`, { body, ...options });
  }
}

export interface Checkpoint {
  id: string;

  computerId: string;

  name: string | null;

  sizeBytes: number | null;

  status: 'none' | 'creating' | 'ready' | 'failed' | 'deleting' | 'deleted';

  statusChangedAt: string;
}

export interface CheckpointList {
  checkpoints: Array<CheckpointList.Checkpoint>;
}

export namespace CheckpointList {
  export interface Checkpoint {
    id: string;

    computerId: string;

    name: string | null;

    sizeBytes: number | null;

    status: 'none' | 'creating' | 'ready' | 'failed' | 'deleting' | 'deleted';

    statusChangedAt: string;
  }
}

export interface CheckpointRestoreParams {
  autoPause?: boolean;

  timeoutSeconds?: number;
}

export declare namespace Checkpoints {
  export {
    type Checkpoint as Checkpoint,
    type CheckpointList as CheckpointList,
    type CheckpointRestoreParams as CheckpointRestoreParams,
  };
}
