import React, { useState, useEffect } from 'react'
import LoginPage from './LoginPage.tsx'
import LandingPage from './Landing.tsx'
//@ts-ignore
import CustosLogin from './authLogin.tsx'


export default function App() {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  const handleSwitchUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser)); // Update localStorage with new user
  };

  return (
    <div className="App">
      {user ? (
        <UserDetails user={user} onLogout={handleLogout} onSwitchUser={handleSwitchUser}/>
      ) : (
        <CustosLogin/>
      )}
    </div>
  )
}