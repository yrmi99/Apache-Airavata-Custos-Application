import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from 'react-oauth2-code-pkce'
import { LogOut, UserIcon } from 'lucide-react';

interface TokenData {
  name?: string
  email?: string
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
};


export default function MainPage() {
  const { tokenData, token, logOut } = useContext(AuthContext)
  const navigate = useNavigate()
  const [message, setMessage] = useState('Get started by adding some content.'); //
  const [isLoading, setIsLoading] = useState(false); //

  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token, navigate])

  if (!token || !tokenData) return null

  const userData: TokenData = typeof tokenData === 'string' ? JSON.parse(tokenData) : tokenData
/////////////////////////////////////////////////////////
  const handleAddContent = async () => {
      try {
          setIsLoading(true);
          const response = await fetch('http://localhost:3001/api/add-content', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
          });

          const data = await response.json();
          
          if (data.success) {
              setMessage(data.message);
          } else {
              setMessage('Error occurred while adding content');
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

        <div style={styles.content}>
          {/* <p className="text-wrapper">Get started by adding some content.</p> */}
          {/* <button type="button" style={styles.addContent}>
            Add Content
          </button> */}
          <p className="text-wrapper">{message}</p>
            <button 
                onClick={handleAddContent}
                disabled={isLoading}
                style={styles.addContent}
            >
                {isLoading ? 'Adding...' : 'Add Content'}
            </button>
        </div>
        </div>
      </div>
  )
}