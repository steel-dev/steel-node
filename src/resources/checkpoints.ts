// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ComputersAPI from './computers';

export class Checkpoints extends APIResource {
  /**
   * Get a checkpoint
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Checkpoint> {
    return this._client.get(`/v1/checkpoints/${id}`, options);
  }

  /**
   * List checkpoints
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CheckpointList> {
    return this._client.get('/v1/checkpoints', options);
  }

  /**
   * Delete a checkpoint
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<Checkpoint> {
    return this._client.delete(`/v1/checkpoints/${id}`, options);
  }

  /**
   * Create a computer from a checkpoint
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
