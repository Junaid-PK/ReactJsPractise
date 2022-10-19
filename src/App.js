import { useState } from "react";
import "./App.css";

function App() {
  let [text, setText] = useState('');
  return (
    <div className="App">
      <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          onChange={(e)=>{
            setText(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="d-flex justify-content-between">
        <div className="btn btn-primary" onClick={converToUpperCase}>Convert To UpperCase</div>
        <div className="btn btn-primary" onClick={removeSpaces}>Remove Spaces</div>
        <div className="btn btn-primary" onClick={removeSymbols}>Remove Symbols</div>
        <div className="btn btn-primary" onClick={removeSymbols}>Remove Symbols</div>
        <div className="btn btn-primary" onClick={removeSymbols}>Remove Symbols</div>
      </div>
      </div>
    </div>
  );

  // Functions
  // Convert to UpperCase
  function converToUpperCase(){
    setText(text.toUpperCase());
  }
  // Remove Extra Spaces
  function removeSpaces(){
    setText(text.replace(/\s+/g, ' ').trim());
  }
  // Remove Symbols
  function removeSymbols(){
    setText(text.replace(/[^\w\s]/gi, ''));
  }
}

export default App;
