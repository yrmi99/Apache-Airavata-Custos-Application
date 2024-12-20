/**
 * @fileoverview gRPC-Web generated client stub for user
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: user.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.user = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.user.UserManagementServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.user.UserManagementServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.CreateUserRequest,
 *   !proto.user.CreateUserResponse>}
 */
const methodDescriptor_UserManagementService_CreateUser = new grpc.web.MethodDescriptor(
  '/user.UserManagementService/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.user.CreateUserRequest,
  proto.user.CreateUserResponse,
  /**
   * @param {!proto.user.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.CreateUserResponse.deserializeBinary
);


/**
 * @param {!proto.user.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.user.CreateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.CreateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.UserManagementServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.UserManagementService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserManagementService_CreateUser,
      callback);
};


/**
 * @param {!proto.user.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.CreateUserResponse>}
 *     Promise that resolves to the response
 */
proto.user.UserManagementServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.UserManagementService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserManagementService_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.GetUserRequest,
 *   !proto.user.GetUserResponse>}
 */
const methodDescriptor_UserManagementService_GetUser = new grpc.web.MethodDescriptor(
  '/user.UserManagementService/GetUser',
  grpc.web.MethodType.UNARY,
  proto.user.GetUserRequest,
  proto.user.GetUserResponse,
  /**
   * @param {!proto.user.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.user.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.user.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.UserManagementServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.UserManagementService/GetUser',
      request,
      metadata || {},
      methodDescriptor_UserManagementService_GetUser,
      callback);
};


/**
 * @param {!proto.user.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.GetUserResponse>}
 *     Promise that resolves to the response
 */
proto.user.UserManagementServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.UserManagementService/GetUser',
      request,
      metadata || {},
      methodDescriptor_UserManagementService_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.UpdateUserRequest,
 *   !proto.user.UpdateUserResponse>}
 */
const methodDescriptor_UserManagementService_UpdateUser = new grpc.web.MethodDescriptor(
  '/user.UserManagementService/UpdateUser',
  grpc.web.MethodType.UNARY,
  proto.user.UpdateUserRequest,
  proto.user.UpdateUserResponse,
  /**
   * @param {!proto.user.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.UpdateUserResponse.deserializeBinary
);


/**
 * @param {!proto.user.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.user.UpdateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.UpdateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.UserManagementServiceClient.prototype.updateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.UserManagementService/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_UserManagementService_UpdateUser,
      callback);
};


/**
 * @param {!proto.user.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.UpdateUserResponse>}
 *     Promise that resolves to the response
 */
proto.user.UserManagementServicePromiseClient.prototype.updateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.UserManagementService/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_UserManagementService_UpdateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.DeleteUserRequest,
 *   !proto.user.DeleteUserResponse>}
 */
const methodDescriptor_UserManagementService_DeleteUser = new grpc.web.MethodDescriptor(
  '/user.UserManagementService/DeleteUser',
  grpc.web.MethodType.UNARY,
  proto.user.DeleteUserRequest,
  proto.user.DeleteUserResponse,
  /**
   * @param {!proto.user.DeleteUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.DeleteUserResponse.deserializeBinary
);


/**
 * @param {!proto.user.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.user.DeleteUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.DeleteUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.UserManagementServiceClient.prototype.deleteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.UserManagementService/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_UserManagementService_DeleteUser,
      callback);
};


/**
 * @param {!proto.user.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.DeleteUserResponse>}
 *     Promise that resolves to the response
 */
proto.user.UserManagementServicePromiseClient.prototype.deleteUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.UserManagementService/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_UserManagementService_DeleteUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.user.ListUsersResponse>}
 */
const methodDescriptor_UserManagementService_ListUsers = new grpc.web.MethodDescriptor(
  '/user.UserManagementService/ListUsers',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.user.ListUsersResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.user.ListUsersResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.user.ListUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.ListUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.user.UserManagementServiceClient.prototype.listUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/user.UserManagementService/ListUsers',
      request,
      metadata || {},
      methodDescriptor_UserManagementService_ListUsers,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.ListUsersResponse>}
 *     Promise that resolves to the response
 */
proto.user.UserManagementServicePromiseClient.prototype.listUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/user.UserManagementService/ListUsers',
      request,
      metadata || {},
      methodDescriptor_UserManagementService_ListUsers);
};


module.exports = proto.user;

