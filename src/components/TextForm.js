import React,{useState} from 'react' //rfc react function based compo

  
export default function TextForm(props) {
    const handleUpClick= ()=>{
        //console.log("uppercase was clicked"+text)
        let newtext=text.toUpperCase();
        //setText("you have clicked on handle on click")
        setText(newtext);
        props.showAlert("text converted successfully in uppercase","success")
    }

    const handleLowClick=()=>{
        let lowtext=text.toLowerCase();
        setText(lowtext);
        props.showAlert("text converted successfully in lowercase","success")
    }
    const handleClearClick=()=>{
        let clear=""
        setText(clear)
        props.showAlert("text has been cleared","success")
        
    }

    const handleCopy=()=>{
        //console.log("i am copy")
        var t=document.getElementById("myBox")
        t.select()
        navigator.clipboard.writeText(t.value)
        props.showAlert("text has been copied","success")
    }

    const handleExtraSpaces=()=>{

        let tt=text.split(/[ ]+/);
        setText(tt.join(" "))
        props.showAlert("extra spaces has been removed","success")
    }

    const handleonChange= (event)=>{
        //console.log("on change")
        setText(event.target.value)

    }

   

    // Declare a new state variable, which we'll call "count"
  //const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  //text="new" not allowed use function
  //setText("new text");
   
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'? 'white':'black'}}>
      
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonChange} 
        style={{backgroundColor:props.mode==='light'? 'grey':'white',color:props.mode==='dark'? 'grey':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-danger mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2"  onClick={handleCopy}>Copy</button>
        <button className="btn btn-danger mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
        
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'? 'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length-1} words, {text.length} characters</p>
    <p>{0.008 * text.split(" ").length }minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview here!!"}</p>
    </div>
    </>
  )
}
