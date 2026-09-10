// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as CheckpointsAPI from './checkpoints';

export class Computers extends APIResource {
  /**
   * Create a computer
   */
  create(body: ComputerCreateParams, options?: Core.RequestOptions): Core.APIPromise<Computer> {
    return this._client.post('/v1/computers', { body, ...options });
  }

  /**
   * Get a computer
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Computer> {
    return this._client.get(`/v1/computers/${id}`, options);
  }

  /**
   * List computers
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ComputerList> {
    return this._client.get('/v1/computers', options);
  }

  /**
   * Delete a computer
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<Computer> {
    return this._client.delete(`/v1/computers/${id}`, options);
  }

  /**
   * Create a checkpoint
   */
  createCheckpoint(
    id: string,
    body: ComputerCreateCheckpointParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CheckpointsAPI.Checkpoint> {
    return this._client.post(`/v1/computers/${id}/checkpoints`, { body, ...options });
  }

  /**
   * Give exactly one of command (run by /bin/sh -c) and argv. Output is text with
   * stdout and stderr merged. With stream true (the default) the response is
   * newline-delimited JSON events: start, output, keepalive, exit. With stream false
   * the output is collected into one JSON result, cut at 8 MiB and marked truncated.
   * timeoutSeconds bounds the run time (at most 3600) and is reported as timedOut
   * with exit code -1. The command is killed when the client disconnects; start
   * long-lived processes with setsid nohup.
   */
  exec(id: string, body: ComputerExecParams, options?: Core.RequestOptions): Core.APIPromise<ExecResult> {
    return this._client.post(`/v1/computers/${id}/exec`, { body: { stream: false, ...body }, ...options });
  }

  /**
   * Pause a computer
   */
  pause(id: string, options?: Core.RequestOptions): Core.APIPromise<Computer> {
    return this._client.post(`/v1/computers/${id}/pause`, options);
  }

  /**
   * Get computer quota
   */
  quota(options?: Core.RequestOptions): Core.APIPromise<ComputerQuota> {
    return this._client.get('/v1/computers/quota', options);
  }

  /**
   * Resume a computer
   */
  resume(id: string, options?: Core.RequestOptions): Core.APIPromise<Computer> {
    return this._client.post(`/v1/computers/${id}/resume`, options);
  }

  /**
   * List computer transitions
   */
  transitions(id: string, options?: Core.RequestOptions): Core.APIPromise<ComputerTransitions> {
    return this._client.get(`/v1/computers/${id}/transitions`, options);
  }
}

export interface Computer {
  id: string;

  autoPause: boolean;

  checkpointId: string | null;

  diskMib: number;

  memoryMib: number;

  region: string | null;

  status:
    | 'none'
    | 'creating'
    | 'running'
    | 'pausing'
    | 'paused'
    | 'waking'
    | 'stopped'
    | 'failed'
    | 'deleting'
    | 'deleted';

  statusChangedAt: string;

  template: string | null;

  timeoutSeconds: number | null;

  vcpu: number;
}

export interface ComputerList {
  computers: Array<ComputerList.Computer>;
}

export namespace ComputerList {
  export interface Computer {
    id: string;

    autoPause: boolean;

    checkpointId: string | null;

    diskMib: number;

    memoryMib: number;

    region: string | null;

    status:
      | 'none'
      | 'creating'
      | 'running'
      | 'pausing'
      | 'paused'
      | 'waking'
      | 'stopped'
      | 'failed'
      | 'deleting'
      | 'deleted';

    statusChangedAt: string;

    template: string | null;

    timeoutSeconds: number | null;

    vcpu: number;
  }
}

export interface ComputerQuota {
  checkpointCount: number;

  checkpointLimit: number;

  computerCount: number;

  computerLimit: number;

  runningCount: number;

  runningLimit: number;
}

export interface ComputerTransitions {
  transitions: Array<ComputerTransitions.Transition>;
}

export namespace ComputerTransitions {
  export interface Transition {
    at: string;

    detail: unknown;

    from:
      | 'none'
      | 'creating'
      | 'running'
      | 'pausing'
      | 'paused'
      | 'waking'
      | 'stopped'
      | 'failed'
      | 'deleting'
      | 'deleted';

    seq: number;

    source: 'intent' | 'report' | 'feed' | 'sweep';

    to:
      | 'none'
      | 'creating'
      | 'running'
      | 'pausing'
      | 'paused'
      | 'waking'
      | 'stopped'
      | 'failed'
      | 'deleting'
      | 'deleted';
  }
}

export interface ExecResult {
  exitCode: number;

  output: string;

  timedOut: boolean;

  truncated: boolean;
}

export interface ComputerCreateParams {
  template: string;

  autoPause?: boolean;

  diskMib?: number;

  memoryMib?: number;

  region?:
    | 'us-east'
    | 'us-west'
    | 'us-central'
    | 'eu-west'
    | 'eu-central'
    | 'ap-northeast'
    | 'ap-southeast'
    | 'sa-east';

  timeoutSeconds?: number;

  vcpu?: number;
}

export interface ComputerCreateCheckpointParams {
  name?: string;
}

export interface ComputerExecParams {
  /**
   * A program and its arguments, run without a shell.
   */
  argv?: Array<string>;

  /**
   * A shell command, run by /bin/sh -c.
   */
  command?: string;

  cwd?: string;

  env?: { [key: string]: string };

  timeoutSeconds?: number;
}

export declare namespace Computers {
  export {
    type Computer as Computer,
    type ComputerList as ComputerList,
    type ComputerQuota as ComputerQuota,
    type ComputerTransitions as ComputerTransitions,
    type ExecResult as ExecResult,
    type ComputerCreateParams as ComputerCreateParams,
    type ComputerCreateCheckpointParams as ComputerCreateCheckpointParams,
    type ComputerExecParams as ComputerExecParams,
  };
}
