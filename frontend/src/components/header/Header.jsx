
import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
  return (
    <header>
      <div className="logo">LearnInst</div>
      <div className="logo-img"> <Link to={"/"}> <img src="https://img.freepik.com/premium-vector/online-education-logo-designs-concept-computer-book-logo-designs-template_567288-137.jpg?w=2000" alt="image" /> </Link>  </div>

      <div className="link">
        <Link to={"/"}>Home</Link>
        <Link to={"/courses"}>Courses</Link>
        <Link to={"/about"}>About Us</Link>
        {isAuth ? (
          <Link to={"/account"}>Account</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
