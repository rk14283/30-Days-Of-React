import React from "react";
import ReactDOM from "react-dom";

import imageSrc from "./asabeneh.jpg"; // Import the image using a relative path
import tickImage from "./tick.jpg";
const rootElementStyle = {
  minHeight: "100vh", // Ensure the root element takes up the full viewport height
};
const author = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  job: "Senior Developer",
  location: "Finland",
};
const userImageStyle = {
  width: "80px", // Decreased width
  height: "80px", // Decreased height
  borderRadius: "50%",
  padding: "5px", // Decreased padding
};

// Styling for tick image
const tickImageStyle = {
  width: "25px", // Slightly larger width
  height: "25px", // Slightly larger height
  marginLeft: "5px", // Adding margin to separate it from the user image
};
// Styling for header wrapper
const headerWrapperStyle = {
  display: "flex",
  flexDirection: "column", // Align items vertically
};

const skillStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  fontSize: "12px",
};
// Styling for individual skill boxes
const skillBoxStyle = {
  backgroundColor: "#3498db", // Blue color
  color: "#fff", // White text color
  padding: "8px 12px",
  margin: "5px",
  borderRadius: "5px",
  height: "15px", // Half the height of a standard button
  width: "305x", // Half the width of a standard button
};

// Skills data
const skillsData = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Node.js",
  "MongoDB",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "Swift",
  "SQL",
  "TS",
  "PHP",
  "Angular",
  "Vue.js",
  "Bootstrap",
  "Sass",
  "Express.js",
  "Firebase",
  "Django",
];

// JSX element for header
const header = (
  <header style={{ padding: "20px" }}>
    <div style={headerWrapperStyle}>
      <div>
        <img src={imageSrc} alt="asabeneh image" style={userImageStyle} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontWeight: "bold" }}>
          {author.firstName} {author.lastName}
          <img src={tickImage} alt="tick image" style={tickImageStyle} />
        </p>
      </div>
      <p>
        <span style={{ fontWeight: "bold" }}>Job:</span> {author.job}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Location:</span> {author.location}
      </p>
    </div>
  </header>
);

// JSX element for skills
const skills = (
  <div style={skillStyle}>
    <h2>Skills</h2>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {skillsData.map((skill, index) => (
        <div key={index} style={skillBoxStyle}>
          {skill}
        </div>
      ))}
    </div>
  </div>
);

const rootElement = document.getElementById("root");
// JSX element, app
const app = (
  <div className="app" style={rootElementStyle}>
    <div>{header}</div>
    <div>{skills}</div>
  </div>
);

// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
