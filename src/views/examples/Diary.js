import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import DiaryCard from "components/Diary/DiaryCard.js";

import { withRouter } from "react-router-dom";

class Diary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diary: {},
    };
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (this.refs.main) this.refs.main.scrollTop = 0;

    const { match } = this.props;

    fetch("http://192.168.0.106:8000/api/diary/" + match.params.id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ diary: data });
      })
      .catch(console.log);
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section">
            <Container>
              <DiaryCard diary={this.state.diary} />
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default withRouter(Diary);
