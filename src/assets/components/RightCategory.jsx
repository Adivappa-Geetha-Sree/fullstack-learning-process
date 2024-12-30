import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'

export default function RightCategory({sorting,filtercategory,priceFrom, setpriceFrom, priceto, setpriceto}) {

    const [products, setproducts] = useState([])
    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/products.php',{
            params:{
                limit:15,
                sorting:sorting,
                categories:filtercategory.toString(),
                price_from:priceFrom,
                price_to:priceto,
            }
        })
            .then((success) => {
                setproducts(success.data.data)
            })
            .catch((error) => {

            })
    },[sorting, filtercategory, priceFrom, priceto])

    return (
        <>
            <div className="grid grid-cols-3 gap-5 lg:col-span-3 ">
                {
                    products.map((product,i)=>{
                        return(
                            <CategoryCard product={product} key={i}/>
                        )
                    })
                }

            </div>
        </>
    )
}
