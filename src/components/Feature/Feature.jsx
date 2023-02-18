import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./feature.css";
import Automation from "../../img/automation.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const TwoColumnDiv = () => {
  return (
    <>
      <div className="container">
        <div className="row div-1">
          <div className="text-left leftDiv">
            <h4>OUR FEATURES</h4>
            <h1>
              Know your audience
              <br /> and boost sales
            </h1>
            <hr className="line"></hr>
          </div>
          <div className="text-right rightDiv">
            <p>
              Effective emails convey the most significant <br />
              substance to a client at the proper time which
              <br /> is our marketing approaches include
              <br />
              scheduled emails.
            </p>
          </div>
        </div>

        <div className="row div-2">
          <div className="col-md-6">
            <h2 className="title">
              Save precious <br />
              time with automation
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              animi, accusantium quae quos deleniti sapiente unde laudantium
              impedit quas repellendus repellat sit quod omnis, dolores
              temporibus labore. Non atque harum ipsa consequatur beatae
            </p>
            <button className="btn text-btn">
              Learn More
              <ArrowRightAltIcon />
            </button>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 rightDiv">
            <img src={Automation} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="row div-3">
        <div className="text-left div-3left ">
          <h4>OUR HAPPY CUSTOMERS</h4>
          <h1>
            What our customer
            <br /> sayes about us
          </h1>
          <hr className="line"></hr>
        </div>
        <div className="text-right div-3right">
          <p>
            <i class="fa-solid fa-quote-left"></i>Lorem, ipsum dolor sit amet
            consectetur <br />
            adipisicing elit. Optio facilis corporis, aut cum<br />
             doloremque necessitatibus animi quasi?
            <br />
            Assumenda, placeat saepe.
          </p>
          <div className="special">
            <h2 className="specialName">John Deo</h2>
            <p>Product Specialist, Lorem Co.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoColumnDiv;
