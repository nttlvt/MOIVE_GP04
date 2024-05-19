import React from 'react'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
      <div>
          <div className=" flex min-h-screen  bg-gray-100 justify-center items-center">
              <Outlet/>
          </div>
    </div>
  )
}
