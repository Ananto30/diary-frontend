import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { withRouter, NavLink as RRNavLink } from "react-router-dom";
import { inject, observer } from "mobx-react";

import routes from "routes.js";

class DemoNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseClasses: "",
      collapseOpen: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  handleLogout(e) {
    e.preventDefault();
    this.props.commonStore.resetAuth();
    this.props.history.push("/login");
  }

  render() {
    const user = this.props.commonStore.loggedUser;
    return (
      <>
        <header className="header-global">
          <Navbar
            // changed the the transparent css, added bg-default, remove these for transparent navbar
            className="navbar-main navbar-transparent navbar-light bg-default headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                {/* <img
                  alt="..."
                  src={require("assets/img/brand/argon-react-white.png")}
                /> */}
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        {/* <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        /> */}
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Pages</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/landing-page" tag={Link}>
                        Landing
                      </DropdownItem>
                      <DropdownItem to={routes.profile} tag={Link}>
                        Profile
                      </DropdownItem>
                      <DropdownItem to={routes.login} tag={Link}>
                        Login
                      </DropdownItem>
                      <DropdownItem to="/register-page" tag={Link}>
                        Register
                      </DropdownItem>
                      <DropdownItem to={routes.users} tag={Link}>
                        Users
                      </DropdownItem>
                      <DropdownItem to={routes.diary} tag={Link}>
                        Diary
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink
                      className="nav-link-inner--text"
                      exact
                      to={routes.users}
                      tag={RRNavLink}
                    >
                      Users
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-inner--text"
                      exact
                      to={routes.diary}
                      tag={RRNavLink}
                    >
                      Diaries
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav
                  className="navbar-nav-hover align-items-lg-center ml-lg-auto"
                  navbar
                >
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/creativetimofficial"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://twitter.com/creativetim"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Follow us on Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/creativetimofficial/argon-design-system-react"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Star us on Github
                    </UncontrolledTooltip>
                  </NavItem>

                  {user != null ? (
                    <UserNav user={user} handleLogout={this.handleLogout} />
                  ) : (
                    <LoginButton />
                  )}
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

const UserNav = ({ user, handleLogout }) => {
  return (
    <UncontrolledDropdown nav>
      <DropdownToggle nav>
        <span className="nav-link-inner--text py--5">
          {/* <img
                          alt="..."
                          className="rounded-circle"
                          src={require("assets/img/theme/team-4-800x800.jpg")}
                          style={{ width: "50px" }}
                        /> */}
          <span className="nav-link-inner--text">{user.name}</span>
        </span>
      </DropdownToggle>

      <DropdownMenu>
        <DropdownItem to={routes.editor} tag={Link}>
          <i className="fa fa-book" />
          Today's diary
        </DropdownItem>
        <DropdownItem to={routes.profile} tag={Link}>
          <i className="fa fa-user" />
          Profile
        </DropdownItem>
        <DropdownItem onClick={handleLogout}>
          <i className="fa fa-sign-out" />
          Logout
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

const LoginButton = () => {
  return (
    <NavItem className="d-none d-lg-block ml-lg-4">
      <Button
        className="btn-neutral btn-sm btn-icon"
        color="default"
        href="/login"
      >
        <span className="btn-inner--icon">
          <i className="fa fa-sign-in" />
        </span>
        <span className="nav-link-inner--text ml-1">Login</span>
      </Button>
    </NavItem>
  );
};

export default inject("commonStore")(observer(withRouter(DemoNavbar)));
