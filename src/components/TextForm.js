import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper case was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to Upper case", "success")

    }

    const handleLowClick = () => {
        // console.log("Upper case was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convert to lower case","success")
    }

    const handleOnChange = (event) => {

        // console.log("Onchange")
        setText(event.target.value)

    }
    const handleclearText = (event) => {
        // console.log("Onchange")
        setText(event.target.value)
        props.showAlert("Text Clear", "success")

    }

    const handleCopyText = () => {
        var text = document.getElementById("box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To ClipBoard", "success")

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove Extra Spaces", "success")

    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ background: props.mode === 'light' ? 'grey' : 'white',color: props.mode === 'dark' ? 'black' : 'white' }} id="box" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper Case</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lower Case</button>
                <button className="btn btn-primary mx-2" onClick={handleclearText}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p> {text.split(" ").length} words and {text.length} character</p>
                <p>{0.08 * text.split(" ").length}  Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something above to preview it here"}</p>
            </div>
        </>
    )
}
