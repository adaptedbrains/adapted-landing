/** @format */

import React from "react";
import { connect } from "react-redux";
import { DahsboardCss } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Modal, ModalHeader, ModalBody } from "shards-react";
import TextLoop from "react-text-loop";

class Portfolio extends React.Component {
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
          {!isMobile ? <div className="greenHalf" /> : null}
          <Header />
          <div className="container1">
            <div className="first">
              <span className="headerTitle">{`Startups & Products `} </span>

              <span className="subtitle" style={{ marginBottom: 8 }}>
                {`We've worked with multiple founders around the world and helped them launch their products and kickstart their journey as an entrepreneur `}
              </span>
              <span className="subtitle">
                {`We have worked on business ideas across industries including but not limited to marktech, fashion-tech, sustainability , cryptocurrency and many more`}
              </span>
            </div>
            <div className="second">
              <img src="https://i.imgur.com/l6e2w1X.png" className="tree" />
            </div>
          </div>
        </div>
        <div className="container3">
          <div className="phoneimg">
            <img style={{ opacity: 0 }} src="https://i.imgur.com/9j0XNMy.png" />
            <video
              muted
              loop
              autoPlay
              controls
              src="https://frontend-asset-files.s3.ap-south-1.amazonaws.com/videoplayback.mp4"
            />
          </div>
          <div className="rightbox">
            <img
              className="logoboxworth"
              src="https://i.imgur.com/BJC3YVl.png"
            />
            <span className="bolderheader">Daily Recharges</span>
            <span className="subtitletext">
              Online Payment & Recharge, made easy! Your one-stop destination
              for all your recharge needs - mobile recharge, DTH
              recharge,electricity bill payment, insurance premium recharge for
              businesses. We built the entire system comprising of the consumer
              and business side apps for Android, a web landing page, a scalable
              event-driven backend.
            </span>

            {/* <div className="nameimgbox">
              <img src="https://i.imgur.com/ALYj9Hp.png" />
              <div className="contactinfo">
                <span>@colin Krieg</span>
                <span>Arizona, USA</span>
              </div>
            </div> */}
          </div>
        </div>
        <div className="container2 reversevideorow">
          <div className="phoneimg">
            <img src="https://i.imgur.com/6TOkY1F.png" />
            <video
              muted
              loop
              autoPlay
              muted
              src="https://frontend-asset-files.s3.ap-south-1.amazonaws.com/Screenrecorder-2020-03-21-19-27-04-226_2.mp4"
            />
          </div>

          <div className="rightbox">
            <img
              className="logoboxworth"
              src="https://i.imgur.com/elEy6uT.png"
            />
            <span className="bolderheader">AkMoney</span>
            <span className="subtitletext">
              AkMoney is a platform for users to recharge their Mobile &DTH from
              anywhere anytime. They can instantly recharge and get high
              commission on every transaction. Users can also get Pan card at
              their doorstep. Every Pan service is available.We built the entire
              system comprising of the consumer and business side apps for
              Android, a web landing page, a scalable event-driven backend.
            </span>

            {/* <div className="nameimgbox">
              <img src="https://i.imgur.com/ALYj9Hp.png" />
              <div className="contactinfo">
                <span>@colin Krieg</span>
                <span>Arizona, USA</span>
              </div>
            </div> */}
          </div>
        </div>
        <div className="container3">
          <div className="phoneimg">
            <img style={{ opacity: 0 }} src="https://i.imgur.com/9j0XNMy.png" />
            <video
              muted
              loop
              autoPlay
              controls
              src="https://frontend-asset-files.s3.ap-south-1.amazonaws.com/final_5eb30a55afb02f0014412eb4_827413.mp4"
            />
          </div>
          <div className="rightbox">
            <img
              className="logoboxworth"
              src="https://i.imgur.com/xpOkMqp.png"
            />
            <span className="bolderheader">Cinemadraft</span>
            <span className="subtitletext">
              Cinemadraft is a daily fantasy sports-style movie game. Instead of
              picking athletes from teams, you're picking actors from movies,
              earning points based on their movie box office performance. The
              system will be a decentralized application deployed on the Tron
              Blockchain and has its own token called CD3D(based on PoWH3D) that
              also serves as a self-perpetuating investment vehicle for players
              and speculators alike. We did the initial PoCs and decided to use
              the Tron BlockChain. We are currently building a decentralized
              application using Tron and React JS for them along with the smart
              contract for the token CD3D.
            </span>
            {/* <div className="nameimgbox">
              <img src="https://i.imgur.com/ALYj9Hp.png" />
              <div className="contactinfo">
                <span>@colin Krieg</span>
                <span>Arizona, USA</span>
              </div>
            </div> */}
          </div>
        </div>
        <div className="container3 reversevideorow marginbottombox">
          <div className="phoneimg">
            <img style={{ opacity: 0 }} src="https://i.imgur.com/9j0XNMy.png" />
            <video
              muted
              loop
              autoPlay
              controls
              src="https://frontend-asset-files.s3.ap-south-1.amazonaws.com/final_5eb30a55afb02f0014412eb4_613178.mp4"
            />
          </div>
          <div className="rightbox">
            <img
              className="logoboxworth"
              src="https://i.imgur.com/dAzZkXF.png"
            />
            <span className="bolderheader">StickerBook</span>
            <span className="subtitletext">
              Sticker Book is a Uk-based startup that operates in sustainability
              tech and right they are now building gamified surveys for company
              employees to understand the sustainability practices followed
              within the company. We are working with them to first build the
              whole product and then deploy some factor analysis and machine
              learning models as they start collecting more data.
            </span>
            {/* <span className="bolderheader">Technologies Used</span>
            <div className="nameimgbox">
              <img src="https://i.imgur.com/ALYj9Hp.png" />
              <div className="contactinfo">
                <span>@colin Krieg</span>
                <span>Arizona, USA</span>
              </div>
            </div> */}
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

export default connect(mapStateToProps, null)(Portfolio);
