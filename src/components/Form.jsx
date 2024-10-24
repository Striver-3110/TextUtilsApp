import { useState } from "react";
import { SHA256 } from "crypto-js";
import React from "react";

export default function Form(props) {
  const [text, setText] = useState("");

  const onTextChange = (event) => {
    setText(event.target.value); // it means that the text variable holds the current value of text area. so we can manipulate it wil handler
  };
  const uprBtn = () => {
    const newText = text.toUpperCase();
    setText(newText);
    if (text.length > 0)
      props.showAlert("success", "Text has been converted into upper case");
    else {
      props.showAlert("danger", "Please enter some text");
    }
  };
  const lwrBtn = () => {
    const newText = text.toLowerCase();
    setText(newText);
    if (text.length > 0)
      props.showAlert("success", "Text has been converted into lower case");
    else {
      props.showAlert("danger", "Please enter some text");
    }
  };
  const hshBtn = () => {
    const newText = text.length > 0 ? SHA256(text).toString() : "";
    setText(newText);
    if (text.length > 0) props.showAlert("success", "Text has been hashed");
    else {
      props.showAlert("danger", "Please enter some text");
    }
  };
  const clrBtn = () => {
    setText("");
    if (text.length > 0) props.showAlert("success", "Text has been cleared");
    else {
      props.showAlert("danger", "Please enter some text");
    }
  };
  const rmExSp = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if (text.length > 0)
      props.showAlert("success", "Extra spaces has been removed");
    else {
      props.showAlert("danger", "Please enter some text");
    }
  };
  const copyBtn = () => {
    const nText = document.getElementById("exampleFormControlTextarea1");
    navigator.clipboard.writeText(nText.value);
    if (text.length > 0) props.showAlert("success", "Copied to clipboard");
    else {
      props.showAlert("danger", "Please enter some text");
    }
  };

  return (
    <>
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlTextarea1"
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
              props.myStyle.color === "black" ? "#aad5ff" : "#788e9f",
            color: props.myStyle.color === "black" ? "black" : "white",
          }}
        ></textarea>
        <div className="d-flex mb-3 gap-3 container flex-wrap">
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
        <div className="summary">
          <p>
            {/* {text.split(" ").length !== undefined
              ? text.split(" ").length - 1
              : " 0"}{" "}
            words and{" "}
            {text.length !== undefined
              ? text.length
              : " 0"}{" "}
            characters */}
            <b>Words: </b>
            {text.length === 0 ? 0 : text.trim().split(/\s+/).length}{" "}
            <b>characters: </b>
            {text.length}{" "}
          </p>
        </div>
        <div className="timeTORead">
          {/* <p>time to read : {(text.split(" ").length - 1) * 0.008} seconds</p> */}
          <p>
            <b>time to read: </b>
            {text.length === 0
              ? 0
              : text.trim().split(/\s+/).length * 0.08}{" "}
            seconds
          </p>
        </div>
        {/* <div className="previwe d-flex align-items-center justify-content-center">
          <p>
            {text.length > 0
              ? text
              : "Enter something into text area to preview"}
          </p>
        </div> */}
      </div>
      {/* <div style={{ width: "100vw" }} className="my-3">
        <hr />
      </div> */}
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque mollitia voluptatum accusamus quam non distinctio, tempora recusandae fugiat illo reprehenderit, architecto harum, quia aliquid rerum aliquam rem minima nemo eius?
    </>
  );
}
