import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import { AuthContext, AuthProvider, type IAuthContext, type TAuthConfig } from 'react-oauth2-code-pkce'
import LoginButton from './authLogin'
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

export default function App() {
    return (
        <AuthProvider authConfig={authConfig}>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">Welcome to Our App</h1>
                    <LoginButton/>
            </div>
        </AuthProvider>
    )
  }