import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from 'react-oauth2-code-pkce'

interface TokenData {
  name?: string
  email?: string
}

const styles = {
  body: {
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
    fontFamily: 'Arial, sans-serif',
  },
  loginBox: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as const,
  },
  h1: {
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center' as const,
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};


export default function MainPage() {
  const { tokenData, token, logOut } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token, navigate])

  if (!token || !tokenData) return null

  const userData: TokenData = typeof tokenData === 'string' ? JSON.parse(tokenData) : tokenData
  return (
    <div style={styles.body}>
      <div style ={styles.loginBox}>
        <h1 style={styles.h1}>User Details</h1>
          <p><strong>Name:</strong> {userData.name || 'N/A'}</p>
          <p><strong>Email:</strong> {userData.email || 'N/A'}</p>
        </div>
      </div>
  )
}