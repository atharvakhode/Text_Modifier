import React, { useState } from 'react'

export default function TextBox(props) {

      const [text, setText] = useState('')

      const handleUpclick = () => {
            console.log("uppercase was clicked" + text)
            let newText = text.toUpperCase()
            setText(newText)
      }
      const handleLoclick = () => {
            console.log("Lowercase was clicked" + text)
            let newText = text.toLowerCase()
            setText(newText)
      }
      const handleClearclick = () => {
            console.log("Lowercase was clicked" + text)
            setText('')
      }
      const handleCopy = () => {
            console.log("Text copied")
            let text = document.getElementById("mytextbox")
            text.select()
            navigator.clipboard.writeText(text.value)
            alert("Copied to clipboard!")
      }
      const handleExtraSpaces = () => {
            let newText = text.split(/[ ]+/)
            setText(newText.join(" "))
      }

      const handleOnChange = (event) => {
            console.log("On change")
            setText(event.target.value)
      }

      return (
            <>
                  <div className='container' style={{color: props.mode === 'dark'? 'white':'black'}}>
                        <h2>{props.heading}</h2>

                        <div className="mb-3">
                              <textarea className="form-control" value={text} onChange={handleOnChange} id="mytextbox" style={{backgroundColor: props.mode === 'dark'? '#83aaad':'white', color: props.mode === 'dark'? 'white':'black'}} rows="8"></textarea>
                        </div>

                        <div className='container my-3' >
                              <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
                              <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
                              <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                        </div>
                        <div className='container my-3'>
                              <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
                              <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear text</button>
                        </div>
                  </div>
                  

                  <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'black'}}>
                        <h3>Text Summary</h3>
                        <p>words count is {text.split(" ").length} </p> {/*split() ---> splits a string into an array of substrings, and returns the array*/}
                        <p>Character count is {text.length}</p>

                        <h3>Text preview</h3>
                        <p>{text.length>0?text:"Enter something in textbox above to preview here!"}</p>
                        <h6>Time required to read the text is {0.008 * text.split(" ").length} minutes</h6>

                  </div>
            </>
      )
}
