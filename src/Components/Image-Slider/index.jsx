import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
const ImageSlider = ({url,limit,page}) => {

    const [image,setImage] = useState([])
    const [currentSlide,setCurrentSlide] = useState(0)
    const [errorMsg,setErrorMsg] = useState(null)
    const [loading,setLoading] = useState(false)


    const fetchImage = async(getUrl)=>{
            try {
                setLoading(true)
               const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
               const data = await response.json();

               if(data){
                setImage(data)
                setLoading(false)
               }

            } catch (error) {
                setErrorMsg(error.message)
                setLoading(false)
            }
    }

    useEffect(()=>{
        if(url!==""){
            fetchImage(url)
        }
    },[url])

    console.log(image)

    if(loading){
        return <div>Loading data....</div>
    }

    if(errorMsg!==null){
        return <div>Error Occurred</div>
    }
    function handlePrev(){
        setCurrentSlide(currentSlide ===0?image.length-1 : currentSlide-1)
    }

    function handleNext(){
        setCurrentSlide(currentSlide === image.length-1?0:currentSlide+1)
    }

  return (
    <div className='container'>
        <BsArrowLeftCircleFill onClick={handlePrev} className='arrow arrow-left' />
        {
            image && image.length ?
            image.map((imageItem,index)=>
                (
                <img  key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={
                    currentSlide === index
                      ? "current-image"
                      : "current-image hide-current-image"
                  } />
                ))
            : null
        }


        <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
        <span className="circle-indicators">
        {image && image.length
          ? image.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  )
}

export default ImageSlider