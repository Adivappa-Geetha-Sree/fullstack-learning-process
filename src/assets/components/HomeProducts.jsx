import { useEffect, useState } from "react";
import BestSelling from "./BestSelling"
import HeaderSection from "./HeaderSection";

  
  export default function HomeProducts() {
    const [products, setproducts]=useState([])

    const data = async ()=>{
        let products = await fetch('https://dummyjson.com/products?limit=12&skip=20&sortBy=title&order=asc');
        products = await products.json();
        setproducts(products.products)
    }
    useEffect(()=>{
        data()
    
    },[])
    return (
    <>
      <HeaderSection/>
        <BestSelling title='Best Selling Products' products={products}/>
        <BestSelling title='Most Trending Sale' products={products}/>
    </>
    )
  }
  