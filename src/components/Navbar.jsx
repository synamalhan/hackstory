import React from "react";

const Navbar = () => {
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Legacy", href: "#legacy" },
  { name: "Quotes", href: "#quotes" },
  { name: "Contact", href: "#contact" },
];


  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        {navLinks.map((link) => (
          <li key={link.name} style={styles.li}>
            <a href={link.href} style={styles.a} className="nav-link">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <style>{`
        .nav-link:hover {
          color: #0070f3; /* subtle blue highlight on hover */
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "1rem 2rem",
    zIndex: 1000,
    display: "flex",
    justifyContent: "flex-start",
    boxShadow: "none",
  },
  ul: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "2rem",
  },
  li: {},
  a: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
};

export default Navbar;
