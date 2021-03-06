import React from "react";
import { Button, Card, Row, Col, UncontrolledTooltip } from "reactstrap";
import routes from "routes.js";
import { Link } from "react-router-dom";
const ProfileCard = ({ profileInfo }) => {
  return (
    <Card className="card-profile shadow my-9">
      <div className="px-4">
        <Row className="justify-content-center">
          <Col className="order-lg-2" lg="3">
            <div className="card-profile-image">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img
                  alt="..."
                  className="rounded-circle"
                  src={require("assets/img/theme/team-4-800x800.jpg")}
                />
              </a>
            </div>
          </Col>
          <Col className="order-lg-3 text-lg-right align-self-lg-center" lg="4">
            <div className="card-profile-actions py-4 mt-lg-0">
              <Button
                className="mr-4"
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="sm"
              >
                Connect
              </Button>
              <Button
                className="float-right"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="sm"
              >
                Message
              </Button>
            </div>
          </Col>
          <Col className="order-lg-1" lg="4">
            <div className="card-profile-stats d-flex justify-content-center">
              <div>
                <Link id="tooltip837440416" to={`${routes.userDiaries}/${profileInfo.id}`}>
                  <span className="heading">22</span>
                  <span className="description">Diaries</span>
                </Link>
              </div>

              <UncontrolledTooltip
                delay={0}
                placement="top"
                target="tooltip837440416"
              >
                See diaries
              </UncontrolledTooltip>
              <div>
                <span className="heading">10</span>
                <span className="description">Photos</span>
              </div>
              <div>
                <span className="heading">89</span>
                <span className="description">Comments</span>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <h3>
            {profileInfo.name}{" "}
            <span className="font-weight-light">, {profileInfo.age}</span>
          </h3>
          <div className="h6 font-weight-300">
            <i className="fa fa-map-marker mr-2" />
            Bucharest, Romania
          </div>
          <div className="h6 mt-4">
            <i className="fa fa-briefcase mr-2" />
            Solution Manager - Creative Tim Officer
          </div>
          <div>
            <i className="fa fa-graduation-cap mr-2" />
            University of Computer Science
          </div>
        </div>
        <div className="mt-5 py-5 border-top text-center">
          <Row className="justify-content-center">
            <Col lg="9">
              <p className="font-weight-400">
                An artist of considerable range, Ryan — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              </p>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Show more
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
