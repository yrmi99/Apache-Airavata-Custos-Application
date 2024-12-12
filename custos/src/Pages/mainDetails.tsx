import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from 'react-oauth2-code-pkce'
<<<<<<< HEAD
import { UserIcon } from 'lucide-react';
import * as grpcWeb from 'grpc-web';
import {UserServiceClient} from '../backend/grpc/User_profileServiceClientPb'; // service client imported from our .proto
import { GroupServiceClient } from '../backend/grpc/User_profileServiceClientPb';  // Service client
import {
  UserProfile,  // Message types imported from our .proto
  Group,
  UserRequest,
  GroupRequest,
  UserList,
  GroupList,
  Empty
} from '../backend/grpc/user_profile_pb';  // Message types
=======
import { LogOut, UserIcon } from 'lucide-react';
import { UserManagementServiceClient } from '../generated2/UserServiceClientPb';
import { GroupManagementServiceClient } from '../generated2/GroupServiceClientPb'; // Adjust path as needed
import { 
  CreateUserRequest, 
  ListUsersResponse, 
  GetUserRequest, 
  UpdateUserRequest, 
  DeleteUserRequest 
} from '../generated2/user_pb';

import {
  CreateGroupRequest,
  UpdateGroupRequest,
  DeleteGroupRequest,
} from '../generated2/group_pb';

import { Empty } from 'google-protobuf/google/protobuf/empty_pb';


const client = new UserManagementServiceClient('http://localhost:8080', null, null);
const groupClient = new GroupManagementServiceClient('http://localhost:8080', null, null);
>>>>>>> newMilestone

interface TokenData {
  name?: string
  email?: string
}

interface Group {
  id: string;
  name: string;
  description: string;
}

interface User {
  id: string
  name: string
  email: string
}


const styles = {
  body: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '60px',
    background: 'linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(234, 221, 255) 100%)',
  },
  div: {
    width: '100%',
    padding: '32px',
    maxWidth:'800px',
    //marginTop: '40px',
  },
  title: {
    background: 'linear-gradient(180deg, rgb(20.61, 14.35, 36) 0%, rgb(75.2, 52.36, 131.37) 51.5%, rgb(108.91, 83.19, 172.13) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    fontSize: '50px',
    fontWeight: '900',
    marginBottom: '16px',
  },
  welcome: {
    background: 'linear-gradient(180deg, rgb(20.61, 14.35, 36) 0%, rgb(75.2, 52.36, 131.37) 51.5%, rgb(108.91, 83.19, 172.13) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    fontSize: '46px',
    fontWeight: '800',
    marginBottom: '32px',
  },
  logoutButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '8px 16px',
    border: 'none',
    backgroundColor: 'ece6f0',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: 500,
    color: '#333',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '0px 4px 4px #00000040',
    marginRight: '16px',
  },
  
  addContent: {
    padding: '5px 16px',
    backgroundColor: '#e8def8',
    color: 'rgb(75.2, 52.36, 131.37)',
    border: '1px solid',
    borderColor: '#79747e',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontSize: '12px',
    fontWeight: 700,
    cursor: 'pointer',
    borderRadius: '20px',
    marginTop: '16px',
    marginBottom: '16px'
  },
  select: {
    padding: '8px 16px',
    border: '1px solid #ccc',
    borderRadius: '50px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  userContainer: {
    display: 'flex',
    marginBottom: '32px',
    marginTop: '32px',
  },
  userInfoText: {
    flex: 1,
  },
  logo: {
    marginRight: '32px',
  },
  iconColumn: {
    marginRight: '32px',
  },
  infoColumn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
  },
  controlsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    marginTop: '30px',
  }
};
//------------------------------------------------------------
const ClientPage = () => {
  const [userId, setUserId] = useState('')
  const [user, setUser] = useState<any>(null)
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [groupId, setGroupId] = useState('')
  const [group, setGroup] = useState<any>(null)
  const [groupMessage, setGroupMessage] = useState('')
  const [isGroupLoading, setIsGroupLoading] = useState(false)

  const userClient = new UserServiceClient('http://localhost:8080')
  const groupClient = new GroupServiceClient('http://localhost:8080')

  const fetchUser = (id: string) => {
    setIsLoading(true)
    const request = new UserRequest()
    request.setUserid(id)

    userClient.fetchUser(request, {}, (err: grpcWeb.RpcError, response: UserProfile) => {
      setIsLoading(false)
      if (err) {
        setMessage('Error fetching user data')
        console.error(err)
      } else {
        setUser(response.toObject())
      }
    })
  }

  const fetchGroup = (id: string) => {
    setIsGroupLoading(true)
    const request = new GroupRequest()
    request.setGroupid(id)

    groupClient.fetchGroup(request, {}, (err: grpcWeb.RpcError, response: Group) => {
      setIsGroupLoading(false)
      if (err) {
        setGroupMessage('Error fetching group data')
        console.error(err)
      } else {
        setGroup(response.toObject())
      }
    })
  }

  useEffect(() => {
    if (userId) {
      fetchUser(userId)
    }
    if (groupId) {
      fetchGroup(groupId);
    }
  }, [userId, groupId]);
  
  return (
    <div>
      {/* Render User and Group Info */}
    </div>
  )
};
//------------------------------------------------------------

export default function MainPage() {
  const { tokenData, token, logOut } = useContext(AuthContext)
  const navigate = useNavigate()
  const [message, setMessage] = useState('Get started by adding some content.'); //
  const [isLoading, setIsLoading] = useState(false); //
  const [isAddingGroup, setAdding] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [newUserData, setnewUserData] = useState({name: '', email: ''})
  const [users, setUsers] = useState<User[]>([])
  const [groups, setGroups] = useState<Group[]>([]);
  const [newGroupData, setNewGroupData] = useState({ name: '', description: '' });


  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token, navigate])

  useEffect(() => {
    promptInfo();
  }, [])

   // Fetching initial groups data
   useEffect(() => {
    const fetchGroups = async () => {
      // Assuming a similar client function for fetching groups exists.
      const req = new Empty();
      groupClient.listGroups(req, {}, (err, response) => {
        if (err) {
          console.error('Error fetching groups:', err);
          return;
        }
        const groupList = response.getGroupsList().map(group => ({
          id: group.getId(),
          name: group.getName(),
          description: group.getDescription(),
        }));
        setGroups(groupList);
      });
    };
    fetchGroups();
  }, []);

  useEffect(() => {
    const req = new Empty();
    client.listUsers(req, {}, (err, response) => {
      if (err) {
        console.error('Error fetching users:', err);
        return;
      }

      // Convert the protobuf User objects into a simple JS array of objects
      const userList = response.getUsersList().map(user => ({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail()
      }));
      setUsers(userList);
    });
  }, [])

  if (!token || !tokenData) return null

  const tableHeaderStyle = {
    borderBottom: '2px solid #ccc',
    padding: '10px',
    backgroundColor: '#f4f4f4',
  };
  
  const tableCellStyle = {
    borderBottom: '1px solid #ccc',
    padding: '10px',
  };

  const userData: TokenData = typeof tokenData === 'string' ? JSON.parse(tokenData) : tokenData
<<<<<<< HEAD
=======
/////////////////////////////////////////////////////////
  const promptInfo = async() => {
    const req = new GetUserRequest();
    const userinfo = await fetch('https://api.playground.usecustos.org/api/v1/user-management/userinfo', {
            method: 'GET',
            headers: {
              client_id: 'custos-w2pcilydswffevyrswct-10000000',
              Authorization: `Bearer ${token}`,
            }
    })
    const info = await userinfo.json()
    req.setEmail(info.email)
    client.getUser(req, {}, (err, response) => {
      if (err) {
        if (err.code == 5) {
          setUserNotFound(true)
        }
        else {
          console.error("Error fetching user:", err.message)
        }
      }
    });
  };

  const handleCreateUser = () => {
    const req = new CreateUserRequest();
    req.setName(newUserData.name);
    req.setEmail(newUserData.email);
    client.createUser(req, {}, (err, response) => {
      if (err) {
        console.error("Error creating user:", err);
        return;
      }
      setnewUserData({ name: '', email: '' });
    });
    setUserNotFound(false)
  };

  const handleUpdateUser = () => {
    const req = new UpdateUserRequest();
    req.setName(newUserData.name);
    req.setEmail(newUserData.email);
    client.updateUser(req, {}, (err, response) => {
      if (err) {
        console.error("Error updating user:", err);
        return;
      }
      setnewUserData({ name: '', email: '' });
    });
    setUserNotFound(false)
  };

  const handleDeleteUser = () => {
    const req = new DeleteUserRequest();
    req.setEmail(newUserData.email);
    client.deleteUser(req, {}, (err, response) => {
      if (err) {
        console.error("Error creating user:", err);
        return;
      }
      setnewUserData({ name: '', email: '' });
    });
    setUserNotFound(false)
  };

  const handleCreateGroup = () => {
    const req = new CreateGroupRequest();
    req.setName(newGroupData.name);
    req.setDescription(newGroupData.description);

    groupClient.createGroup(req, {}, (err, response) => {
      if (err) {
        console.error('Error creating group:', err);
        return;
      }
      setNewGroupData({ name: '', description: '' }); // Clear form after success
      setGroups(prevGroups => [
        ...prevGroups,
        { id: response.getId(), name: newGroupData.name, description: newGroupData.description },
      ]);
    });
  };
  
  const handleEditGroup = (groupId: string, updatedData: { name: string; description: string }) => {
    const req = new UpdateGroupRequest();
    req.setId(groupId);
    req.setName(updatedData.name);
    req.setDescription(updatedData.description);

    groupClient.updateGroup(req, {}, (err) => {
      if (err) {
        console.error('Error updating group:', err);
        return;
      }
      setGroups(prevGroups => 
        prevGroups.map(group =>
          group.id === groupId ? { ...group, ...updatedData } : group
        )
      );
    });
  };
  
  const handleDeleteGroup = (groupId: string) => {
    const req = new DeleteGroupRequest();
    req.setId(groupId);

    groupClient.deleteGroup(req, {}, (err) => {
      if (err) {
        console.error('Error deleting group:', err);
        return;
      }
      setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId));
    });
  };
  
  const handleGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewGroupData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleConditionalAction = () => {
    const { name, email } = newUserData;
  
    if (name && email) {
      const req = new GetUserRequest();
      req.setEmail(email)
      client.getUser(req, {}, (err, response) => {
        if (err) {
          handleCreateUser();
        } else {
          handleUpdateUser();
        }
      })
    } else if (email) {
      // Only email is filled: Delete the user
      handleDeleteUser();
    } else {
      // Neither field is filled: Show an error or prompt the user
      alert("Please fill out at least one field.");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setnewUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
>>>>>>> newMilestone

  const handleAddContent = async () => {
      try {
          setIsLoading(true);
          const response = await fetch('http://localhost:3001/api/add-content', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
          });

          const userinfo = await fetch('https://api.playground.usecustos.org/api/v1/user-management/userinfo', {
            method: 'GET',
            headers: {
              client_id: 'custos-w2pcilydswffevyrswct-10000000',
              Authorization: `Bearer ${token}`,
            }
          });

          const data = await response.json();
          const info = await userinfo.json();
          let validated = false;

          for (const group of info.groups) {
              if (group == "Adminsss"){
                  validated = true;
              }
          }
          
          if (validated && data.success) {
              setMessage(data.message);
          } else {
              if (!validated) {
                setMessage('You do not have access to this control')
              } else {
                setMessage('Error occurred while adding content');
              }
          }
      } catch (error) {
          setMessage('Failed to connect to server');
          console.error('Error:', error);
      } finally {
          setIsLoading(false);
      }   
  };
//------------------------------------------------------------
  return (
    <div>
      <></>

      {userNotFound &&
      <form onSubmit={handleCreateUser}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newUserData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={{
              padding: '8px',
              width: '300px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={newUserData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={{
              padding: '8px',
              width: '300px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>}

      {!userNotFound &&
      <div style={styles.body}>
        <div style={styles.div}>
          <h2 style={styles.title}>MyApp</h2>
          <span style={styles.welcome}>Welcome, {userData.name || 'N/A'}</span>

          <div style={styles.userContainer}>
            <div style={styles.iconColumn}>
              <UserIcon style={{marginRight:'32px'}} size={170} color="#6d53ac" strokeWidth={1.5}/>
            </div>
            <div style={styles.infoColumn}>
              <div style={styles.userInfoText}>
                <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>User Info</div>
                <div>
                  Name: {userData.name || 'N/A'}
                  <br />
                  Email: {userData.email || 'N/A'}
                </div>
              </div>

              <div style={styles.controlsContainer}>
              </div>
            </div>
          </div>

        <table
          style={{width: '100%',borderCollapse: 'collapse',textAlign: 'left',}}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>ID</th>
              <th style={tableHeaderStyle}>Name</th>
              <th style={tableHeaderStyle}>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={3} style={{ textAlign: 'center', padding: '10px' }}>
                  No users available.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td style={tableCellStyle}>{user.id}</td>
                  <td style={tableCellStyle}>{user.name}</td>
                  <td style={tableCellStyle}>{user.email}</td>
                </tr>
              ))
            )}
          </tbody>
      </table>
      <br></br><br></br>
          <div style={{alignItems:'center'}} >To Create, input a new Name and Email</div>
          <div style={{alignItems:'center'}} >To Update, input a new Name and current Email</div>
          <div style={{alignItems:'center'}} >To Delete, input a current Email</div>

          <div style={styles.content}>
            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission
                handleConditionalAction();}}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
              }}
            >
              <label style={{ fontWeight: 'bold' }}>
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newUserData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  style={{
                    padding: '8px',
                    width: '300px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                  }}
                />
              </label>

              <label style={{ fontWeight: 'bold' }}>
                Email:
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={newUserData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  style={{
                    padding: '8px',
                    width: '300px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                  }}
                />
              </label>

              <button
                type="submit"
                style={{
                  padding: '5px 15px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: '#007BFF',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Create
              </button>
              </form>
              <p className="group-wrapper">{message}</p>
              <button 
                  onClick={handleAddContent}
                  disabled={isAddingGroup}
                  style={styles.addContent}
              >
                  {isAddingGroup ? 'Loading...' : 'Add Group'}
              </button>
          </div>
          <div style={styles.content}>
            <h2>Create a New Group</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateGroup();
              }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}
            >
              <input
                type="text"
                placeholder="Group Name"
                value={newGroupData.name}
                onChange={(e) => setNewGroupData({ ...newGroupData, name: e.target.value })}
                required
                style={{
                  padding: '10px',
                  marginBottom: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  width: '100%',
                  maxWidth: '400px',
                }}
              />
              <textarea
                placeholder="Group Description"
                value={newGroupData.description}
                onChange={(e) => setNewGroupData({ ...newGroupData, description: e.target.value })}
                required
                style={{
                  padding: '10px',
                  marginBottom: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  width: '100%',
                  maxWidth: '400px',
                  minHeight: '80px',
                }}
              />
              <button
                type="submit"
                style={{
                  ...styles.addContent,
                  padding: '10px 20px',
                  borderRadius: '5px',
                  backgroundColor: 'rgb(75.2, 52.36, 131.37)',
                  color: '#fff',
                }}
              >
                Create Group
              </button>
            </form>

            <h2>Existing Groups</h2>
            <ul style={{ listStyle: 'none', padding: 0, width: '100%', maxWidth: '400px' }}>
              {groups.map((group) => (
                <li
                  key={group.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px',
                    marginBottom: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    backgroundColor: '#f9f9f9',
                  }}
                >
                  <div>
                    <strong>{group.name}</strong>
                    <p style={{ margin: 0 }}>{group.description}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => handleEditGroup(group.id, { name: group.name, description: group.description })}
                      style={{
                        ...styles.addContent,
                        padding: '5px 10px',
                        marginRight: '5px',
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteGroup(group.id)}
                      style={{
                        ...styles.addContent,
                        padding: '5px 10px',
                        backgroundColor: '#e74c3c',
                        color: '#fff',
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>
        }
      </div>
  )
}