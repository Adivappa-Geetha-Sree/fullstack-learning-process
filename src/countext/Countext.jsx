import React, { createContext, useState } from 'react'

const context = createContext();

export default function Countext({ children }) {
    
    let storage= localStorage.getItem('cartlist')
    storage = JSON.parse(storage)

   

    let [cartlist, setcartlist] = useState(storage ? storage : [])
    let [wishlist, setwishlist] = useState([])




    var data = { cartlist, setcartlist, wishlist, setwishlist, }

    return (
        <context.Provider value={data}>
            {children}
        </context.Provider>
    )
}

export { context }