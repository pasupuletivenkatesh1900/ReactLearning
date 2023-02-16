import React , { useState } from 'react'

export default function TextArea() {
    const [text, setText] = useState("");

    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const handleUpperCase=()=>{
        setText(text.toUpperCase())
    }

    const handleLowerCase=()=>{
        setText(text.toLowerCase())
    }

    const handleExtraSpaces=()=>{
        setText(text.replace(/\s+/g, ' ').trim())
    }
    return (
        <div className='container'>
            <div className="mb-3">
                <h2 for="exampleFormControlTextarea1"  className="form-label font-weight-bold"> Enter Your Text Here</h2>
                <textarea className="form-control"value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button type="button" onClick={handleUpperCase} class="btn btn-primary">Upper Text</button>
            <button type="button" onClick={handleLowerCase} class="btn btn-primary m-2">Lower Case</button>
            <button type="button" onClick={handleExtraSpaces} class="btn btn-primary m-2">handleExtraSpaces</button>
           
        
        </div>

    )
}
