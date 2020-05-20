import React from "react";
import { connect } from "react-redux";
import { HeaderCss } from "./style";
import { browserHistory, Router } from "react-router";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      menuCover: false,
      anim: false,
    };
  }
  componentDidMount() {
    this.setState({
      loading: false,
    });
  }
  render() {
    const { loading, menuCover } = this.state;
    const { isMobile } = this.props;
    if (loading) {
      return null;
    }
    return (
      <HeaderCss>
        {menuCover ? (
          <div
            onAnimationEnd={() => {
              if (this.state.anim) {
                this.setState({
                  menuCover: false,
                  anim: false,
                });
              }
            }}
            className={
              this.state.anim
                ? "fullscreenMode secondAnim"
                : "fullscreenMode firstAnim"
            }
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "40px 30px",
              }}
            >
              <div style={{ width: "90%" }}>
                <img
                  onClick={() => {
                    browserHistory.push({
                      pathname: "/",
                    });
                  }}
                  src="https://i.imgur.com/oFgkGUI.png"
                  style={{ display: "flex", width: 170 }}
                />
              </div>
              <div
                onClick={() => {
                  this.setState({ anim: true });
                }}
                style={{
                  width: "10%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://i.imgur.com/HKRhC0P.png"
                  style={{ width: 25 }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span
                onClick={() => {
                  this.setState(
                    {
                      menuCover: false,
                      anim: false,
                    },
                    () => {
                      browserHistory.push({
                        pathname: "join",
                      });
                    }
                  );
                }}
                style={{
                  fontFamily: "Poppins",
                  textAlign: "center",
                  margin: 20,
                  fontWeight: 600,
                  fontSize: 20,
                  color: "#29235c",
                }}
              >
                Join Us
              </span>
            </div>
          </div>
        ) : null}
        <div className="first">
          <img src="https://i.imgur.com/oFgkGUI.png" />
        </div>
        {!isMobile ? (
          <div className="second">
            <div className="menuItem">Partner with us</div>
            <div
              className="menuItem"
              onClick={() => {
                browserHistory.push({
                  pathname: "join",
                });
              }}
            >
              Join Network
            </div>
            <div className="menuItem">Portfolio</div>
            <div className="menuItem roundButton">Contact us</div>
          </div>
        ) : null}
        {isMobile ? (
          <img
            onClick={() => {
              this.setState({ menuCover: true });
            }}
            className="burgerMenu"
            src="https://i.imgur.com/SMTRKEA.png"
          />
        ) : null}
      </HeaderCss>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.utils.is_mobile,
  };
};

export default connect(mapStateToProps, null)(Header);
