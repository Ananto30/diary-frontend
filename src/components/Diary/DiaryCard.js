import React from "react"
import Moment from 'react-moment';
import { Button, Card, Row, Col, UncontrolledTooltip } from "reactstrap";

const DiaryCard = ({ diary }) => {

	return (
		// <Card className="card-profile shadow my-9">
		// 	<div className="px-4">
		// 		<Row className="justify-content-center">
		// 			<Col className="order-lg-2" lg="3">
		// 				{/* <div className="card-profile-image">
		// 					<a href="#pablo" onClick={e => e.preventDefault()}>
		// 						<img
		// 							alt="..."
		// 							className="rounded-circle"
		// 							src={require("assets/img/theme/team-4-800x800.jpg")}
		// 						/>
		// 					</a>
		// 				</div> */}
		// 			</Col>
		// 			<Col
		// 				className="order-lg-3 text-lg-right align-self-lg-center"
		// 				lg="4"
		// 			>
		// 				<div className="card-profile-actions py-4 mt-lg-0">
		// 					<Button
		// 						className="btn-icon-only rounded-circle ml-1"
		// 						color="facebook"
		// 						href="https://www.facebook.com/creativetim"
		// 						id="tooltip837440415"
		// 						target="_blank"
		// 					>
		// 						<span className="btn-inner--icon">
		// 							<i className="fa fa-facebook-square" />
		// 						</span>
		// 					</Button>
		// 					<UncontrolledTooltip delay={0} target="tooltip837440415">
		// 						Share in Facebook
		//             </UncontrolledTooltip>
		// 					{/* <Button
		// 						className="mr-4"
		// 						color="info"
		// 						href="#pablo"
		// 						onClick={e => e.preventDefault()}
		// 						size="sm"
		// 					>Connect</Button>
		// 					<Button
		// 						className="float-right"
		// 						color="default"
		// 						href="#pablo"
		// 						onClick={e => e.preventDefault()}
		// 						size="sm"
		// 					>Message</Button> */}
		// 				</div>
		// 			</Col>
		// 			<Col className="order-lg-1" lg="4">
		// 				<div className="card-profile-stats d-flex justify-content-center">
		// 					<div>
		// 						<span className="heading">22</span>
		// 						<span className="description">Views</span>
		// 					</div>
		// 					<div>
		// 						<span className="heading">10</span>
		// 						<span className="description">Photos</span>
		// 					</div>
		// 					<div>
		// 						<span className="heading">89</span>
		// 						<span className="description">Comments</span>
		// 					</div>
		// 				</div>
		// 			</Col>
		// 		</Row>
		// 		<div className="text-center">
		// 			<h3>
		// 				{diary.title}{" "}
		// 				{/* <span className="font-weight-light">, {diary.age}</span> */}
		// 			</h3>
		// 			<div className="font-weight-300">
		// 				<i className="fa fa-clock-o mr-2" />
		// 				<Moment fromNow>{diary.created_at}</Moment>
		// 			</div>
		// 		</div>
		// 		<div className="mt-5 py-5 border-top text-center">
		// 			<Row className="justify-content-center">
		// 				<Col lg="9">
		// 					<p className="font-weight-400">
		// 						{diary.content}
		// 					</p>
		// 				</Col>
		// 			</Row>
		// 		</div>
		// 	</div>
		// </Card>
		<Row className="align-items-center mt-7">
			<Col sm="9">
				<div>
					<h2 className="display-3">{diary.title}</h2>
					<div className="font-weight-300">
						<i className="fa fa-clock-o mr-2" />
						<Moment format="D MMM YYYY" withTitle>{diary.created_at}</Moment>
					</div>
					{/* <p className="lead text-muted">
						According to the National Oceanic and Atmospheric
						Administration, Ted, Scambos, NSIDClead scentist, puts the
						potentially record maximum.
              </p> */}
					<div className="mt-5 py-5 border-top">
						<p className="font-weight-400">
							{diary.content}
						</p>
					</div>

				</div>
			</Col>

			<Col sm="3">
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
						<UncontrolledTooltip delay={0} placement="right" target="tooltip475038075">
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
						<UncontrolledTooltip delay={0} placement="right" target="tooltip837440415">
							Share in Facebook
		            </UncontrolledTooltip>
					</Col>

				</Row>

			</Col>
		</Row>
	)
};

export default DiaryCard