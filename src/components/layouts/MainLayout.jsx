import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Headers/Header'
import { Footer } from '../Footers/Footer'
import { Banner } from '../Banner/Banner'
export const MainLayout = () => {
    return (
        <div>
            <div className="">
                <Header />
            </div>
            <div>
               <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
