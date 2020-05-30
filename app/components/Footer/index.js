import React from "react";
import { connect } from "react-redux";
import { FooterCss } from "./style";

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
                  Nurturing Ideas to Products that Raise fundsScale
                </span>
                <span className="subheadingFooter">
                  At NurtureLabs, we bring together remote tech teams, advanced
                  product management skills and best in-class technologies to
                  bring your ideas to life and deliver high impact results.
                </span>
              </div>
              <div className="secondfooter">
                <div className="footerLinks">
                  <span>Join our Network</span>
                  <span>Work</span>
                  <span>Partner with us</span>
                  <span>Service</span>
                  <span>Portfolio</span>
                  <span>T&C</span>
                  <span>Contact us</span>
                  <span>Privacy Policy</span>
                </div>
                <div className="subscribenow">
                  <input placeholder="Enter Email" />
                  <div className="subscribeNowButton">Subscribe</div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="bottomFooter">
          {!isMobile ? (
            <>
              <div className="rowBox">
                <img src="https://i.imgur.com/EiQJ3KT.png" />
                <span>+1 12345666</span>
              </div>
              <div className="rowBox">
                <img src="https://i.imgur.com/2aAwphY.png" />
                <span>support@companyname.com</span>
              </div>
              <div className="line"></div>
              <div className="rowBox">
                <span>Follow-Us</span>

                <img src="https://i.imgur.com/pStgaAW.png" />
              </div>
            </>
          ) : null}
          <span>All rights reserved by company name</span>
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
