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

// Connect to the Python gRPC server
const client = new userProto.UserService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

// Example gRPC calls
client.FetchUser({ userId: '1234' }, (err, response) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('User fetched:', response);
  }
});