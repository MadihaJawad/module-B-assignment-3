import React, {useState} from 'react'

export default function TextForm(props) {
  ////////////////////////////////////////////////////// Button
    const handleUpClick = ()=>{
      // console.log("uppercase was clicked" + text)
      let newText = text.toUpperCase();
      setText(newText)
    }
    /////////////////////////////////////////////////////// input
    const handleOnChange = (event)=>{
        // console.log("on change")
      setText(event.target.value);
      }
      const [text, setText] = useState('Enter text here');
      return (
        <>
        <div>
            <h1>{props.heading}</h1>
             <div className="mb-3">
            
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div> 
            <button className="btn btn-primary mx-1" onClick= {handleUpClick}>Convert to uppercase</button>
            
        </div>
    
        <div className="container my-2">
          <h2>your text summary </h2>
          <p>{text.split(" ").length}words and {text.length}characters</p>
         
     
        </div>
        </>
      )
    }
    
