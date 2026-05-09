import React, { useState } from 'react'
import Auth from './Auth'

const App = () => {
  let [user,setUser]=useState(null)
  return (
    <div>

    {user ? <h1>Welcome, {user.name}</h1> : <Auth setUser={setUser} />}
    </div>
  )
}

export default App
