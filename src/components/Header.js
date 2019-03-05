import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { Icon, Menu, Sidebar } from "semantic-ui-react";

class HeaderNavbar extends Component {
  state = {
    visible: false,
    headerShow: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.tansparentShow);
  }
  onNavbarHidden = hidden => {
    this.setState({
      visible: hidden
    });
  };
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  scrollToElement = () => {};

  tansparentShow = () => {
    window.scrollY > 0
      ? this.setState({ headerShow: true })
      : this.setState({ headerShow: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Menu
          className="header_transition"
          secondary
          inverted
          fixed="top"
          style={{
            background: this.state.headerShow
              ? "rgba(97, 97, 97, 0.8)"
              : "transparent",
            fontSize: "1.7rem",
            boxShadow: "none",
            transition: "all 1s ease-out"
          }}
        >
          <Menu.Item
            onClick={() => this.setState({ visible: !this.state.visible })}
          >
            <Icon name="sidebar" size="big" />
          </Menu.Item>
          <Menu.Item className="rental_name" onClick={this.scrollToTop}>
            RentalHome
          </Menu.Item>
        </Menu>

        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            vertical
            visible={visible}
            style={{
              fontSize: "1.9rem",
              width: "26rem"
            }}
            className="sidebar"
          >
            <Menu.Item className="menu_item">
              <Icon name="home" className="menu_item-icon" />
              <Link
                to="section1"
                smooth={true}
                offset={0}
                duration={1500}
                className="menu_item-link"
                onClick={() => this.setState({ visible: false })}
              >
                Home
              </Link>
            </Menu.Item>
            <Menu.Item className="menu_item">
              <Icon name="key" className="menu_item-icon" />
              <Link
                to="section2"
                smooth={true}
                offset={0}
                duration={1500}
                className="menu_item-link"
                onClick={() => this.setState({ visible: false })}
              >
                How It Work
              </Link>
            </Menu.Item>
            <Menu.Item className="menu_item">
              <Icon name="building" className="menu_item-icon" />
              <Link
                to="section3"
                smooth={true}
                offset={-60}
                duration={1500}
                className="menu_item-link"
                onClick={() => this.setState({ visible: false })}
              >
                Services
              </Link>
            </Menu.Item>
            <Menu.Item className="menu_item">
              <Icon name="map" className="menu_item-icon" />
              <Link
                to="section4"
                smooth={true}
                offset={50}
                duration={1500}
                className="menu_item-link"
                onClick={() => this.setState({ visible: false })}
              >
                Location
              </Link>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher />
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default HeaderNavbar;
