/*

import { Link } from "react-router-dom";

const styles = {
  ul: {
    width: "100vw",
    height: "5rem",
    background: "#000000",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0 2rem",
  },
  li: {
    listStyle: "none",
  },
  link: {
    color: "#ffffff",
    fontSize: "1.4rem",
    textDecoration: "none",
    padding: "0.5rem 2rem",
  },
};

export default function Navbar() {
  return (
    <ul style={styles.ul}>
      <li style={styles.li}>
        <Link style={styles.link} to="">
          Home
        </Link>
      </li>
      <li style={styles.li}>
        <Link style={styles.link} to="/about-us">
          About Us
        </Link>
      </li>
      <li style={styles.li}>
        <Link style={styles.link} to="/contact-us">
          Contact Us
        </Link>
      </li>
      <li style={styles.li}>
        <Link style={styles.link} to="/profile">
          Profile
        </Link>
      </li>
    </ul>
  );
}

*/

/*

import { NavLink } from "react-router-dom";

import "./Navbar.css";

const styles = {
  ul: {
    width: "100vw",
    height: "5rem",
    background: "#000000",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0 2rem",
  },
  li: {
    listStyle: "none",
  },
  link: {
    color: "#ffffff",
    fontSize: "1.4rem",
    textDecoration: "none",
    padding: "0.5rem 2rem",
  },
};

export default function Navbar() {
  return (
    <ul style={styles.ul}>
      <li style={styles.li}>
        <NavLink style={styles.link} to="">
          Home
        </NavLink>
      </li>
      <li style={styles.li}>
        <NavLink style={styles.link} to="/about-us">
          About Us
        </NavLink>
      </li>
      <li style={styles.li}>
        <NavLink style={styles.link} to="/contact-us">
          Contact Us
        </NavLink>
      </li>
      <li style={styles.li}>
        <NavLink style={styles.link} to="/profile">
          Profile
        </NavLink>
      </li>
    </ul>
  );
}

*/

import { Link } from "react-router-dom";

const styles = {
  ul: {
    width: "100vw",
    height: "5rem",
    background: "#000000",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0 2rem",
  },
  li: {
    listStyle: "none",
  },
  link: {
    color: "#ffffff",
    fontSize: "1.4rem",
    textDecoration: "none",
    padding: "0.5rem 2rem",
  },
};

export default function Navbar() {
  return (
    <ul style={styles.ul}>
      <li style={styles.li}>
        <Link style={styles.link} to="">
          Home
        </Link>
      </li>
      <li style={styles.li}>
        <Link style={styles.link} to="/about-us">
          About Us
        </Link>
      </li>
      <li style={styles.li}>
        {/* Query Parameters */}
        <Link
          style={styles.link}
          to="/contact-us?name=Sandeep Ahirwar&email=codeysandeep@gmail.com&phone=9114145555"
        >
          Contact Us
        </Link>
      </li>
      <li style={styles.li}>
        {/* Request Parameters */}
        <Link
          style={styles.link}
          to="/profile/1714510036/Sandeep Ahirwar/Admin"
        >
          Profile
        </Link>
      </li>
    </ul>
  );
}
