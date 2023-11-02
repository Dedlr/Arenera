import { Col, Row } from "reactstrap";

import Home from "../components/dashboard/Home";



const Starter = () => {
  return (
    <div>
      {/***HOME ***/}
      <Row>
        <Col lg="12">
          <Home/>
        </Col>
      </Row>
      
    </div>
  );
};

export default Starter;
