import React from 'react'
import Home from './Home'
import Footer from './Footer'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

export default function Rootlayout() {
    return (
        <>
            <Home />
            <ToastContainer/>

            <Outlet />

            <Footer />

        </>
    )
}
