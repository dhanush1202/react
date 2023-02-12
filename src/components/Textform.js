import React, { useState } from "react";

export default function (props) {
  const [coloe, setcoloe] = useState(props.mode)
  let d= props.mode==='light'?'white':'#212529';
  let d2= props.mode==='light'?'#212529':'white';
  let myStyle={
      backgroundColor:d,
      color: d2
    }
  const condo = () => {
    let d = text.toUpperCase();
    setText(d);
  };
  const changed = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("used primary state");
  return (
    <div>
      <div className="mb-3 my-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label" style={myStyle}>
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1 "
          value={text}
          onChange={changed}
          rows="8"
          style={myStyle}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={condo}>
        click here
      </button>
    </div>
  );
}
