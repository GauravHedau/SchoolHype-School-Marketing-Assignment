import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IMG from "../../img/marketing.jfif";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./main.css";
import { width } from "@mui/system";

const Main = () => {
  return (
    <div className="main d-flex align-items-center justify-content-center text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mainText">
            <h1 className="mainHeading">
              Reach your - <br /> <u>audience</u> & converts <br />
              your leads
            </h1>
            <p className="lead">
              Get your customers with SEO, rank your business with email
              marketing, build sales leads
            </p>
            <div className="d-flex flex-wrap">
              <button className="btn btn-info me-3 mb-3">Get Started</button>
              <button className="btn btn-dark mb-3">
                <PlayArrowIcon />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="rectangle">
              <img src={IMG} alt=" " className="img-fluid mainImg" style={{ width: "100%"}}/>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
