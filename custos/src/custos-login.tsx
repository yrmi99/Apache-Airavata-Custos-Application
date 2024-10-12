import React from "react"

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
    color: '#b3b3b3',
    textDecoration: 'none',
    fontSize: '14px',
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
}

export default function Component() {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Custos Login</h2>
        <form style={{ width: '100%' }}>
          <div style={styles.inputField}>
            <label htmlFor="email" style={styles.label}>
              Username/Email
            </label>
            <input
              id="email"
              placeholder="username"
              type="text"
              style={styles.input}
            />
          </div>
          <div style={{ ...styles.inputField, marginTop: '20px' }}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              id="password"
              placeholder="password"
              type="password"
              style={styles.input}
            />
          </div>
          <div style={{ marginTop: '10px', marginBottom: '20px' }}>
            <a href="#" style={styles.forgotPassword}>
              Forgot password?
            </a>
          </div>
          <button type="button" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}