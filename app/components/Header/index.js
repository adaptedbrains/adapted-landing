import React from "react";
import { connect } from "react-redux";
import { HeaderCss } from "./style";

class Header extends React.Component {
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
        <HeaderCss>
            <div className="first">
              <img src="https://i.imgur.com/oFgkGUI.png" />
            </div>
            {!isMobile?<div className="second">
              <div className="menuItem">Partner with us</div>
              <div className="menuItem">Join Network</div>
              <div className="menuItem">Portfolio</div>
              <div className="menuItem roundButton">Contact us</div>
            </div>:null}
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
