import React from "react";
import introImage from "../assets/images/intro.jpg";
import "../styles/Hero.css"; // Make sure this imports the Playball font

const Hero = () => {
  return (
    <section id="hero" >  
    <div style={{ 
      ...styles.hero, 

    }}>
      <h1 style={styles.tagline}>
        <span style={styles.name}>Bayard Rustin</span> <br /> <br />
        The man behind the dream <br />
        history tried to forget
      </h1>
    </div>
    </section>
  );
};

const styles = {
  hero: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "5vw",
    color: "#fff",
    fontFamily: "'Playfair Display', serif",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  tagline: {
    fontSize: "2rem",
    fontWeight: "700",
    maxWidth: "600px",
    lineHeight: "1.2",
    userSelect: "none",    
    color: "#ccbaab", // Optional: a distinct color for emphasis

    textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
  },
  name: {
    fontFamily: "'Playball', cursive",
    fontSize: "4rem",
    fontWeight: "normal",
    userSelect: "none",
    color: "#fff",
    textShadow: "3px 3px 7px rgba(0,0,0,0.9)",
  }
};

export default Hero;
