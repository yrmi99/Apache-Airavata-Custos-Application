const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Load the protobuf definitions
const PROTO_PATH = path.resolve(__dirname, './user_profile.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const userProto = grpc.loadPackageDefinition(packageDefinition).user;

// Mock databases
const usersDb = {};
const groupsDb = {};

// UserService Implementation
const userService = {
  CreateUser: (call, callback) => {
    const user = call.request;
    usersDb[user.userId] = user;
    callback(null, user);
  },
  UpdateUser: (call, callback) => {
    const user = call.request;
    if (usersDb[user.userId]) {
      usersDb[user.userId] = user;
      callback(null, user);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        message: 'User not found',
      });
    }
  },
  FetchUser: (call, callback) => {
    const { userId } = call.request;
    if (usersDb[userId]) {
      callback(null, usersDb[userId]);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        message: 'User not found',
      });
    }
  },
  ListUsers: (call, callback) => {
    callback(null, { users: Object.values(usersDb) });
  },
};

// GroupService Implementation
const groupService = {
  CreateGroup: (call, callback) => {
    const group = call.request;
    groupsDb[group.groupId] = group;
    callback(null, group);
  },
  UpdateGroup: (call, callback) => {
    const group = call.request;
    if (groupsDb[group.groupId]) {
      groupsDb[group.groupId] = group;
      callback(null, group);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        message: 'Group not found',
      });
    }
  },
  FetchGroup: (call, callback) => {
    const { groupId } = call.request;
    if (groupsDb[groupId]) {
      callback(null, groupsDb[groupId]);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        message: 'Group not found',
      });
    }
  },
  ListGroups: (call, callback) => {
    callback(null, { groups: Object.values(groupsDb) });
  },
};

// Start the gRPC server
function startServer() {
  const server = new grpc.Server();
  server.addService(userProto.UserService.service, userService);
  server.addService(userProto.GroupService.service, groupService);
  server.bindAsync(
    '0.0.0.0:50051',
    grpc.ServerCredentials.createInsecure(),
    () => {
      console.log('gRPC server running at http://0.0.0.0:50051');
      server.start();
    }
  );
}

startServer();