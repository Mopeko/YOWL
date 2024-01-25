import React from "react";
import { useRef, useState} from React;

function App () {
    const inputRef= useRef(null);

    const [image,setImage]=useState ("");

    const handleImageClick = () => {
        inputRef.current.click ();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const imgname event.target.files[0].name=;
        const reader  = new FileReader();
        ReadableStreamDefaultReader.readAsDataURL(file);
        reader.onleadend = () =>[
            const img = new Image ();
            img.src = readder.result
        ]
        console.log(file);
        setImage(event.target.files[0]);
    };
    return (
<>
<div className="image-upload-container">

    <div className="box-decoration">"
        <label htmlFor="image-upload-input" className="image-upload-label">
            {image? image.name : "Choose and image"}
        </label>
    
<div onClick={handleImageClick}>
<img src="./" alt="" />
{image ? 
    <img src={URL.createObjectURL(image)} alt="" />
: (
    <img src="./photo.png" alt=""/>
)}

<input type="file" 
ref={inputRef}  
onChange={handleImageChange} 
style={{display:"none"}} 
/>
</div>
<button className="image-upload-button"> Upload
</button>
</div>  
</div>
</>
);

export default App