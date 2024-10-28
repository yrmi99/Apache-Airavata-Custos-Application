import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext, type IAuthContext } from 'react-oauth2-code-pkce'
import './authLogin.css'

export default function AuthLogin() {
    const { tokenData, token, logIn, logOut, idToken, error } = useContext<IAuthContext>(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            navigate('/dashboard')
        }
    }, [token, navigate])

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="text-red-500 mb-4">
            An error occurred
          </div>
          <button onClick={() => logIn()}>
          Log In
        </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Welcome to Our App</h1>
      <button className="w-full">
        Log In
      </button>
    </div>
  </div>
  )
}