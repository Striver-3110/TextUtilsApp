import Navbar from "./components/Navbar.jsx";
import Form from "./components/Form.jsx";
import About from "./components/About.jsx";
import { useState } from "react";
import React from "react";
import CopyrightNotice from "react-copyright-notice-component";
import Alert from "./components/Alert.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { Navbar } from "./components/Navbar.jsx";remember that this will generate the error. for default exports you are not allowed to use curly brackets.

function App() {
  const [alert, setAlert] = useState("");
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  const [myStyle, setMyStyle] = useState({
    color: "black",
    background: "white",
    //  border : '1px solid white',
  });

  const changeMode = () => {
    if (myStyle.color === "white") {
      setMyStyle({ ...myStyle, color: "black", background: "white" });
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode has been enabled");
      document.title = "TextUtils - Light Mode";
    } else {
      setMyStyle({ ...myStyle, color: "white", background: "#394046" });
      document.body.style.backgroundColor = "#394046";
      showAlert("success", "Dark mode has been enabled");
      document.title = "TextUtils - Dark Mode";
    }
  };
  return (
    <React.StrictMode>
      <div style={{ overflowX: "hidden" }}>
        <Router>
          <Navbar
            about="About"
            home="Home"
            changeMode={changeMode}
            showAlert={showAlert}
          />
          <Alert alert={alert} />
          <Routes>
            <Route
              exact // ************************************exact is required for exact path matching else partial matching will be done*********************************************************************
              path="/"
              element={
                <div className="container" style={myStyle}>
                  <Form myStyle={myStyle} showAlert={showAlert} />
                </div>
              }
            />
            <Route
              exact
              path="/about"
              element={
                <div className="container" style={myStyle}>
                  <About myStyle={myStyle} changeMode={changeMode} />
                </div>
              }
            />
          </Routes>
          {/* <div style={{ width: "100vw" }} className="text-success my-3 mt-3">
            <hr />
          </div> */}
          <div
            className="d-flex align-items-center justify-content-center p-4 gap-2"
            style={{ background: "#2b3035", color: "white" }}
          >
            <span> Copyright </span>
            <CopyrightNotice
              author="Prajapati Jay"
              year={new Date().getFullYear()}
              copyrightHolder="Prajapati Jay"
            />
          </div>
        </Router>
      </div>
    </React.StrictMode>
  );
}

export default App;
