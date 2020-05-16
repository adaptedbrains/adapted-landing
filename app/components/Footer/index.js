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
                  Sed ut perspiciatis unde omnis iste natus error sit volu
                  ptatem accusantium doloremque laud
                </span>
                <span className="subheadingFooter">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo invent
                </span>
              </div>
              <div className="secondfooter">
                <div className="footerLinks">
                  <span>Service</span>
                  <span>Join Us</span>
                  <span>Work</span>
                  <span>Contact Us</span>
                  <span>Pricing</span>
                  <span>Terms and Conditions</span>
                  <span>Blogs</span>
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
