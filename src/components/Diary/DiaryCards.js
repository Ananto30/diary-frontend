import React from "react";
import { Card, Row, Col, Button } from "reactstrap";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const DiaryCards = ({ diaries }) => {
  return (
    <div className="card-columns mt-5">
      {/* <Row className="justify-content-center mt-7"> */}
      {diaries.map((diary) => (
        //   <Col lg="4">
        <Card className="card-profile shadow-sm mt-1">
          <div className="px-3">
            <div className="text-center mt-3 mb-3">
              <h5>{diary.title}</h5>
              <div className=" mt-2">
                <small>
                  <i className="fa fa-clock-o mr-2" />
                  <Moment format="D MMM YYYY" withTitle>
                    {diary.created_at}
                  </Moment>
                </small>
              </div>
            </div>
            <div className="mt-3 py-3 border-top text-center">
              <Row className="justify-content-center">
                <Col lg="12">
                  {diary.content.length > 150 ? (
                    <p>{`${diary.content
                      .substring(0, 150)
                      .replace(/<(.|\n)*?>/g, "")}...`}</p>
                  ) : (
                    <p>{diary.content.replace(/<(.|\n)*?>/g, "")}</p>
                  )}
                  <small>
                    <Link color="link" to={`/diary/${diary.id}`}>
                      Show more
                    </Link>
                  </small>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
        //   </Col>
      ))}
      {/* </Row> */}
    </div>
  );
};

export default DiaryCards;
