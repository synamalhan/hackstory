import React from "react";

// Make sure you load these fonts in your index.html or via Google Fonts:
// <link href="https://fonts.googleapis.com/css2?family=Playball&family=Playfair+Display&display=swap" rel="stylesheet" />

const references = [
  {
    title: "Bayard Rustin",
    author: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Bayard_Rustin",
  },
  {
    title: "Civil Rights History Project - Bayard Rustin",
    author: "Library of Congress",
    url: "https://www.loc.gov/collections/civil-rights-history-project/about-this-collection/",
  },
  {
    title: "Bayard Rustin Biography",
    author: "Encyclopaedia Britannica",
    url: "https://www.britannica.com/biography/Bayard-Rustin",
  },
  {
    title: "Bayard Rustin – Smithsonian NMAAHC",
    author: "National Museum of African American History and Culture",
    url: "https://nmaahc.si.edu/bayard-rustin",
  },
  {
    title: "Bayard Rustin – King Institute",
    author: "The Martin Luther King, Jr. Research and Education Institute",
    url: "https://kinginstitute.stanford.edu/rustin-bayard",
  },
  {
    title: "Bayard Rustin – Civil Rights Leader",
    author: "U.S. National Park Service",
    url: "https://www.nps.gov/subjects/civilrights/bayard-rustin.html",
  },

];

const References = () => {
  return (
    <section
      id="references"
      style={{
        backgroundColor: "#f4e9dc", // light sepia
        minHeight: "100vh",
        padding: "3rem 2rem",
        fontFamily: "'Playfair Display', serif",
        color: "#5b4636", // dark brown
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "'Playball', cursive",
          fontSize: "3rem",
          marginBottom: "2rem",
          color: "#a47e3c", // warm golden brown
          textShadow: "1px 1px 3px rgba(165, 130, 60, 0.5)",
        }}
      >
        References
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {references.map(({ title, author, url }, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "rgba(180, 150, 100, 0.15)", // translucent sepia tone
              borderRadius: "20px",
              padding: "1.8rem 2rem",
              width: "280px",
              color: "#5b4636",
              textDecoration: "none",
              boxShadow: "0 6px 12px rgba(90, 70, 40, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              userSelect: "none",
              fontFamily: "'Playfair Display', serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(90, 70, 40, 0.4)";
              e.currentTarget.style.background = "rgba(180, 150, 100, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(90, 70, 40, 0.2)";
              e.currentTarget.style.background = "rgba(180, 150, 100, 0.15)";
            }}
          >
            <h3
              style={{
                fontSize: "1.3rem",
                marginBottom: "0.5rem",
                fontWeight: "600",
                fontFamily: "'Playball', cursive",
                color: "#a47e3c",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                fontStyle: "italic",
                opacity: 0.8,
                marginBottom: "0",
              }}
            >
              {author}
            </p>
            <span
              style={{
                marginTop: "1rem",
                fontSize: "0.9rem",
                color: "#a47e3c",
                textDecoration: "underline",
              }}
            >
              Visit Link &rarr;
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default References;
