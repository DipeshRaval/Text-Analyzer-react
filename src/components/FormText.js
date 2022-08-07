import React, { useState } from "react";

export default function FormText(props) {
  const [text, setText] = useState("");

  const changeToUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success", "Coverted to Upeer Case");
  };

  const changeToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("success", "Coverted to Lower Case");
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  const copyText = () => {
    let MyTextFeild = document.getElementById("MyTextFeild");
    MyTextFeild.select();
    navigator.clipboard.writeText(MyTextFeild.value);
    props.showAlert("success", "Text Succesfully copy into clipboard");
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success", "Extra spaces are removed");
  };

  const onChangeTextField = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="container my-3">
        <h2 className="text-center fw-semibold">{props.title}</h2>
      </div>
      <div className="container">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label fw-semibold"
          >
            Enter your text :
          </label>
          <textarea
            value={text}
            className={`form-control border-2 border-${
              props.mode === "light" ? "dark" : "light"
            }`}
            style={{
              backgroundColor: `${props.mode === "light" ? "white" : "black"}`,
              color: `${props.mode === "light" ? "black" : "white"}`,
            }}
            id="MyTextFeild"
            rows="8"
            onChange={onChangeTextField}
          ></textarea>
        </div>
        <div className="mb-3 d-flex justify-content-lg-between justify-content-md-evenly justify-content-sm-evenly justify-content-between flex-wrap">
          <button
            type="button"
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } fw-bold border border-3 border-${
              props.mode === "light" ? "dark" : "light"
            } my-2`}
            onClick={changeToUpCase}
          >
            Convert UpperCase
          </button>
          <button
            type="button"
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } fw-bold border border-3 border-${
              props.mode === "light" ? "dark" : "light"
            }  my-2`}
            onClick={changeToLowerCase}
          >
            Convert LowerCase
          </button>
          <button
            type="button"
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } fw-bold border border-3 border-${
              props.mode === "light" ? "dark" : "light"
            }  my-2`}
            onClick={copyText}
          >
            Copy Text
          </button>
          <button
            type="button"
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } fw-bold border border-3 border-${
              props.mode === "light" ? "dark" : "light"
            } my-2`}
            onClick={clearText}
          >
            Clear Text
          </button>
          <button
            type="button"
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } fw-bold border border-3 border-${
              props.mode === "light" ? "dark" : "light"
            } my-2`}
            onClick={removeExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container mt-2">
        <h4 className="my-2 fw-bolder mb-3">Summery Of Your Text</h4>
        <ul className="my-2 pl-5 list-unstyled">
          <li className="mb-1">
            Number Of Word :{" "}
            <strong>{text ? text.trim().split(" ").length : 0}</strong>
          </li>
          <li className="mb-1">
            Number Of Charachtor : <strong>{text.length}</strong>
          </li>
          <li className="mb-1">
            Aevrage amount of time require to read a text :
            <strong>{text ? text.split(" ").length * 0.0032 : 0} min</strong>
          </li>
        </ul>
        <h3 className="my-3 fw-bold text-center">Preview</h3>
        <textarea
          value={text}
          className={`form-control border border-3 border-${
            props.mode === "light" ? "dark" : "light"
          } my-3`}
          style={{
            backgroundColor: `${props.mode === "light" ? "white" : "black"}`,
            color: `${props.mode === "light" ? "black" : "white"}`,
          }}
          id="MyTextFeild"
          rows="5"
          readOnly
        ></textarea>
      </div>
      <div className="container">
        <button
          type="button"
          className={`btn btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } fw-bold border border-3 border-${
            props.mode === "light" ? "dark" : "light"
          } my-2`}
          onClick={props.toggleMode}
        >
          {props.modeText}
        </button>
      </div>
    </>
  );
}
