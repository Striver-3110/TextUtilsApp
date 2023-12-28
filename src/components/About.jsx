import React from "react";



export default function About(props) {
  return (
    <div className="container my-3 rounded-3" style={props.myStyle}>
      <h2>About</h2>
      <div
        className="accordion accordion-flush my-3"
        id="accordionFlushExample"
      >
        <div
          className="accordion-item"
          style={
            props.myStyle.color === "white"
              ? { border: "1px solid white" }
              : { border: "1px solid gray" }
          }
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={props.myStyle}
            >
              React Developer
            </button>
          </h2>

          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={props.myStyle}>
              As a <p style={{ color: "#ff3355", display: "inline" }}>React</p>{" "}
              developer, I specialize in building dynamic and interactive web
              applications. I use React's component-based approach to create
              modular and reusable UI elements for scalable projects. I enhance
              user experiences with{" "}
              <p style={{ color: "#ff3355", display: "inline" }}>
                Framer Motion
              </p>{" "}
              incorporating smooth and engaging animations. Proficient in
              <p style={{ color: "#ff3355", display: "inline" }}> Bootstrap</p>,
              I design responsive layouts and employ pre-designed components for
              a consistent appearance across devices. Additionally, I leverage{" "}
              <p style={{ color: "#ff3355", display: "inline" }}>Material UI</p>{" "}
              to implement modern and visually appealing designs following
              Google's Material Design principles. With a focus on continuous
              learning, I stay updated on the latest front-end trends. My
              expertise in React, Framer Motion, Bootstrap, and Material UI
              enables me to deliver high-quality and feature-rich web
              applications. I'm excited to tackle new challenges and further
              expand my skill set in web development.
            </div>
          </div>
        </div>

        <div
          className="accordion-item"
          style={
            props.myStyle.color === "white"
              ? { border: "1px solid white" }
              : { border: "1px solid gray" }
          }
        >
          <h2 className="accordion-header" style={props.myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={props.myStyle}
            >
              Machine Learning model Developer
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={props.myStyle}>
              <p>
                As a Machine Learning model developer, I specialize in
                leveraging powerful Python libraries such as{" "}
                <span style={{ color: "#ff3355" }}>NumPy</span>,{" "}
                <span style={{ color: "#ff3355" }}>Pandas</span>,{" "}
                <span style={{ color: "#ff3355" }}>scikit-learn (sklearn)</span>
                , <span style={{ color: "#ff3355" }}>Seaborn</span>,{" "}
                <span style={{ color: "#ff3355" }}>SymPy</span>,{" "}
                <span style={{ color: "#ff3355" }}>SciPy</span>,{" "}
                <span style={{ color: "#ff3355" }}>Matplotlib</span>, and{" "}
                <span style={{ color: "#ff3355" }}>NetworkX</span>. My expertise
                lies in crafting and implementing machine learning models to
                extract valuable insights from data. I have a strong foundation
                in data manipulation, analysis, and visualization using Pandas,
                NumPy, and Matplotlib. With scikit-learn, I design and deploy
                machine learning models for tasks such as classification,
                regression, clustering, and more. Seaborn enhances my data
                visualization capabilities, while SymPy and SciPy contribute to
                advanced mathematical computations and scientific
                problem-solving. Additionally, I use NetworkX for network
                analysis and graph-based algorithms. My passion for machine
                learning and proficiency in these libraries enable me to create
                effective and efficient solutions for various real-world
                problems. I'm enthusiastic about applying cutting-edge
                techniques and staying at the forefront of the evolving field of
                machine learning.
              </p>
            </div>
          </div>
        </div>

        {/* <button className="btn btn-danger" onClick={props.changeMode}>
        enable dark mode
      </button> */}
      </div>
    </div>
  );
}
