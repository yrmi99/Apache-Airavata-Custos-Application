import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { AuthContext, AuthProvider, type IAuthContext, type TAuthConfig } from 'react-oauth2-code-pkce'
import LoginPage from './Pages/authLogin'
import DashboardPage from './Pages/mainDetails'
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
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage/>}></Route>
                    <Route path="/callback" element={<LoginPage/>}></Route>
                    <Route path="/dashboard" element={<DashboardPage/>}></Route>
                </Routes>
            </Router>
        </AuthProvider>
    )
  }