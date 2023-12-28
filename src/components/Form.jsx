import { useState } from "react";
import { SHA256 } from "crypto-js";
import React from 'react';


export default function Form(props) {
  const [text, setText] = useState('');

  const onTextChange = (event) => {
    setText(event.target.value); // it means that the text variable holds the current value of text area. so we can manipulate it wil handler
  };
  const uprBtn = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  const lwrBtn = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
  const hshBtn = () => {
    const newText = SHA256(text).toString();
    setText(newText);
  };
  const clrBtn = () => {
    setText("");
  };
  const rmExSp = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const copyBtn = () => {
    const nText = document.getElementById("exampleFormControlTextarea1");
    nText.select();
    navigator.clipboard.writeText(nText.value);
  };

  return (
    <>
      <div className="mb-3">
        <label
          for="exampleFormControlTextarea1"
          className="form-label my-2
           d-flex justify-content-center align-items-center"
        >
          <h3>Enter Text here </h3>
        </label>
        <textarea
          value={text}
          placeholder="Enter Text"
          onChange={onTextChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          style={{
            border: "2px solid grey ",
            resize: "none",
            backgroundColor:
              props.myStyle.color === "black" ? "white" : "#505a62",
            color:
              props.myStyle.color === "black" ? "black" : "white",
          }}
        ></textarea>
        <div className="d-flex mb-3 gap-3">
          <button className="btn btn-primary mt-sm-3" onClick={uprBtn}>
            To Upper Case
          </button>
          <button className="btn btn-primary mt-sm-3" onClick={lwrBtn}>
            To Lower Case
          </button>
          <button className="btn btn-primary mt-sm-3" onClick={hshBtn}>
            To Hash
          </button>
          <button className="btn btn-primary mt-sm-3" onClick={clrBtn}>
            To Clear
          </button>
          <button className="btn btn-primary mt-sm-3" onClick={rmExSp}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary mt-sm-3" onClick={copyBtn}>
            Copy Text
          </button>
        </div>
        {/* <div className="summary">
          <p>
            {text.split(" ").length !== undefined
              ? text.split(" ").length
              : " 0"}{" "}
            words and{" "}
            {text.length !== undefined
              ? text.length
              : " 0"}{" "}
            characters
          </p>
        </div> */}
        <div className="timeTORead">
          {/* <p>time to read : {text.split(" ").length} seconds</p> */}
        </div>
        <div className="previwe d-flex align-items-center justify-content-center">
          <p>
            {text.length > 0
              ? text
              : "Enter something into text area to preview"}
          </p>
        </div>
      </div>
    </>
  );
}
