import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { SelectedRoom } from './pages/SelectedRoom'
import Layout from './layout/Layout'
import { Rooms } from './pages/Rooms'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { ProtectedRoute } from './components/ProtectedRoute'
import LayoutPrivate from './layout/LayoutPrivate'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <LayoutPrivate />
              </ProtectedRoute>
            }
          >
            <Route index element={<Rooms />} />
            <Route path="/room/:roomTitle" element={<SelectedRoom />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
