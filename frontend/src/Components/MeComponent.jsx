import React from "react";
import "./css/MeComponent.css"; // Add styles if needed

const MeComponent = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>About Me</h2>
      <p style={{ color: "#6c757d", fontSize: "1.1rem" }}>
        This is my personal project. Every aspect of this application has been
        carefully crafted by me.
      </p>
      <div style={{ marginTop: "30px" }}>
        <img
          src="https://avatars.githubusercontent.com/u/165547209?v=4" // Replace this with your profile image URL
          alt="My Profile"
          style={{
            borderRadius: "50%",
            width: "150px",
            height: "150px",
            objectFit: "cover",
            border: "5px solid #dee2e6",
          }}
        />
        <p style={{ marginTop: "20px", color: "#6c757d" }}>
          👨‍💻Java developer with a focus on React.js and Spring Boot. Expertise
          in front-end development (HTML/CSS/JavaScript) to create sleek,
          user-centric application
        </p>
        <h4 style={{ color: "#28a745", marginTop: "10px" }}>- Mitesh Vegad</h4>
        <p style={{ color: "#6c757d" }}>Creator & Developer</p>
      </div>
    </div>
  );
};

export default MeComponent;
