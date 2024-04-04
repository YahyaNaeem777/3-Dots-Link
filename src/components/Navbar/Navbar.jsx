import React from "react";
import logo from "./../../Assets/Images/3dot link logo final-01 1.png";
import "./../Navbar/Navbar.css";
import { useState } from "react";
import Button from "../Button";

const Navbar = ({ scrollToSection }) => {
    const [open,setOpen]=useState(false);
    const [menu, setMenu] = useState("Home");
    const [isMobile, setIsMobile] = useState(false);


  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <>
          <a className="navbar-brand" href="/">
            <img className="image" src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={()=>setOpen(!open)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className={`${open?"":"collapse"} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className={`nav-item ${menu === "Home" ? "active" : ""}`}  
              onClick={() => {
                scrollToSection('home')
                setMenu("Home");
                setIsMobile(!isMobile);
                setOpen(!open)
              }}>
                 
                  Home
                
              </li>
              <li className={`nav-item ${menu === "About" ? "active" : ""}`} 
              onClick={() => {
                scrollToSection('about')
                setMenu("About");
                setIsMobile(!isMobile);
                setOpen(!open)
              }}>
            
                  About
              
              </li>
              <li className={`nav-item ${menu === "Artist" ? "active" : ""}`}
              onClick={() => {
            scrollToSection('artist')
            setMenu("Artist");
            setIsMobile(!isMobile);
            setOpen(!open)
          }}>
                
                  Artist
                
              </li>
              <li className={`nav-item ${menu === "Stacking" ? "active" : ""}`}  onClick={() => {
                scrollToSection('home')
                setMenu("Stacking");
                setIsMobile(!isMobile);
                setOpen(!open)
              }}>
               
                Stacking
               
              </li><li className={`nav-item ${menu === "Roadmap" ? "active" : ""}`}  onClick={() => {
            scrollToSection('roadmap')
            setMenu("Roadmap");
            setIsMobile(!isMobile);
            setOpen(!open)
          }}>
                
                Roadmap
                
              </li><li className={`nav-item ${menu === "Team" ? "active" : ""}`}  onClick={() => {
            scrollToSection('home')
            setMenu("Team");
            setIsMobile(!isMobile);
            setOpen(!open)
          }}>
               
                Team
               
              </li><li className={`nav-item ${menu === "Marketplace" ? "active" : ""}`}  onClick={() => {
            scrollToSection('home')
            setMenu("Marketplace");
            setIsMobile(!isMobile);
            setOpen(!open)
          }}>
                
                Marketplace                
              </li>
            </ul>
            <Button val={"Connect Wallet"}/>

          </div>
          {/* <div></div> */}
        </>
      </nav>
    </>
  );
};

export default Navbar;
