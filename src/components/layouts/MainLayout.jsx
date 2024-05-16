import React from 'react'
import { Outlet } from 'react-router-dom'
export const MainLayout = () => {
    return (
        <div>
            <header className="">
                thanh
            </header>
            <div>
               <Outlet/>
            </div>
        </div>
    )
}
