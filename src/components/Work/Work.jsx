import React from "react";
import "./Work.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

//Icon
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="work" id="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Work for All these
        </span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor
          sit amet consectetur adipisicing.
          <br />
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit amet.
        </span>

        <button className="button s-button">Hire me</button>

        <div
          className="blurr s-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>

      {/* right section */}

      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="upwork" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Work;
