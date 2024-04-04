import React from "react";
import "./../Home/Home.css";
import heroImage from "./../../Assets/Images/Hero Image.png";
import tradeImage from "./../../Assets/Images/Trade.png";
import Button from "../Button";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div id="home" className="home pb-5">
      <Navbar scrollToSection={scrollToSection}/>
      <div className="row">
        <div className="col-md-7 home-left">
          <div className="home-content">
            <h1 className="home-heading">
              Generate with AI, Scan, Mint, Sell & Trade
            </h1>
            {/* <img className="trade-image" src={tradeImage} alt="tradeImage" /> */}
            {/* <h4 className="home-subheading">
              At <span>3 Dot Link</span>.
            </h4> */}
            <p className="home-text">
            Explore 3dotlink, where Web3 meets cultural legacy, and AI breathes life into NFTs
            </p>
            <Button val={"Buy NFT’S"} />
            {/* <button className="connectWalletBtn">Connect Wallet</button> */}
          </div>
        </div>
        {/* <div className="col-md-5 home-right">
          <div className="home-img">
            <img src={heroImage} alt="heroImage" className=""/>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
