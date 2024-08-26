import React from "react";
import "./HomeLayout.css";

const HomeLayout = () => {
  return (
    <>
      <div className="homeSection">
        <div className="homecontainer">
          <div className="cardLayout">
            <div className="cardimg">
              <img
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/9/n/-original-imagtc6fyrstd4jm.jpeg?q=70"
                alt=""
              />
            </div>

            <div className="cardtitle">
                <h4>Apple iPhone 15 Plus (Black, 512 GB)</h4>
            </div>
          </div>
          <div className="cardLayout">
            <div className="cardimg">
              <img
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/9/n/-original-imagtc6fyrstd4jm.jpeg?q=70"
                alt=""
              />
            </div>

            <div className="cardtitle">
                <h4>Apple iPhone 15 Plus (Black, 512 GB)</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
