import React from 'react'
import TopBanner from './TopBanner'
import Header from './Header'

export default function Home({cart,setcart}) {
    return (
        <>
            <TopBanner/>
            <Header cart={cart} setcart={setcart}/>
        </>
    )
}
