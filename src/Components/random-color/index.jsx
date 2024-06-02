import React, { useEffect, useState } from 'react'
import './styles.css'
const RandomColor = () => {
    const [typeColor,setTypeColor] = useState('hex')
    const [color,setColor] = useState('black')

    const randomnumber = (len)=>{
        return  Math.floor(Math.random()*len)
    }

    const generateRandomHex = ()=>{
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexCol = "#";
        for(let i=0;i<6;i++){
            hexCol+=hex[randomnumber(hex.length)]
        }
        setColor(hexCol)
    }
    const generateRandomRgb = ()=>{
        let r = randomnumber(256);
        let g = randomnumber(256);
        let b = randomnumber(256);

        setColor(`rgb(${r}, ${g}, ${b})`)

    }

    useEffect(() => {
        if (typeColor === "rgb") generateRandomRgb();
        else generateRandomHex();
      }, [typeColor]);

  return (
    <div
        style={{

            background:color
        }}

    className='container'>
         <button onClick={() => setTypeColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeColor("rgb")}>Create RGB Color</button>
        <button onClick={typeColor === "hex" ? generateRandomHex : generateRandomRgb}>Generate Color</button>

            <h2>{typeColor ==="hex" ? "HEX Color :" : "RGB Color"}</h2>
            <h2>{color}</h2>

    </div>
  )
}

export default RandomColor