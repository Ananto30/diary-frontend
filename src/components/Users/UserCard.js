import React from "react";
import { Button, Card, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const UserCard = ({ users }) => {
  return (
    <Row className="justify-content-center">
      {users.map((user) => (
        <Col lg="3">
          <Card className="card-profile shadow mt-8">
            <div className="px-3">
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
              </Row>

              <div className="text-center mt-9 mb-3">
                <h5>
                  <Link to={`/profile/${user.id}`}>{user.name}</Link>{" "}
                  <span className="font-weight-light">, {user.age}</span>
                </h5>
                <div className=" font-weight-300">
                  <small>
                    <i className="fa fa-map-marker mr-2" />
                    Bucharest, Romania
                  </small>
                </div>
                <div className=" mt-2">
                  <small>
                    <i className="fa fa-briefcase mr-2" />
                    Solution Manager - Creative Tim Officer
                  </small>
                </div>
                <div>
                  <i className="fa fa-graduation-cap mr-2" />
                  <small>University of Computer Science</small>
                </div>
              </div>
              {/* <div className="mt-3 py-3 border-top text-center">
								<Row className="justify-content-center">
									<Col lg="12">
										<p>
											An artist of considerable range, Ryan — the name taken
											by Melbourne-raised, Brooklyn-based Nick Murphy —
											writes, performs and records all of his own music,
											giving it a warm, intimate feel with a solid groove
											structure. An artist of considerable range.
						  </p>
										<a href="#pablo" onClick={e => e.preventDefault()}>
											Show more
						  </a>
									</Col>

								</Row>
							</div> */}
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default UserCard;
