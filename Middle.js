import React from "react";
import { Card, Row, Form, Col } from "react-bootstrap";
import "../Components/css/middle.css";

import logo2 from "../assests/Solid_lines.png";
import Form1 from "./Form1";
function Middle() {
  return (
    <Row className="card-body-upper"> <div ><Col  md={{ span: 4, offset: 4 }}>
      <div  className="card-body" >
        <div className="logo-class">
          {" "}
          <img alt="" src={logo2} width="30" height="30" />{" "}
        </div>

        <div className="subheading">
          It’s a delight to have you <br />
          onboard
        </div>
        <div className="subHeading2">
          Help us know you better.
          <br /> (This is how we optimize Wobot as per your business needs)
        </div>
        <Form1 />
      </div>
      </Col></div>
    </Row>
    
  );
}

export default Middle;
