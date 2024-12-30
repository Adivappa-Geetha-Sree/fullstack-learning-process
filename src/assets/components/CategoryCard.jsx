import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router'
import { context } from '../../countext/Countext'
import { toast } from 'react-toastify'

export default function CategoryCard({ product }) {

    let { cartlist, setcartlist } = useContext(context)

    
    const cartadd = (value) => {

        var check = cartlist.filter((v,i)=>{
            if(v.id == value.id){
                return v;
            }
        })
        

        if(check.length==0){
            var data = {
                id: value.id,
                image: value.image,
                name: value.name,
                price: value.price,
                qyt: 1,
            }
            var input = [data,...cartlist];
            setcartlist(input);
            localStorage.setItem('cartlist',JSON.stringify(input))
            // toast.success("Added to cart succesfully...!!")
        }
        else{
            var check = cartlist.map((v,i)=>{
                if(v.id == value.id){
                    v.qyt++
                    return v;
                }
                else{
                    return v;
                }
            })
            var input = [...check]
            setcartlist(input)
            localStorage.setItem('cartlist',JSON.stringify(input))
            // toast.success("updated in cart succesfully...!!")
        }
    }

    return (
        <>

            <div key={product.id} className="group relative">
                <Link to={`/product-details/${product.id}`}>
                    <img
                        alt={product.name}
                        src={product.image}
                        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    />
                </Link>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.category_name}</p>

                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                    <button className="mt-1 text-sm text-gray-500 " onClick={() => { cartadd(product) }}>
                        <div class="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem]/5 font-semibold text-white hover:bg-indigo-500">Add to Cart</div>
                    </button>

                </div>
            </div>

        </>

    )
}
