import React, { useEffect, useState } from 'react'
import "./styles.css"
const LoadMore = () => {
    const [loading,setLoading] = useState(false)
    const [products,setProducts] = useState([])
    const [count,setCount] = useState(0)

    const fetchProducts = async()=>{
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${
                count === 0 ? 0 : count * 20
              }`)
              const data = await response.json()

              if(data && data.products && data.products.length){
                setProducts((prevData)=>[...prevData,...data.products])
              setLoading(false)
              }
              console.log(data);
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[count])

if(loading) return <div>"Loading Data...."</div>

  return (
    <div className="load-more-container">
        <div className='product-container'>
            {
                products.map((item)=>(
                    <div className='product' key={item.id}> 
                        <img src={item.images} alt="" />
                        <p>{item.title}</p>
                    </div>
                ))
            }
        </div>
        <div className="btn-container">
            <button onClick={()=>setCount(count+1)}>Load More</button>
        </div>
    </div>
  )
}

export default LoadMore