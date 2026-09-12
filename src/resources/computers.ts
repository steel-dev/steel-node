// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as CheckpointsAPI from './checkpoints';

export class Computers extends APIResource {
  /**
   * Declare a new computer; it boots asynchronously.
   */
  create(body: ComputerCreateParams, options?: Core.RequestOptions): Core.APIPromise<Computer> {
    return this._client.post('/v1/computers', { body, ...options });
  }

  /**
   * Retrieve a computer by its ID.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Computer> {
    return this._client.get(`/v1/computers/${id}`, options);
  }

  /**
   * List the organization's computers, newest first; deleted ones are omitted.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ComputerList> {
    return this._client.get('/v1/computers', options);
  }

  /**
   * Request a delete; already deleting or deleted is a success.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<Computer> {
    return this._client.delete(`/v1/computers/${id}`, options);
  }

  /**
   * Save the computer's current state as a checkpoint; it uploads asynchronously.
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
   * Request a pause; already pausing or paused is a success.
   */
  pause(id: string, options?: Core.RequestOptions): Core.APIPromise<Computer> {
    return this._client.post(`/v1/computers/${id}/pause`, options);
  }

  /**
   * The organization's computer limits and current usage.
   */
  quota(options?: Core.RequestOptions): Core.APIPromise<ComputerQuota> {
    return this._client.get('/v1/computers/quota', options);
  }

  /**
   * Reboot a running computer in place. The disk survives; memory does not.
   */
  restart(id: string, options?: Core.RequestOptions): Core.APIPromise<Computer> {
    return this._client.post(`/v1/computers/${id}/restart`, options);
  }

  /**
   * Request a resume; already waking or running is a success.
   */
  resume(id: string, options?: Core.RequestOptions): Core.APIPromise<Computer> {
    return this._client.post(`/v1/computers/${id}/resume`, options);
  }

  /**
   * Boot a stopped computer; already waking or running is a success.
   */
  start(id: string, options?: Core.RequestOptions): Core.APIPromise<Computer> {
    return this._client.post(`/v1/computers/${id}/start`, options);
  }

  /**
   * Shut the computer down but keep its disk; already stopped is a success. Start it
   * again to pick up where the disk left off.
   */
  stop(id: string, options?: Core.RequestOptions): Core.APIPromise<Computer> {
    return this._client.post(`/v1/computers/${id}/stop`, options);
  }

  /**
   * The computer's status ledger, newest first.
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

  environmentId: string | null;

  idleTimeoutSeconds: number;

  memoryMib: number;

  projectId: string;

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

    environmentId: string | null;

    idleTimeoutSeconds: number;

    memoryMib: number;

    projectId: string;

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
  /**
   * Pause at the timeout instead of stopping, so a later resume continues where the
   * computer left off. The pause begins about 30 seconds before the deadline.
   */
  autoPause?: boolean;

  /**
   * Ignored today. Every computer gets the disk its host is configured for.
   */
  diskMib?: number;

  env?: { [key: string]: string };

  environmentId?: string;

  /**
   * Pause the computer after this many seconds without incoming traffic, so a later
   * resume continues where it left off. 0 disables idle pausing.
   */
  idleTimeoutSeconds?: number;

  memoryMib?: number;

  name?: string;

  networkPolicy?: ComputerCreateParams.NetworkPolicy;

  networkSecrets?: Array<ComputerCreateParams.NetworkSecret>;

  projectId?: string;

  secrets?: { [key: string]: string };

  template?: string;

  /**
   * How long the computer may run before it is stopped, or paused when autoPause is
   * set. A resume starts a fresh window.
   */
  timeoutSeconds?: number;

  vcpu?: number;
}

export namespace ComputerCreateParams {
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

  export interface NetworkSecret {
    domain: string;

    header: string;

    secretId: string;

    template: string;

    port?: number;
  }
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
