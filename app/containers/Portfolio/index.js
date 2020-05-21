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
        <Modal
          fade={false}
          backdropClassName="lc-modal-backdrop"
          size="lg"
          open={showModal}
          toggle={this.closeModal}
        >
          <ModalHeader className="headerBox">
            <span>{modalheader}</span>
            <div className="headerSubeheader">
              <span>How it work</span>
              <span>Pricing</span>
            </div>
            <img
              onClick={() => {
                this.setState({
                  showModal: false,
                  type: null,
                });
              }}
              src="https://i.imgur.com/9xfDfQO.png"
            />
          </ModalHeader>
          <ModalBody className="modalBodyHome">
            <div className="leftBoxModal">
              {type == "elastic" ? (
                <div className="listwrapper">
                  <div className="listEntries">
                    <div className="numberBox">
                      <div className="number">01</div>
                      <div className="linebelow" />
                    </div>

                    <span>
                      Tell us about your tech stack, desired skill set, and the
                      role available
                    </span>
                  </div>
                  <div className="listEntries">
                    <div className="numberBox">
                      <div className="number">02</div>
                      <div className="linebelow" />
                    </div>
                    <span>
                      Pay refundable down-payment to launch the talent search
                      process.
                    </span>
                  </div>
                  <div className="listEntries">
                    <div className="numberBox">
                      <div className="number">03</div>
                      <div className="linebelow" />
                    </div>
                    <span>
                      Get a list of top 3 matched candidates directly in your
                      inbox
                    </span>
                  </div>
                  <div className="listEntries">
                    <div className="numberBox">
                      <div className="number">04</div>
                    </div>
                    <span>
                      Interview and hire the candidate who best fits your
                      company culture.
                    </span>
                  </div>
                </div>
              ) : type == "cto" ? (
                <div className="listwrapper">
                  <div className="listEntries">
                    <div className="numberBox">
                      <div className="number">01</div>
                      <div className="linebelow" />
                    </div>

                    <span>
                      Tell us about your requirements, technical challenges, and
                      business goals
                    </span>
                  </div>
                  <div className="listEntries">
                    <div className="numberBox">
                      <div className="number">02</div>
                      <div className="linebelow" />
                    </div>
                    <span>
                      We’ll spin-off a custom remote team of fully dedicated
                      resources (40+hrs/week)
                    </span>
                  </div>
                  <div className="listEntries">
                    <div className="numberBox">
                      <div className="number">03</div>
                    </div>
                    <span>Scale your tech team up or down on the go .</span>
                  </div>
                </div>
              ) : (
                <div className="listwrapper">
                  <div className="listEntries">
                    <div className="numberBox">
                      <div className="number">01</div>
                      <div className="linebelow" />
                    </div>

                    <span>
                      Tell us what you want to build and your long and
                      short-term goals
                    </span>
                  </div>
                  <div className="listEntries">
                    <div className="numberBox">
                      <div className="number">02</div>
                      <div className="linebelow" />
                    </div>
                    <span>
                      We’ll help you select core features and pick right
                      technology stack
                    </span>
                  </div>
                  <div className="listEntries">
                    <div className="numberBox">
                      <div className="number">03</div>
                      <div className="linebelow" />
                    </div>
                    <span>
                      We’ll onboard a team to design, develop and deploy your
                      MVP
                    </span>
                  </div>
                  <div className="listEntries">
                    <div className="numberBox">
                      <div className="number">04</div>
                    </div>
                    <span>
                      Get post launch iteration and maintenance support.
                    </span>
                  </div>
                </div>
              )}
              {type != "elastic" ? (
                type == "cto" ? (
                  <div className="modalButton">start building your team</div>
                ) : (
                  <div className="modalButton">book a call</div>
                )
              ) : null}
            </div>
            <div className="rightBoxModal">
              {type == "elastic" ? (
                <>
                  <div className="bottomBoxer">
                    <span>Pricing</span>
                    <span>
                      <span className="priceTag">{`$199 `}</span>
                      per successful hire
                    </span>
                  </div>
                  <span className="elastictext">
                    The down-payment is fully refundable if you end up hiring
                    from somewhere else
                  </span>
                  <div className="modalButton flexStartButton">book a call</div>
                </>
              ) : type == "cto" ? (
                <>
                  <span className="elastictext colorblack">
                    Flat 15% management fee over the cost of the onboarded tech
                    team.
                  </span>
                  <span className="elastictext colorblack">
                    You can choose to pay monthly, weekly or hourly basis
                  </span>
                  <span className="ctogreen">Check out resource rate card</span>
                  <div className="modalButton flexStartButton">book a call</div>
                </>
              ) : (
                <>
                  <div className="topBoxer">
                    <div className="listwrapper">
                      <div className="listEntries">
                        <div className="number"></div>
                        <span>Get upfront guaranteed cost and time</span>
                      </div>
                      <div className="listEntries">
                        <div className="number"></div>
                        <span>
                          Start with 20% down payment and Pay remaining sum in
                          equal weekly installments
                        </span>
                      </div>
                      <div className="listEntries">
                        <div className="number"></div>
                        <span>
                          Cancel anytime if you don't get the desired traction
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bottomBoxer">
                    <span>Pricing</span>
                    <span>
                      We typically deliver most of our projects within 10 weeks
                      and at a cost of $7500
                    </span>
                  </div>
                  <div className="modalButton flexStartButton">
                    get your quote now
                  </div>
                </>
              )}
            </div>
          </ModalBody>
        </Modal>
        <div className="containerBig">
          {!isMobile ? <div className="greenHalf" /> : null}
          <Header />
          <div className="container1">
            <div className="first">
              <span className="headerTitle">{`Startups & Products `} </span>

              <span className="subtitle">
                Get access to continuous flow of highly rewarding and fully
                remote woLorem ipsum dolor sit amet, consApply a didunt ut
                labore et dolore magna aliqua. Ut enim ad mini m veniam, quis
                nostrud exercitation ullamco laboris nisi ut al
              </span>
            </div>
            <div className="second">
              <img src="https://i.imgur.com/l6e2w1X.png" className="tree" />
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="phoneimg">
            <img src="https://i.imgur.com/jU38Glw.png" />
          </div>

          <div className="rightbox">
            <img
              className="logoboxworth"
              src="https://i.imgur.com/rpyi5VN.png"
            />
            <span className="subtitletext">
              The Worth app is the best way to earn cash at your favorite
              restaurants. Just post a photo of your dining experience on
              Instagram and Worth will do the rest. Receive cash-back directly
              into your bank account, and even more cash when you refer a friend
              to do the same. Finally, Worth makes it possible to get paid for
              eating and sharing your experiences. We built the entire system
              comprising of the consumer and business side apps for iOS and
              Android, a web landing page, a scalable event-driven backend.
            </span>
            <span className="bolderheader">Technologies Used</span>
            <div className="nameimgbox">
              <img src="https://i.imgur.com/ALYj9Hp.png" />
              <div className="contactinfo">
                <span>@colin Krieg</span>
                <span>Arizona, USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container2 reverserow">
          <div className="phoneimg">
            <img src="https://i.imgur.com/jU38Glw.png" />
          </div>
          <div className="rightbox">
            <img
              className="logoboxworth"
              src="https://i.imgur.com/rpyi5VN.png"
            />
            <span className="subtitletext">
              The Worth app is the best way to earn cash at your favorite
              restaurants. Just post a photo of your dining experience on
              Instagram and Worth will do the rest. Receive cash-back directly
              into your bank account, and even more cash when you refer a friend
              to do the same. Finally, Worth makes it possible to get paid for
              eating and sharing your experiences. We built the entire system
              comprising of the consumer and business side apps for iOS and
              Android, a web landing page, a scalable event-driven backend.
            </span>
            <span className="bolderheader">Technologies Used</span>
            <div className="nameimgbox">
              <img src="https://i.imgur.com/ALYj9Hp.png" />
              <div className="contactinfo">
                <span>@colin Krieg</span>
                <span>Arizona, USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="phoneimg">
            <img src="https://i.imgur.com/jU38Glw.png" />
          </div>
          <div className="rightbox">
            <img
              className="logoboxworth"
              src="https://i.imgur.com/rpyi5VN.png"
            />
            <span className="subtitletext">
              The Worth app is the best way to earn cash at your favorite
              restaurants. Just post a photo of your dining experience on
              Instagram and Worth will do the rest. Receive cash-back directly
              into your bank account, and even more cash when you refer a friend
              to do the same. Finally, Worth makes it possible to get paid for
              eating and sharing your experiences. We built the entire system
              comprising of the consumer and business side apps for iOS and
              Android, a web landing page, a scalable event-driven backend.
            </span>
            <span className="bolderheader">Technologies Used</span>
            <div className="nameimgbox">
              <img src="https://i.imgur.com/ALYj9Hp.png" />
              <div className="contactinfo">
                <span>@colin Krieg</span>
                <span>Arizona, USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container2 reverserow">
          <div className="phoneimg">
            <img src="https://i.imgur.com/jU38Glw.png" />
          </div>
          <div className="rightbox">
            <img
              className="logoboxworth"
              src="https://i.imgur.com/rpyi5VN.png"
            />
            <span className="subtitletext">
              The Worth app is the best way to earn cash at your favorite
              restaurants. Just post a photo of your dining experience on
              Instagram and Worth will do the rest. Receive cash-back directly
              into your bank account, and even more cash when you refer a friend
              to do the same. Finally, Worth makes it possible to get paid for
              eating and sharing your experiences. We built the entire system
              comprising of the consumer and business side apps for iOS and
              Android, a web landing page, a scalable event-driven backend.
            </span>
            <span className="bolderheader">Technologies Used</span>
            <div className="nameimgbox">
              <img src="https://i.imgur.com/ALYj9Hp.png" />
              <div className="contactinfo">
                <span>@colin Krieg</span>
                <span>Arizona, USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container3">
          <div className="phoneimg">
            <img src="https://i.imgur.com/9j0XNMy.png" />
          </div>
          <div className="rightbox">
            <img
              className="logoboxworth"
              src="https://i.imgur.com/rpyi5VN.png"
            />
            <span className="subtitletext">
              The Worth app is the best way to earn cash at your favorite
              restaurants. Just post a photo of your dining experience on
              Instagram and Worth will do the rest. Receive cash-back directly
              into your bank account, and even more cash when you refer a friend
              to do the same. Finally, Worth makes it possible to get paid for
              eating and sharing your experiences. We built the entire system
              comprising of the consumer and business side apps for iOS and
              Android, a web landing page, a scalable event-driven backend.
            </span>
            <span className="bolderheader">Technologies Used</span>
            <div className="nameimgbox">
              <img src="https://i.imgur.com/ALYj9Hp.png" />
              <div className="contactinfo">
                <span>@colin Krieg</span>
                <span>Arizona, USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container3 reversevideorow marginbottombox">
          <div className="phoneimg">
            <img src="https://i.imgur.com/9j0XNMy.png" />
          </div>
          <div className="rightbox">
            <img
              className="logoboxworth"
              src="https://i.imgur.com/rpyi5VN.png"
            />
            <span className="subtitletext">
              The Worth app is the best way to earn cash at your favorite
              restaurants. Just post a photo of your dining experience on
              Instagram and Worth will do the rest. Receive cash-back directly
              into your bank account, and even more cash when you refer a friend
              to do the same. Finally, Worth makes it possible to get paid for
              eating and sharing your experiences. We built the entire system
              comprising of the consumer and business side apps for iOS and
              Android, a web landing page, a scalable event-driven backend.
            </span>
            <span className="bolderheader">Technologies Used</span>
            <div className="nameimgbox">
              <img src="https://i.imgur.com/ALYj9Hp.png" />
              <div className="contactinfo">
                <span>@colin Krieg</span>
                <span>Arizona, USA</span>
              </div>
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

export default connect(mapStateToProps, null)(Portfolio);
