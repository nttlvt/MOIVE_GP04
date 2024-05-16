import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { PATH } from './router/config'
import { Login } from './pages/Login'
function App() {
  return (
    <>
      <Routes>
      <Route path={PATH.login} element={<Login/>} />
    </Routes>
    </>
  )
}

export default App
