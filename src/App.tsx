import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { SelectedRoom } from './pages/SelectedRoom'
import Layout from './Layout'
import { Rooms } from './pages/Rooms'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rooms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/room/:roomTitle" element={<SelectedRoom />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
