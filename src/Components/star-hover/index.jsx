import React, { useState } from 'react'
import {FaStar} from "react-icons/fa"
import './styles.css';
const Star = ({noOfStars = 5}) => {
    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)

    const handleClick = (getIndex)=>{
        setRating(getIndex)
    }

    const handleMouseMove = (getIndex)=>{
        setHover(getIndex)
    }

    const handleMouseLeave = ()=>{
        setHover(rating)
    }

  return (

    <div className='starRating'>
    {
        [...Array(noOfStars)].map((_,index)=>{
            index+=1
            return <FaStar
                key={index}
                className={index<=(hover || rating) ? 'active' : 'inactive'}
                onClick={()=>handleClick(index)}
                onMouseMove={()=>handleMouseMove(index)}
                onMouseLeave={()=>handleMouseLeave()}
                size={40}
            />
            })
    }
    </div>
  )
}

export default Star 