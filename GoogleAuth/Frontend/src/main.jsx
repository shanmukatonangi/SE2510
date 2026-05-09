import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="666483799718-dqjlm9endasrjfl9i1u9j4ptomicdmb7.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>,
)
