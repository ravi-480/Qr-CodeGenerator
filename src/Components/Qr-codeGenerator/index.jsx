import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import "./styles.css"

const Qr = () => {
    const [qrcode,setQrcode] = useState('')
    const [input,setInput] = useState("")

    const handleGenerateQr = ()=>{
        setQrcode(input)
    }

  return (
    <div>
        <h3>Qr Code Generator</h3>
        <div>
            <input onChange={(e)=>setInput(e.target.value)} type="text" name='qr' placeholder='Enter the value' />
            <button disabled= {input && input.trim()!=='' ? false :true} onClick={handleGenerateQr}>Generate</button>
        </div>
        <div>
            <QRCode id='qr-code' value={qrcode} size={400} bgColor='#fff'/>
        </div>

    </div>
  )
}

export default Qr