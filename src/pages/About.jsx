import React from "react";
import { useSpring, animated } from "@react-spring/web";
import bwImage1 from "../assets/images/bayard_partner.jpg";
import bwImage2 from "../assets/images/bayard_washington.jpg";

const About = () => {
  const parallax1 = useSpring({
    from: { transform: "translateY(0px)" },
    to: { transform: "translateY(-20px)" },
    loop: { reverse: true },
    config: { duration: 3000 },
  });

  const parallax2 = useSpring({
    from: { transform: "translateY(0px)" },
    to: { transform: "translateY(-15px)" },
    loop: { reverse: true },
    config: { duration: 2500 },
  });

  return (
    <section id="about" style={styles.container}>
      <div style={styles.textContainer}>
        <h2 style={styles.heading}>About Bayard Rustin</h2>
        <p style={styles.paragraph}>
          Bayard Rustin was a key figure in the civil rights movement, known for his
          pioneering nonviolent activism and strategic genius. Despite his profound
          impact, history often overlooked his contributions due to prevailing social biases.
        </p>
        <p style={styles.paragraph}>
          Rustin was the chief architect of the 1963 March on Washington for Jobs and Freedom,
          where Martin Luther King Jr. delivered his iconic "I Have a Dream" speech. He believed
          in peaceful protest, coalition-building, and universal human rights.
        </p>
        <p style={styles.paragraph}>
          In his personal life, Bayard was openly gay and deeply committed to justice. He adopted
          his longtime partner, Walter Naegle, in the late 1970s—a legal workaround for same-sex couples
          at the time to secure family rights.
        </p>
      </div>

      <div style={styles.imageContainer}>
        <animated.img
          src={bwImage1}
          alt="Bayard Rustin and his partner Walter Naegle"
          style={{ ...styles.image, ...parallax1 }}
        />
        <animated.img
          src={bwImage2}
          alt="Bayard Rustin organizing the March on Washington"
          style={{ ...styles.image, ...parallax2 }}
        />
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    padding: "4rem 5vw",
    backgroundColor: "#998779", // sepia tone base
    color: "#2e1b0f",           // dark brown text for contrast
    fontFamily: "'Playfair Display', serif",
    minHeight: "80vh",
    gap: "2rem",
  },
  textContainer: {
    flex: 1.2,
    paddingRight: "2rem",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    fontFamily: "'Playball', cursive",
    color: "#3a1f05",
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: 1.6,
    marginBottom: "1rem",
    maxWidth: "650px",
  },
  imageContainer: {
    flex: 0.8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
  },
  image: {
    width: "250px",
    height: "auto",
    objectFit: "cover",
    filter: "grayscale(100%)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    borderRadius: "8px",
  },
};

export default About;
