import React from "react";
import { connect } from "react-redux";
import { FooterCss } from "./style";
import { browserHistory, Router } from "react-router";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    this.setState({
      loading: false,
    });
  }
  render() {
    const { loading } = this.state;
    const { isMobile } = this.props;
    if (loading) {
      return null;
    }
    return (
      <FooterCss>
        {!isMobile ? (
          <div className="footerBox">
            <div className="footerContainer">
              <div className="firstFooterBox">
                <img src="https://i.imgur.com/kK7cxAz.png" />
                <span className="firstHeading">
                  Nurturing Ideas to Products that scale
                </span>
                <span className="subheadingFooter">
                  At NurtureLabs, we bring together remote tech teams, advanced
                  product management skills and best in-class technologies to
                  bring your ideas to life and deliver high impact results.
                </span>
              </div>
              <div className="secondfooter">
                <div className="footerLinks">
                  <span
                    onClick={() => {
                      browserHistory.push({
                        pathname: "join",
                      });
                    }}
                  >
                    Join our Network
                  </span>
                  <span
                    onClick={() => {
                      browserHistory.push({
                        pathname: "/",
                      });
                    }}
                  >
                    Work
                  </span>
                  <span
                    onClick={() => {
                      browserHistory.push({
                        pathname: "partner-with-us",
                      });
                    }}
                  >
                    Partner with us
                  </span>
                  <span
                    onClick={() => {
                      browserHistory.push({
                        pathname: "service",
                      });
                    }}
                  >
                    Service
                  </span>
                  <span
                    onClick={() => {
                      browserHistory.push({
                        pathname: "portfolio",
                      });
                    }}
                  >
                    Portfolio
                  </span>
                  {/* <span
                    onClick={() => {
                      browserHistory.push({
                        pathname: "join",
                      });
                    }}
                  >
                    T&C
                  </span> */}
                  <span
                    onClick={() => {
                      browserHistory.push({
                        pathname: "contact-us",
                      });
                    }}
                  >
                    Contact us
                  </span>
                  {/* <span
                    onClick={() => {
                      browserHistory.push({
                        pathname: "join",
                      });
                    }}
                  >
                    Privacy Policy
                  </span> */}
                </div>
                {/* <div className="subscribenow">
                  <input placeholder="Enter Email" />
                  <div className="subscribeNowButton">Subscribe</div>
                </div> */}
              </div>
            </div>
          </div>
        ) : null}
        <div className="bottomFooter">
          {!isMobile ? (
            <>
              {/* <div className="rowBox">
                <img src="https://i.imgur.com/EiQJ3KT.png" />
                <span>+1 12345666</span>
              </div> */}
              <div class="social">
                <div className="rowBox">
                  <img src="https://i.imgur.com/2aAwphY.png" />
                  <span>hello@nurturelabs.co</span>
                </div>
                <div className="line"></div>
                <div className="rowBox">
                  <span>Follow-Us</span>
                  <a
                    target="blank"
                    href="https://www.linkedin.com/company/nurture-labs/"
                  >
                    <img src="https://i.imgur.com/pStgaAW.png" />
                  </a>
                </div>
              </div>
            </>
          ) : null}
          <span>All rights reserved by Ruuxa Technologies Pvt Ltd</span>
        </div>
      </FooterCss>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.utils.is_mobile,
  };
};

export default connect(mapStateToProps, null)(Footer);
