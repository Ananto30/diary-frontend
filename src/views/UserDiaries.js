import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar";
import SimpleFooter from "components/Footers/SimpleFooter";
import DiaryCards from "components/Diary/DiaryCards";
import client from "client";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router";

class UserDiaries extends React.Component {
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

    const { match } = this.props;
    var uid = match.params.uid;
    if (uid == null) {
      uid = this.props.commonStore.loggedUser.id;
    }

    client.Diary.getUserDiaries(uid)
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
              <h3 className="mt-6">Diaries</h3>
              <DiaryCards diaries={this.state.diaries} />
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default inject("commonStore")(observer(withRouter(UserDiaries)));
