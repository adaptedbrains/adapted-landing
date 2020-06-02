import React from "react";
import { connect } from "react-redux";
import { DahsboardCss } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Modal, ModalHeader, ModalBody } from "shards-react";
import TextLoop from "react-text-loop";
import { browserHistory, Router } from "react-router";
import axios from "axios";

class ContactUs extends React.Component {
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
    const modalheader =
      type == "cto"
        ? "CTO as a Service"
        : type == "elastic"
          ? "Elastic Resourcing"
          : "Rapid MVP Development";
    return (
      <DahsboardCss>
        <div className="containerBig">
          <Header />
          <div className="container8">
            <div className="formBox">
              <div className="inputBox">
                <span>Name</span>
                <input
                  value={this.state.name}
                  onChange={(e) => {
                    this.setState({
                      name: e.target.value,
                    });
                  }}
                  placeholder=""
                />
              </div>
              <div className="inputBox">
                <span>Email</span>
                <input
                  value={this.state.email}
                  onChange={(e) => {
                    this.setState({
                      email: e.target.value,
                    });
                  }}
                  placeholder=""
                />
              </div>
              <div className="inputBox">
                <span>Message</span>
                <textarea
                  value={this.state.message}
                  onChange={(e) => {
                    this.setState({
                      message: e.target.value,
                    });
                  }}
                  placeholder=""
                />
              </div>
              <div
                onClick={() => {
                  if (
                    this.state.name &&
                    this.state.email &&
                    this.state.message
                  ) {
                    axios
                      .post("/api/sendmessage", {
                        email: this.state.email,
                        name: this.state.name,
                        message: this.state.message,
                      })
                      .then((e) => {
                        if (e.status != 200) {
                          alert("Something went wrong! Please try again.");
                        } else {
                          alert("Thank you for contacting us!");
                        }
                      });
                  } else {
                    alert(
                      "Please provide email name and message to send us message."
                    );
                  }
                }}
                className="bottomButton"
              >
                SEND US MESSAGE
              </div>
            </div>
            <div className="supportBox">
              <span className="headercontainer8">
                Talk to us and get your project moving!
              <ol>
                  <li>We will respond to you within 24 hours.</li>
                  <li>We’ll sign an NDA if requested.</li>
                  <li>You'll be talking to product and tech experts (no account managers).</li>
                </ol>
              </span>
              <a
                target="blank"
                href="https://calendly.com/nurturelabs/meetingrequest"
                className="bookacall"
              >
                BOOK A CALL
              </a>
              <div className="dottedLine">
                {`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  `}
              </div>
              <div className="contactUsStrip">
                <img src="https://i.imgur.com/bm0rg5G.png" />
                <span>hello@nurtureLabs.co</span>
              </div>
              {/* <div className="contactUsStrip">
              <img src="https://i.imgur.com/IM81cXW.png" />
              <span>+91 79800 23053</span>
            </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </DahsboardCss>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.utils.is_mobile,
  };
};

export default connect(mapStateToProps, null)(ContactUs);