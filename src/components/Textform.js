import React, { useState } from 'react'


export default function Textform(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case","success");
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared","success");
  }
  const handleLoClick =  () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lower case","success");

  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handlecopy =()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard","success");

  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/\s+/).join(" ");
    setText(newText)
    props.showAlert("Extra space removed from the text","success");

  }
  const [text, setText] = useState('')

  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Delete extra Space
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
      </div>
    </> 
  )
}
