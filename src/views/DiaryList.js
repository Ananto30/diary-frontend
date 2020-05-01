import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import DiaryCards from "components/Diary/DiaryCards.js";
import client from "client.js";

import MarkdownShortcutsExample from "components/Slate.js";

class DiaryList extends React.Component {
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

    client.Diary.getDiaries()
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
              <DiaryCards diaries={this.state.diaries} />
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default DiaryList;
