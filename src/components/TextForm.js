import React, { useState } from 'react';

function TextForm({ heading }) {
    const [text, setText] = useState("");

    function handleUpClick(){
        setText(text.toUpperCase());
    }
    
    function handleOnChange(e){
        setText(e.target.value);
    }

    return (
        <div>
            <h1>{heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    );
}

export default TextForm;
