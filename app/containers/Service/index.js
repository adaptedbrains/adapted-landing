import React from "react";
import { connect } from "react-redux";
import { DahsboardCss } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Modal, ModalHeader, ModalBody } from "shards-react";
import TextLoop from "react-text-loop";
import { browserHistory, Router } from "react-router";

class Service extends React.Component {
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
                      <div className="number">1</div>
                      <div className="linebelow" />
                    </div>

                    <span>
                      Tell us about your tech stack, desired skill set, and the
                      role available
                    </span>
                  </div>
                  <div className="listEntries">
                    <div className="numberBox">
                      <div className="number">2</div>
                      <div className="linebelow" />
                    </div>
                    <span>
                      Pay refundable down-payment to launch the talent search
                      process.
                    </span>
                  </div>
                  <div className="listEntries">
                    <div className="numberBox">
                      <div className="number">3</div>
                      <div className="linebelow" />
                    </div>
                    <span>
                      Get a list of top 3 matched candidates directly in your
                      inbox
                    </span>
                  </div>
                  <div className="listEntries">
                    <div className="numberBox">
                      <div className="number">4</div>
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
                      <div className="number">1</div>
                      <div className="linebelow" />
                    </div>

                    <span>
                      Tell us about your requirements, technical challenges, and
                      business goals
                    </span>
                  </div>
                  <div className="listEntries">
                    <div className="numberBox">
                      <div className="number">2</div>
                      <div className="linebelow" />
                    </div>
                    <span>
                      We’ll spin-off a custom remote team of fully dedicated
                      resources (40+hrs/week)
                    </span>
                  </div>
                  <div className="listEntries">
                    <div className="numberBox">
                      <div className="number">3</div>
                    </div>
                    <span>Scale your tech team up or down on the go .</span>
                  </div>
                </div>
              ) : (
                    <div className="listwrapper">
                      <div className="listEntries">
                        <div className="numberBox">
                          <div className="number">1</div>
                          <div className="linebelow" />
                        </div>

                        <span>
                          Tell us what you want to build and your long and
                          short-term goals
                    </span>
                      </div>
                      <div className="listEntries">
                        <div className="numberBox">
                          <div className="number">2</div>
                          <div className="linebelow" />
                        </div>
                        <span>
                          We’ll help you select core features and pick right
                          technology stack
                    </span>
                      </div>
                      <div className="listEntries">
                        <div className="numberBox">
                          <div className="number">3</div>
                          <div className="linebelow" />
                        </div>
                        <span>
                          We’ll onboard a team to design, develop and deploy your
                          MVP
                    </span>
                      </div>
                      <div className="listEntries">
                        <div className="numberBox">
                          <div className="number">4</div>
                        </div>
                        <span>
                          Get post launch iteration and maintenance support.
                    </span>
                      </div>
                    </div>
                  )}
              {type != "elastic" ? (
                type == "cto" ? null : (
                  <a
                    target="blank"
                    href="https://calendly.com/nurturelabs/meetingrequest"
                    className="modalButton"
                  >
                    Book a call
                  </a>
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
                  <a
                    target="blank"
                    href="https://calendly.com/nurturelabs/meetingrequest"
                    className="modalButton flexStartButton"
                  >
                    book a call
                  </a>
                </>
              ) : type == "cto" ? (
                <>
                  <div>
                    <span className="elastictext">
                      Flat 15% management fee over the cost of the onboarded tech
                      team.
                  </span>
                    <span className="elastictext">
                      You can choose to pay monthly, weekly or hourly basis
                  </span>
                  </div>
                  {/* <span className="ctogreen">Check out resource rate card</span> */}
                  <a
                    target="blank"
                    href="https://calendly.com/nurturelabs/meetingrequest"
                    className="modalButton flexStartButton"
                  >
                    book a call
                  </a>
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
                        <span>
                          We typically deliver most of our projects within 10 weeks
                          and at a cost of $7500
                    </span>
                      </div>
                      <a
                        href="https://nurturelabs.typeform.com/to/E885wP"
                        target="blank"
                        className="modalButton flexStartButton"
                      >
                        get your quote now
                  </a>
                    </>
                  )}
            </div>
          </ModalBody>
        </Modal>
        <div className="containerBig">
          <Header />

          <div className="container2">
            <div className="features">
              <div className="feature">
                <img
                  src="https://i.imgur.com/LGlglZW.png"
                  className="featureimg"
                ></img>
                <span className="featureHeading">Elastic Resourcing</span>
                <span className="featureSubHeading">
                  Fill gaps within your tech team by tapping into our global
                  network of top-performing remote talent, available for roles
                  ranging from fractional, full-time to an independent
                  contractor.
                </span>
                <span
                  onClick={() => {
                    this.setState({
                      showModal: true,
                      type: "elastic",
                    });
                  }}
                  className="knowMorespan"
                >
                  HOW IT WORKS
                </span>
              </div>
              <div className="feature">
                <img
                  src="https://i.imgur.com/xFJDILF.png"
                  className="featureimg"
                ></img>
                <span className="featureHeading">CTO as a Service</span>
                <span className="featureSubHeading">
                  Onboard us as your technical co-founder and we'll help you
                  align your technology with your business strategy without the
                  risk & cost of hiring and managing an in-house tech team
                </span>
                <span
                  onClick={() => {
                    this.setState({
                      showModal: true,
                      type: "cto",
                    });
                  }}
                  className="knowMorespan"
                >
                  HOW IT WORKS
                </span>
              </div>
              <div className="feature">
                <img
                  src="https://i.imgur.com/6PsgV1c.png"
                  className="featureimg"
                ></img>
                <span className="featureHeading">Rapid MVP Development</span>
                <span className="featureSubHeading">
                  We've helped early stage founders around the world to
                  systematically develop, test and launch the first functional
                  version of their product at bootstrap friendly pricing plan.
                </span>
                <span
                  onClick={() => {
                    this.setState({
                      showModal: true,
                      type: "mvp",
                    });
                  }}
                  className="knowMorespan"
                >
                  HOW IT WORKS
                </span>
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

export default connect(mapStateToProps, null)(Service);
