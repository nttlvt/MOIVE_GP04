import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
// import { PATH } from './router/config'
import { Login } from './pages/Login'
import { MainLayout } from './components/layouts/MainLayout'
import { Home } from './pages/Home'
import { AuthLayout } from './components/layouts/AuthLayout'
import { Register } from './pages/Register'
import { PATH } from './constant/config'
function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={PATH.home} element={<Home />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={PATH.dangnhap} element={<Login />}></Route>
          <Route path={PATH.dangky} element={<Register />}></Route>
  
        </Route>
    </Routes>
    </>
  )
}

export default App
