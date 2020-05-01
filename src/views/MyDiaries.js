import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import DiaryCards from "components/Diary/DiaryCards.js";
import client from "client.js";


class MyDiaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diaries: [],
    };
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (this.refs.main) this.refs.main.scrollTop = 0;

    client.Diary.getMyDiaries()
      .then((res) => {
        this.setState({ diaries: res.data.diaries });
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
              <h3 className="mt-6">My Diaries</h3>
              <DiaryCards diaries={this.state.diaries} />
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default MyDiaries;
