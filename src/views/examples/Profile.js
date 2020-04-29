import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import ProfileCard from "components/Profile/ProfileCard.js";
import Loader from "components/Loader.js";
import client from "client.js";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileInfo: null,
      isLoading: true,
    };
  }
  componentDidMount() {
    const { match } = this.props;
    var authU = match.params.id;
    if (authU == null) {
      authU = "me";
    }
    console.log(this.props.commonStore.authToken);
    client.User.getById(authU)
      .then((res) => {
        if (res.status === 200) {
          this.props.commonStore.setLoggedUser(res.data);
          this.setState({
            profileInfo: res.data,
            isLoading: false,
          });
        }
      })
      .catch(console.log);

    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (this.refs.main) this.refs.main.scrollTop = 0;
  }

  render() {
    const { profileInfo, isLoading } = this.state;
    const loggedUser = this.props.commonStore.loggedUser;
    const authToken = this.props.commonStore.authToken;

    if (!authToken) return <Redirect to="/login" />;

    return (
      <>
        <DemoNavbar user={loggedUser} />
        <main className="profile-page" ref="main">
          <section className="section ">
            <Container>
              {isLoading ? (
                <Loader />
              ) : (
                <ProfileCard profileInfo={profileInfo} />
              )}
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default inject("commonStore")(observer(withRouter(Profile)));
