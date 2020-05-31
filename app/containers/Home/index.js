import React from "react";
import { connect } from "react-redux";
import { DahsboardCss } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Modal, ModalHeader, ModalBody } from "shards-react";
import TextLoop from "react-text-loop";
import { browserHistory, Router } from "react-router";
import axios from "axios";
import Typist from "react-typist";

function preloadImages(srcs) {
  if (!preloadImages.cache) {
    preloadImages.cache = [];
  }
  var img;
  for (var i = 0; i < srcs.length; i++) {
    img = new Image();
    img.src = srcs[i];
    preloadImages.cache.push(img);
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showModal: false,
      typereset: "init",
      preview: [
        {
          name: "Worth",
          desc: "Monetization layer over Instagram",
          img: "https://i.imgur.com/JqX1hAw.png",
          top:
            "https://frontend-asset-files.s3.ap-south-1.amazonaws.com/Screenrecorder-2020-03-21-19-27-04-226_2.mp4",
        },
        {
          name: "Soochi",
          desc: "A collaborative multilingual list maker for WhatsApp",
          img: "https://i.imgur.com/B0Tl2rE.png",
          top: "",
          bottom: "",
        },
        {
          name: "Cinemadraft",
          desc:
            "Movie Fantasy League built on Tron with an inbuilt Investment Scheme.",
          img: "https://i.imgur.com/jYZl54C.png",
          top: "https://i.imgur.com/B4p4oZL.jpg",
          bottom: "https://i.imgur.com/pQOGqSF.jpg",
        },
        {
          name: "Stickerbook",
          desc:
            "Gamified surveys for company employees on sustainability practices.",
          img: "https://i.imgur.com/KvgijTZ.png",
          top: "https://i.imgur.com/Ek0ijQ4.jpg",
          bottom: "https://i.imgur.com/d2DHXgj.jpg",
        },
      ],
      selectedWork: 0,
      type: null,
    };
  }
  componentDidMount() {
    preloadImages([
      "https://i.imgur.com/B4p4oZL.jpg",
      "https://i.imgur.com/pQOGqSF.jpg",
      "https://i.imgur.com/Ek0ijQ4.jpg",
      "https://i.imgur.com/d2DHXgj.jpg",
    ]);
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
    const { loading, showModal, type, preview, selectedWork } = this.state;
    const { isMobile } = this.props;
    const DATA_TO_ITERATE = Array(10).fill(0);
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
                    book a call
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
                    <br />
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
          {!isMobile ? <div className="greenHalf" /> : null}
          <Header />
          <div className="container1">
            <div className="first">
              <span className="headerTitle">
                {`Nurturing Ideas to Products that `}{" "}
                <Typist
                  onTypingDone={() => {
                    this.setState({
                      typereset: Math.random() + "_",
                    });
                  }}
                  key={this.state.typereset}
                  className="spanboxchangingtext"
                  cursor={{ show: false }}
                >
                  <span>scale</span>
                  <Typist.Backspace count={5} delay={3000} />
                  <span>create value</span>
                  <Typist.Backspace count={12} delay={3000} />
                  <span>raise funds</span>
                  <Typist.Backspace count={11} delay={3000} />
                </Typist>
              </span>

              <span className="subtitle">
                At NurtureLabs, we bring together remote tech teams, advanced
                product management skills and best in-class technologies to
                bring your ideas to life and deliver high impact results.
              </span>
              <div className="btnHome">
                <a
                  target="blank"
                  href="https://landbot.io/u/H-451190-1JDSWHZ1DHHKNJ3J/index.html"
                  className="btn1"
                >
                  Chat with us
                </a>
                <a
                  target="blank"
                  href="https://calendly.com/nurturelabs/meetingrequest"
                  className="btn1"
                >
                  Book a discovery call
                </a>
              </div>
            </div>

            <div className="second">
              <img src="https://i.imgur.com/q1HaCXR.png" className="bubble" />
              <img src="https://i.imgur.com/TLEB80T.png" className="tree" />
            </div>
          </div>
        </div>
        <div className="container2">
          <span className="headingText">
            Tackle all your technology challenges and technical bottlenecks with
            our smarter alternative solutions
          </span>
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
                ranging from fractional, full-time to an independent contractor.
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
                Onboard us as your technical co-founder and we'll help you align
                your technology with your business strategy without the risk &
                cost of hiring and managing an in-house tech team
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
        <div className="container3">
          <span className="headingText">
            Work with pre-vetted remote tech talent skilled in new technologies and tailor matched to your needs
          </span>
          <div className="teamSize">
            <div className="team">
              <div className="box firstGreenFload"></div>
              <span className="teamHeading">30+</span>
              <span className="teamSubtitle">UI/UX designers</span>
            </div>
            <div className="team">
              <div className="box secondGreenFload"></div>
              <span className="teamHeading">70+</span>
              <span className="teamSubtitle">Software Engineers</span>
            </div>
            <div className="team">
              <div className="box thirdGreenFload"></div>
              <span className="teamHeading">25+</span>
              <span className="teamSubtitle">Data Scientists</span>
            </div>
            <div className="team">
              <div className="box fourthGreenFload"></div>
              <span className="teamHeading">15+</span>
              <span className="teamSubtitle">Product Managers</span>
            </div>
          </div>
        </div>
        <div className="container4">
          {/* {!isMobile ? (
            <span className="headingText">
              Work With Pre-Vetted Remote Tech Talent Skilled In New
              Technologies And Tailor Matched To Your Needs
            </span>
          ) : null} */}
          <div className="containerBox">
            <div className="firstBox">
              <span className="firstText">Skill Set</span>
              <div className="skillSet">
                <div className="skillSingle">
                  <img
                    src="https://i.imgur.com/bkwXwBl.png"
                    className="skillImg"
                  />
                  <span className="skillHeader">Artificial intelligence</span>
                  <span className="skillSub">Machine Learning</span>
                  <span className="skillSub">Natural Language Processing</span>
                  <span className="skillSub">Deep Learning</span>
                </div>
                <div className="skillSingle">
                  <img
                    src="https://i.imgur.com/n6aAZn1.png"
                    className="skillImg"
                  />
                  <span className="skillHeader">Web/Mobile Apps</span>
                  <span className="skillSub">Front-end Development</span>
                  <span className="skillSub">Android/iOS Development</span>
                  <span className="skillSub">Quality Assurance</span>
                </div>
                <div className="skillSingle">
                  <img
                    src="https://i.imgur.com/zSlHS2G.png"
                    className="skillImg"
                  />
                  <span className="skillHeader">Devops and Architecture</span>
                  <span className="skillSub">Database Architecture</span>
                  <span className="skillSub">System Design</span>
                  <span className="skillSub">DevOps Engineering</span>
                </div>
                <div className="skillSingle">
                  <img
                    src="https://i.imgur.com/3NxfmYc.png"
                    className="skillImg"
                  />
                  <span className="skillHeader">Product and Design</span>
                  <span className="skillSub">Product management</span>
                  <span className="skillSub">Prototyping</span>
                  <span className="skillSub">UI/UX designing</span>
                </div>
              </div>
            </div>
            <div className="secondBox">
              <span className="firstText">Technologies</span>
              <img
                src="https://i.imgur.com/ozoOYJA.png"
                className="sideImage"
              />
            </div>
          </div>
        </div>
        <div className="container5">
          <img src="https://i.imgur.com/yVSnCeT.png" className="rightimg" />
          <img src="https://i.imgur.com/rtY4dh1.png" className="leftimg" />
          <div className="rightbottombox">
            <div className="firstrbbox">
              <span className="boxheading">5M+</span>
              <span className="boxsubheading">Lines of Code Deployed</span>
            </div>
            <div className="secondrbbox">
              <span className="boxheading">250+</span>
              <span className="boxsubheading">Reusable Features Built</span>
            </div>
          </div>
          <span className="headingCont5">
            Directly use features from our reusable feature library and focus
            only on what make your idea unique.
          </span>
          {/* <span className="subheadCont5">
            Directly pick and plug components from our pre-built reusable
            feature library to launch your product faster and at a fraction of
            the cost.
          </span> */}
          <div className="bottomBox">
            <div className="firstBotbox">
              <span>Marketplaces</span>
              <span>Membership Sites</span>
              <span>Discussion Forums</span>
              <span>User Onboarding</span>
              <span>In-app Notifications</span>
              <span>In-app Chat</span>
            </div>

            <div className="secondBotbox" />
          </div>
        </div>
        <div className="container6">
          <span className="container6Heading">Our Work</span>
          <div className="bottomBoxer">
            <div className="firstBox">
              <div
                onClick={() => {
                  this.setState({
                    selectedWork: 0,
                  });
                }}
                className={
                  this.state.selectedWork == 0
                    ? "childbox selectedBox"
                    : "childbox"
                }
              >
                <div className="firstChild">
                  <img src="https://i.imgur.com/BJC3YVl.png" />
                </div>
                <div className="secondChild">
                  <span className="headline">Worth</span>
                  <span className="subtitleline">
                    Monetization layer over Instagram
                  </span>
                  <div className="technologyBox">
                    <img src="https://i.imgur.com/JqX1hAw.png" />
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  this.setState({
                    selectedWork: 1,
                  });
                }}
                className={
                  this.state.selectedWork == 1
                    ? "childbox selectedBox"
                    : "childbox"
                }
              >
                <div className="firstChild">
                  <img src="https://i.imgur.com/elEy6uT.png" />
                </div>
                <div className="secondChild">
                  <span className="headline">Soochi</span>
                  <span className="subtitleline">
                    A collaborative multilingual list maker for WhatsApp
                  </span>
                  <div className="technologyBox">
                    <img src="https://i.imgur.com/B0Tl2rE.png" />
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  this.setState({
                    selectedWork: 2,
                  });
                }}
                className={
                  this.state.selectedWork == 2
                    ? "childbox selectedBox"
                    : "childbox"
                }
              >
                <div className="firstChild">
                  <img src="https://i.imgur.com/xpOkMqp.png" />
                </div>
                <div className="secondChild">
                  <span className="headline">Cinemadraft</span>
                  <span className="subtitleline">
                    Movie Fantasy League built on Tron with an inbuilt
                    Investment Scheme
                  </span>
                  <div className="technologyBox">
                    <img src="https://i.imgur.com/jYZl54C.png" />
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  this.setState({
                    selectedWork: 3,
                  });
                }}
                className={
                  this.state.selectedWork == 3
                    ? "childbox selectedBox"
                    : "childbox"
                }
              >
                <div className="firstChild">
                  <img src="https://i.imgur.com/dAzZkXF.png" />
                </div>
                <div className="secondChild">
                  <span className="headline">Stickerbook</span>
                  <span className="subtitleline">
                    Gamified surveys for company employees on sustainability
                    practices
                  </span>
                  <div className="technologyBox">
                    <img src="https://i.imgur.com/KvgijTZ.png" />
                  </div>
                </div>
              </div>
              {!isMobile ? (
                <div
                  onClick={() => {
                    browserHistory.push({
                      pathname: "portfolio",
                    });
                  }}
                  className="btn1"
                >
                  Checkout our Portfolio
                </div>
              ) : null}
            </div>

            <div className="secondBox">
              {isMobile ? (
                <div className="secondChild">
                  <span className="headline">{preview[selectedWork].name}</span>
                  <span className="subtitleline">
                    {preview[selectedWork].desc}
                  </span>
                  <div className="technologyBox">
                    <img src={preview[selectedWork].img} />
                  </div>
                </div>
              ) : null}

              <div
                className="firstVideo"
                style={{ display: selectedWork == 1 ? "flex" : "none" }}
              >
                <video
                  loop
                  autoPlay
                  muted
                  src="https://frontend-asset-files.s3.ap-south-1.amazonaws.com/Screenrecorder-2020-03-21-19-27-04-226_2.mp4"
                />
                <img src="https://i.imgur.com/6TOkY1F.png" />
              </div>
              <div
                className="firstVideoImage"
                style={{ display: selectedWork == 0 ? "flex" : "none" }}
              >
                <video
                  loop
                  autoPlay
                  muted
                  src="https://frontend-asset-files.s3.ap-south-1.amazonaws.com/videoplayback.mp4"
                />
                <img src="https://i.imgur.com/PRyUa7F.png" />
              </div>
              <div
                className="firstimage"
                style={{
                  display:
                    selectedWork != 0 && selectedWork != 1 ? "flex" : "none",
                }}
              >
                <img
                  className="floatingImg"
                  src={preview[selectedWork].top || ""}
                />
                <img src="https://i.imgur.com/PRyUa7F.png" />
              </div>
              <div
                className="secondimage"
                style={{
                  display:
                    selectedWork != 0 && selectedWork != 1 ? "flex" : "none",
                }}
              >
                <img
                  className="floatingImg"
                  src={preview[selectedWork].bottom || ""}
                />
                <img src="https://i.imgur.com/PRyUa7F.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="container7">
          <span className="container7Heading">
            What Our Client Says About Us
          </span>
          <div className="contentBox">
            <div className="prevButton" style={{ display: "none" }}>
              <img src="https://i.imgur.com/kD3vPld.png" />
            </div>
            <div className="sliderContent">
              <img className="sideimg" src="https://i.imgur.com/4rq0vAr.png" />
              <div className="contentText">
                <img
                  className="floating"
                  src="https://i.imgur.com/IEsOLEN.png"
                />
                <span>
                  It has been a great experience working with NurtureLabs so
                  far. They are extremely efficient and adhere to
                  deadlines. They have contributed to product ideas and are
                  extremely flexible with regard to time commitment. We highly
                  recommend this service for early stage companies that are
                  looking to scale their product development.
                </span>
                <img src="https://i.imgur.com/BJC3YVl.png" />
              </div>
            </div>
            <div className="nextButton" style={{ display: "none" }}>
              <img src="https://i.imgur.com/V6Ycu1z.png" />
            </div>
          </div>
        </div>
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
                if (this.state.name && this.state.email && this.state.message) {
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
              If you want to get on a call with us
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

export default connect(mapStateToProps, null)(Home);
