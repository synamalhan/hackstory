import React from "react";
import { useSpring, animated } from "@react-spring/web";
import legacyImage from "../assets/images/legacy.jpg";

const generateRandomBlob = () => {
  const r = () => Math.floor(Math.random() * 30) + 35; // 35–65%
  return `${r()}% ${r()}% ${r()}% ${r()}%`;
};

const blobTexts = [
  "Bayard Rustin's contributions to civil rights, labor advocacy, and global human rights laid the foundation for future generations of activists.",
  "Though often working behind the scenes, his influence is felt across movements for justice and equality.",
  "Rustin's organizing of the 1963 March on Washington set a gold standard for peaceful protest.",
  "His emphasis on nonviolence and coalition-building continues to inspire leaders around the world.",
  "In 2013, President Barack Obama posthumously awarded him the Presidential Medal of Freedom.",
  "Today, Rustin is remembered as a brilliant strategist, a bold voice for the marginalized, and a symbol of intersectional activism."
];

const Legacy = () => {
  return (
    <section
      id="legacy"
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#ccbaab", // sepia background
        color: "#3a1f05",
        fontFamily: "'Playfair Display', serif",
        padding: "4rem 2rem",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          fontFamily: "'Playball', cursive",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Legacy of Bayard Rustin
      </h2>

      <img
        src={legacyImage}
        alt="Bayard Rustin Legacy"
        style={{
          width: "200px",
          height: "auto",
          borderRadius: "16px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          marginBottom: "3rem",
          filter: "grayscale(100%)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px 12px",
          maxWidth: "1000px",
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        {blobTexts.map((text, index) => {
          const fadeInSpring = useSpring({
            from: { opacity: 0 },
            to: { opacity: 0.5 },
            delay: index * 150,
          });

          const [hovered, setHovered] = React.useState(false);

          const translateY = index % 2 === 0 ? "0px" : "15px";
          const borderRadius = generateRandomBlob();

          const hoverSpring = useSpring({
            transform: hovered
              ? `translateY(${translateY}) scale(1.1)`
              : `translateY(${translateY}) scale(1)`,
            opacity: hovered ? 1 : 0.5,
            config: { tension: 300, friction: 15 },
          });

          return (
            <animated.div
              key={index}
              style={{
                ...fadeInSpring,
                ...hoverSpring,
                backgroundColor: "rgba(204, 186, 171, 0.7)", // semi-transparent sepia blob bg
                padding: "1.5rem 2rem",
                fontSize: "1.4rem",
                lineHeight: "1.6",
                borderRadius,
                width: "280px",
                textAlign: "center",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.15)",
                color: "#3a1f05",
                position: "relative",
                zIndex: 1,
                transformOrigin: "center center",
                cursor: "pointer",
                userSelect: "none",
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {text}
            </animated.div>
          );
        })}
      </div>
    </section>
  );
};

export default Legacy;
