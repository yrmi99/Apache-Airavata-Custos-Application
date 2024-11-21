const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const mongoose = require('mongoose');
const User = require('models/user'); // Import the User model

// Load the protobuf definitions
const PROTO_PATH = path.resolve(__dirname, './user_profile.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

//------------------------------------------------------------------------------------------------------------------
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

  // Define gRPC service
const userProto = grpc.loadPackageDefinition(packageDefinition).user;

// Define the gRPC server
const server = new grpc.Server();

// Implement the FetchUser gRPC method
server.addService(userProto.UserService.service, {
  FetchUser: async (call, callback) => {
    try {
      // Find the user in the database by userId
      const user = await User.findOne({ _id: call.request.userId });

      if (!user) {
        return callback({
          code: grpc.status.NOT_FOUND,
          details: 'User not found',
        });
      }

      // Send the user data as a response
      callback(null, { userId: user._id, name: user.name, email: user.email });
    } catch (error) {
      console.error('Error fetching user:', error);
      callback({
        code: grpc.status.INTERNAL,
        details: 'Internal server error',
      });
    }
  },

  // Implement other gRPC methods like createUser....
});

// Start the gRPC server
server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error('Failed to start gRPC server:', err);
    return;
  }
  console.log(`gRPC server running at http://localhost:50052`);
  server.start();
});
//------------------------------------------------------------------------------------------------------------------

// const userProto = grpc.loadPackageDefinition(packageDefinition).user;

// // Connect to the Python gRPC server
// const client = new userProto.UserService(
//   'localhost:50052',
//   grpc.credentials.createInsecure()
// );

// // Example gRPC calls
// client.FetchUser({ userId: '1234' }, (err, response) => {
//   if (err) {
//     console.error('Error:', err);
//   } else {
//     console.log('User fetched:', response);
//   }
// });