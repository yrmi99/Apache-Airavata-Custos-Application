import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { AuthContext, AuthProvider, type IAuthContext, type TAuthConfig } from 'react-oauth2-code-pkce'
import UserDetails from './user-details'
import './authLogin.css'

const authConfig: TAuthConfig = {
    clientId: 'custos-w2pcilydswffevyrswct-10000000',
    authorizationEndpoint: 'https://api.playground.usecustos.org/api/v1/identity-management/authorize',
    logoutEndpoint: 'https://api.playground.usecustos.org/api/v1/identity-management/user/logout',
    tokenEndpoint: 'https://api.playground.usecustos.org/api/v1/identity-management/token',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid email',
    state: 'sefjseifjsf'
}

function AuthLogin(): JSX.Element {
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Welcome to Our App</h1>
                {!token ? (
                    <button onClick={() => logIn()}>
                        Log In
                    </button>
                ) : (
                    <div>
                        Name: {JSON.parse(responseData)["name"]}<br></br>
                        Email: {JSON.parse(responseData)["email"]}<br></br>
                    </div>
                )}
        </div>
    )
  }
  export default function AuthLoginPage() {
    return (
        <AuthProvider authConfig={authConfig}>
            <AuthLogin />
        </AuthProvider>
    )
}