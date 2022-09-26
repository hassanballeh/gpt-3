/* eslint-disable jsx-a11y/alt-text */

import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function NavBar() {
  const [toggleMenu, setToggleMune] = useState(false);
  const Menu = () => {
    return (
      <>
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#what_gbt">What is GPT?</a>
        </p>
        <p>
          <a href="#possibility">Open AI</a>
        </p>
        <p>
          <a href="#features">Case Studies</a>
        </p>
        <p>
          <a href="#blog">Library</a>
        </p>
      </>
    );
  };
  return (
    <div className="nav">
      <div className="container">
        <div className="image">
          <img src={logo} />
        </div>
        <div className="links">
          <Menu />
        </div>
      </div>
      <div className="sign">
        <p className="sign_in">Sign in</p>
        <button type="button" className="sign_up">
          Sign up
        </button>
      </div>
      <div className="menu">
        {toggleMenu ? (
          <RiCloseLine
            className="scale-up-center"
            color="fff"
            size={27}
            onClick={() => {
              setToggleMune((prev) => !prev);
            }}
          />
        ) : (
          <RiMenu3Line
            className="scale-up-center"
            color="fff"
            size={27}
            onClick={() => {
              setToggleMune((prev) => !prev);
            }}
          />
        )}
        {toggleMenu && (
          <div className="nav__menu_container scale-up-center">
            <div className="links_menu ">
              <Menu />
              <div className="sign-menu">
                <p className="sign_in">Sign in</p>
                <button type="button" className="sign_up">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
