import Navbar from "./components/Navbar.jsx";
import Form from "./components/Form.jsx";
import About from './components/About.jsx';
import { useState } from "react";
// import { Navbar } from "./components/Navbar.jsx";remember that this will generate the error. for default exports you are not allowed to use curly brackets.

function App() {
   const [myStyle, setMyStyle] = useState({
     color: "black",
     background: "white",
     border : '1px solid white',
   });

   const changeMode = () => {
     if (myStyle.color === "white") {
       setMyStyle({ ...myStyle, color: "black", background: "white" });
     } else {
       setMyStyle({ ...myStyle, color: "white", background: "#2B3035" });
     }
   };
  return (
    <>
      <Navbar about="About" home="Home" changeMode={changeMode} />
      <div className="container">
        <Form />
        <About myStyle={myStyle} changeMode={changeMode} />
      </div>
    </>
  );
}

export default App;
