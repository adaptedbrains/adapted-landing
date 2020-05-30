import React from "react";
import { connect } from "react-redux";
import { PartnerCss } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Modal, ModalHeader, ModalBody } from "shards-react";
import TextLoop from "react-text-loop";

class Partner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showModal: false,
      type: null,
    };
  }
  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  closeModal() {
    let offset = window.pageYOffset;
    document.body.style.position = "static";
    document.body.style.overflow = "auto";
    document.body.style.top = -offset + "px";

    this.setState({ showModal: false, type: null });
  }

  render() {
    const { loading, showModal, type } = this.state;
    const { isMobile } = this.props;
    if (loading) {
      return null;
    }

    return (
      <PartnerCss>
        <div className="containerBig">
          {!isMobile ? <div className="greenHalf" /> : null}
          <Header />
          <div className="container1">
            <div className="first">
              <span className="headerTitle">
                {`NurtureLabs Partner Network `}
              </span>

              <span className="subtitle">
                At NurtureLabs, we are constantly looking for partners who can
                help us in reaching to masses. Our partners are key to our
                success and we make sure to share it with them.
              </span>
            </div>
            <div className="second">
              <img src="https://i.imgur.com/1mkFN1J.png" className="tree" />
            </div>
          </div>
        </div>
        <div className="container4">
          <div className="firstBox">
            <span className="headerTitle">NurtureLabs Technology Partner</span>
            <span className="subtitle">
              Join our technology partner network and we'll provide you with
              continuous stream of work so that you can focus on what you do the
              best
            </span>
            <div className="btn1">become Technology partner</div>
          </div>
          <div className="secondBox">
            <div className="boxes">Reduce Marketing Expense</div>
            <div className="boxes">Increase Resource Productivity</div>
            <div className="boxes">Improve capacity utilization</div>
            <div className="boxes">Accelerate revenue growth</div>
          </div>
        </div>
        {isMobile ? (
          <div className="container4">
            <div className="firstBox">
              <span className="headerTitle">NurtureLabs Sales Partner</span>
              <span className="subtitle">
                Join our sales partner network and build a passive source of
                recurring income by just matching us with a potential client
                within your network
              </span>
              <div className="btn1">become sales partner</div>
            </div>
            <div className="secondBox">
              <div className="boxes">Earn Passive Income</div>
              <div className="boxes">Monetize your network</div>
              <div className="boxes">Deepen Client Relationship</div>
              <div className="boxes">Get recurring revenue share</div>
            </div>
          </div>
        ) : (
          <div className="container4">
            <div className="secondBox">
              <div className="boxes">Earn Passive Income</div>
              <div className="boxes">Monetize your network</div>
              <div className="boxes">Deepen Client Relationship</div>
              <div className="boxes">Get recurring revenue share</div>
            </div>
            <div className="firstBox">
              <span className="headerTitle">NurtureLabs Sales Partner</span>
              <span className="subtitle">
                Join our sales partner network and build a passive source of
                recurring income by just matching us with a potential client
                within your network
              </span>
              <div className="btn1">become sales partner</div>
            </div>
          </div>
        )}
        <Footer />
      </PartnerCss>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.utils.is_mobile,
  };
};

export default connect(mapStateToProps, null)(Partner);
