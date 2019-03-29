// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as gax from 'google-gax';
import * as path from 'path';
import * as protobuf from 'protobufjs';

import * as packageJson from '../../package.json';
import * as protos from '../../pbjs-genfiles/protos';
import * as gapicConfig from './echo_client_config.json';

const version = packageJson.version;

export interface ClientOptions extends gax.GrpcClientOptions,
                                       gax.GoogleAuthOptions,
                                       gax.ClientStubOptions {
  libName?: string;
  libVersion?: string;
  clientConfig?: gax.ClientConfig;
}

interface Descriptors {
  page: {[name: string]: gax.PageDescriptor};
  stream: {[name: string]: gax.StreamDescriptor};
  longrunning: {[name: string]: gax.LongrunningDescriptor};
}

export interface Callback<ResponseObject> {
  (err: Error|null|undefined, value?: ResponseObject|null): void;
}

export interface PaginationCallback<
    RequestObject, ResponseObject, ResponseType> {
  (err: Error|null, values?: ResponseType[], nextPageRequest?: RequestObject,
   rawResponse?: ResponseObject): void;
}

export interface PaginationResponse<
    RequestObject, ResponseObject, ResponseType> {
  values?: ResponseType[];
  nextPageRequest?: RequestObject;
  rawResponse?: ResponseObject;
}

export class EchoClient {
  _descriptors: Descriptors = {page: {}, stream: {}, longrunning: {}};
  _innerApiCalls: {[name: string]: Function};
  auth: gax.GoogleAuth;

  constructor(opts: ClientOptions) {
    // Ensure that options include the service address and port.
    opts = Object.assign(
        {
          clientConfig: {},
          port: (this.constructor as typeof EchoClient).port,
          servicePath: (this.constructor as typeof EchoClient).servicePath,
        },
        opts);

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = (this.constructor as typeof EchoClient).scopes;
    const gaxGrpc = new gax.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    const clientHeader = [
      `gl-node/${process.version}`,
      `grpc/${gaxGrpc.grpcVersion}`,
      `gax/${gax.version}`,
      `gapic/${version}`,
    ];
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    const gaxProtos = Object.assign(
        {},
        gaxGrpc.loadProto(
            path.join(__dirname, '..', '..', 'protos'),
            'google/showcase/v1alpha3/echo.proto'));

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      pagedExpand:
          new gax.PageDescriptor('pageToken', 'nextPageToken', 'responses')
    };

    // Some of the methods on this service provide streaming responses.
    // Provide descriptors for these.
    this._descriptors.stream = {
      expand: new gax.StreamDescriptor(gax.StreamType.SERVER_STREAMING),
      collect: new gax.StreamDescriptor(gax.StreamType.CLIENT_STREAMING),
      chat: new gax.StreamDescriptor(gax.StreamType.BIDI_STREAMING)
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
        'google.showcase.v1alpha3.Echo', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.showcase.v1alpha2.Echo.
    const echoStub =
        // @ts-ignore We cannot check types that are loaded in runtime.
        gaxGrpc.createStub(gaxProtos.google.showcase.v1alpha3.Echo, opts);

    const echoStubMethods =
        ['echo', 'expand', 'collect', 'chat', 'pagedExpand', 'wait'];

    for (const methodName of echoStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
          echoStub.then(
              // @ts-ignore
              stub => function() {
                const args = Array.prototype.slice.call(arguments, 0);
                stub[methodName].apply(stub, args);
              },
              (err: Error|null|undefined) => () => {
                throw err;
              }),
          defaults[methodName],
          this._descriptors.page[methodName] ||
              this._descriptors.stream[methodName] ||
              this._descriptors.longrunning[methodName]);
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'localhost';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 7469;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return [];
  }

  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string>): void;
  getProjectId(callback?: Callback<string>): Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  echo(
      request: protos.google.showcase.v1alpha3.EchoRequest,
      options?: gax.CallOptions):
      Promise<protos.google.showcase.v1alpha3.EchoResponse>;
  echo(
      request: protos.google.showcase.v1alpha3.EchoRequest,
      options: gax.CallOptions,
      callback: Callback<protos.google.showcase.v1alpha3.EchoResponse>): void;
  echo(
      request: protos.google.showcase.v1alpha3.EchoRequest,
      optionsOrCallback?: gax.CallOptions|
      Callback<protos.google.showcase.v1alpha3.EchoResponse>,
      callback?: Callback<protos.google.showcase.v1alpha3.EchoResponse>):
      Promise<protos.google.showcase.v1alpha3.EchoResponse>|void {
    let options = optionsOrCallback;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    options = options || {};
    if (callback) {
      return this._innerApiCalls.echo(request, options, callback);
    }
    return new Promise<protos.google.showcase.v1alpha3.EchoResponse>(
        (resolve, reject) => {
          const promiseCallback =
              (err: Error|null|undefined,
               response: protos.google.showcase.v1alpha3.EchoResponse) => {
                if (err) {
                  reject(err);
                }
                resolve(response);
              };
          this._innerApiCalls.echo(request, options, promiseCallback);
        });
  }

  test() {
    console.log(protos);
  }
}
