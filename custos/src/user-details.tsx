import React, { useState } from 'react';
import { LogOut, UserIcon } from 'lucide-react';

interface User {
  email: string;
  name: string;
  creationDate: string;
}

interface UserDetailProps {
  user: User;
  onLogout: () => void;
  onSwitchUser: (user: User) => void; // Function to switch user
}

export default function UserDetails({user, onLogout, onSwitchUser}: UserDetailProps) {
  

  const users: User[] = [
    { name: user.name, email: user.email, creationDate: '01/09/2021'},
    { name: 'Jane Smith', email: 'jane.smith@example.com', creationDate: '07/19/2021' },
    { name: 'Anonymous', email: 'anonymous@gatech.edu', creationDate: '06/25/2021'},
  ];

  const [selectedUser, setSelectedUser] = useState<User>(users[0]); // Set the initial user to the first in the list

  const handleSwitchUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const user = users.find(u => u.email === event.target.value);
    if (user) {
      setSelectedUser(user);
      onSwitchUser(user); // Call the parent function to switch user
    }
  };


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
      borderRadius: '4px',
      marginTop: '16px',
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
      marginTop: '64px',
    }
  }

  return (
    <div style={styles.body}>
      <div style={styles.div}>
        <h2 style={styles.title}>MyApp</h2>
        <span style={styles.welcome}>Welcome, {selectedUser.name}</span>

        <div style={styles.userContainer}>
          <div style={styles.iconColumn}>
            <UserIcon style={{marginRight:'32px'}} size={170} color="#6d53ac" strokeWidth={1.5}/>
          </div>
          <div style={styles.infoColumn}>
            <div style={styles.userInfoText}>
              <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>User Info</div>
              <div>Date of Account Creation: {selectedUser.creationDate} </div>
              <div>
                Username: {selectedUser.name}
                <br />
                Email: {selectedUser.email}
              </div>
            </div>

            <div style={styles.controlsContainer}>
              {/*------------ do not modify the button ------------------*/}
              <button 
                onClick={onLogout} 
                style={styles.logoutButton}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(109, 83, 172, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px rgba(109, 83, 172, 0.5)'}
                onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <LogOut style={{marginRight: '8px'}} color="#6D53AC" size={20} strokeWidth={3} />
                <span>Logout</span>
              </button>
              {/*--------------------------------------------------------*/}
              <select value={selectedUser.email} onChange={handleSwitchUser} style={styles.select}>
                {users.map(user => (
                  <option key={user.email} value={user.email}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div style={styles.content}>
          <p className="text-wrapper">Get started by adding some content.</p>
          <button type="button" style={styles.addContent}>
            Add Content
          </button>
        </div>
      </div>
    </div>
  );
}; 
    