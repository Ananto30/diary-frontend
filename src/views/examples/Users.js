import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import UserCard from "components/Users/UserCard.js";
import client from "client.js";
import Loader from "components/Loader.js";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (this.refs.main) this.refs.main.scrollTop = 0;

    client.User.getUsers()
      .then((res) => {
        this.setState({
          users: res.data.users,
          isLoading: false,
        });
      })
      .catch(console.log);
  }
  render() {
    const { users, isLoading } = this.state;
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section">
            {isLoading ? (
              <Loader />
            ) : (
              <Container>
                <UserCard users={users} />
              </Container>
            )}
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Users;
