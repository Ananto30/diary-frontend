import React from "react";
import Moment from "react-moment";
import { Button, Card, Row, Col, UncontrolledTooltip } from "reactstrap";
import Slate from "components/Slate.js";

const DiaryCard = ({ diary }) => {
  return (
    <Row className="align-items-center mt-7">
      <Col lg="9">
        <div>
          <h2 className="display-3">{diary.title}</h2>
          <div className="font-weight-300">
            <i className="fa fa-clock-o mr-2" />
            <Moment format="D MMM YYYY" withTitle>
              {diary.created_at}
            </Moment>
          </div>
          {/* <p className="lead text-muted">
						According to the National Oceanic and Atmospheric
						Administration, Ted, Scambos, NSIDClead scentist, puts the
						potentially record maximum.
              </p> */}
          <div className="mt-3 py-3 border-top">
            <div className="font-weight-400" dangerouslySetInnerHTML={{__html: diary.content}}></div>
          </div>
        </div>
      </Col>

      <Col lg="3">
        <Row className="align-items-center mt--100">
          <Col sm="12">
            <Button
              className="btn-icon-only rounded-circle"
              color="twitter"
              href="https://twitter.com/creativetim"
              id="tooltip475038075"
              target="_blank"
            >
              <span className="btn-inner--icon">
                <i className="fa fa-twitter" />
              </span>
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="right"
              target="tooltip475038075"
            >
              Share in Twitter
            </UncontrolledTooltip>
          </Col>
          <Col className="mt-4" sm="12">
            <Button
              className="btn-icon-only rounded-circle"
              color="facebook"
              href="https://www.facebook.com/creativetim"
              id="tooltip837440415"
              target="_blank"
            >
              <span className="btn-inner--icon">
                <i className="fa fa-facebook-square" />
              </span>
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="right"
              target="tooltip837440415"
            >
              Share in Facebook
            </UncontrolledTooltip>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DiaryCard;
