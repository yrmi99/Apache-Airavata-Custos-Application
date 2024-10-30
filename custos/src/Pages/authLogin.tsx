import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext, type IAuthContext } from 'react-oauth2-code-pkce'


const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(218, 239, 232) 100%)',
    padding: '20px',
  },
  formContainer: {
    width: '100%',
    maxWidth: '442px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '20px',
  },
  title: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontSize: '40px',
    fontWeight: 800,
    textAlign: 'center' as const,
    background: 'linear-gradient(180deg, rgb(14.35, 36, 21.57) 0%, rgb(52.36, 131.37, 108.98) 51.5%, rgb(108, 217.81, 186.7) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '20px',
  },
  inputField: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  label: {
    fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
    fontSize: '120%',
    textAlign: 'left' as const,
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    fontFamily: 'monospace',
    border: '1px solid #b3b3b3',
    borderRadius: '4px',
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    color: '#1e88e5',
    textDecoration: 'underline',
    fontSize: '14px',
    cursor: 'pointer',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#14ae5ceb',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0px 4px 4px #00000040',
  },
  eyeButton: {
    position: 'absolute' as const,
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },
}

export default function AuthLogin() {
    const { tokenData, token, logIn, logOut, idToken, error } = useContext<IAuthContext>(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            navigate('/dashboard')
        }
    }, [token, navigate])

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Welcome to our App!</h2>
      <button style={styles.button} onClick={() => logIn()} className="w-full">
        Log In
      </button>
    </div>
  </div>
  )
}