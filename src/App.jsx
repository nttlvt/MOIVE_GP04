import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { PATH } from './router/config'
import { Login } from './pages/Login'
import { MainLayout } from './components/layouts/MainLayout'
import { Banner } from './components/Banner/Banner'
import { ListCarousel } from './components/Carousel/ListCarousel'
function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path={PATH.login} element={<Login />} />
          <Route path={PATH.banner} element={<Banner />} />
          <Route path={PATH.listcarousel} element={<ListCarousel />} />
        </Route>

    </Routes>
    </>
  )
}

export default App
