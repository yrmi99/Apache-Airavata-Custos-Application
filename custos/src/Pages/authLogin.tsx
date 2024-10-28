import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { AuthContext, AuthProvider, type IAuthContext, type TAuthConfig } from 'react-oauth2-code-pkce'
import './authLogin.css'

export default function AuthLogin() {
    const { tokenData, token, logIn, logOut, idToken, error }: IAuthContext = useContext(AuthContext)

    let responseData = JSON.stringify(tokenData)

    if (error) {
        <>
          <div>
            An error has occurred
          </div>
        </>
    }
    return (
        <button onClick={() => token ? logOut() : logIn()} className="w-full">
            {token ? 'Log Out' : 'Log In'}
        </button>
    )
  }