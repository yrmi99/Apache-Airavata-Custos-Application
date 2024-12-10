/**const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Route to handle content addition
app.post('/api/add-content', (req, res) => {
    try {
        // Here you would typically handle database operations
        // For this example, we'll just send a success response
        res.json({ 
            success: true, 
            message: 'Content Added' 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Error adding content' 
        });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); **/

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

// Load proto
const PROTO_PATH = path.join(__dirname, '..', 'backend', 'user.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {keepCase: true, longs: String, enums: String, defaults: true, oneofs: true});
const userProto = grpc.loadPackageDefinition(packageDefinition).user;

// In-memory user store
const users = {};

const server = new grpc.Server();

server.addService(userProto.UserManagementService.service, {
  CreateUser: (call, callback) => {
    const { name, email } = call.request;
    const id = uuidv4();
    const user = { id, name, email };
    users[id] = user;
    callback(null, { user });
  },
  GetUser: (call, callback) => {
    const { id } = call.request;
    const user = users[id];
    if (!user) {
      return callback({
        code: grpc.status.NOT_FOUND,
        message: 'User not found'
      });
    }
    callback(null, { user });
  },
  UpdateUser: (call, callback) => {
    const { id, name, email } = call.request;
    const user = users[id];
    if (!user) {
      return callback({
        code: grpc.status.NOT_FOUND,
        message: 'User not found'
      });
    }
    users[id] = { id, name, email };
    callback(null, { user: users[id] });
  },
  DeleteUser: (call, callback) => {
    const { id } = call.request;
    if (!users[id]) {
      return callback({
        code: grpc.status.NOT_FOUND,
        message: 'User not found'
      });
    }
    delete users[id];
    callback(null, { success: true });
  },
  ListUsers: (_, callback) => {
    const allUsers = Object.values(users);
    callback(null, { users: allUsers });
  }
});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  console.log("gRPC server running at http://0.0.0.0:50051");
});