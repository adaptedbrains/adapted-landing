import React from "react";
import { connect } from "react-redux";
import { DahsboardCss } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Modal, ModalHeader, ModalBody } from "shards-react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showModal: true,
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

    this.setState({ showModal: false, directOtp: false });
  }

  render() {
    const { loading, showModal } = this.state;
    const { isMobile } = this.props;
    if (loading) {
      return null;
    }
    return (
      <DahsboardCss>
        <Modal
          backdropClassName="lc-modal-backdrop"
          size="lg"
          open={showModal}
          toggle={this.closeModal}
        >
          <ModalHeader className="headerBox">
            <span>Rapid MVP Development</span>
            <div className="headerSubeheader">
              <span>How it work</span>
              <span>Pricing</span>
            </div>
            <img
              onClick={() => {
                this.setState({
                  showModal: false,
                });
              }}
              src="https://i.imgur.com/9xfDfQO.png"
            />
          </ModalHeader>
          <ModalBody className="modalBodyHome">
            <div className="leftBoxModal">
              <div className="listEntries">
                <div className="number">01</div>
                <span>
                  Tell us what you want to build and your long and short-term
                  goals
                </span>
              </div>
              <div className="listEntries">
                <div className="number">01</div>
                <span>
                  Tell us what you want to build and your long and short-term
                  goals
                </span>
              </div>
              <div className="listEntries">
                <div className="number">01</div>
                <span>
                  Tell us what you want to build and your long and short-term
                  goals
                </span>
              </div>
              <div className="listEntries">
                <div className="number">01</div>
                <span>
                  Tell us what you want to build and your long and short-term
                  goals
                </span>
              </div>
              <div className="listEntries">
                <div className="number">01</div>
                <span>
                  Tell us what you want to build and your long and short-term
                  goals
                </span>
              </div>
              <div className="modalButton">book a call</div>
            </div>
            <div className="rightBoxModal">
              <div className="topBoxer">
                <div className="listEntries">
                  <div className="number"></div>
                  <span>
                    Tell us what you want to build and your long and short-term
                    goals
                  </span>
                </div>
                <div className="listEntries">
                  <div className="number"></div>
                  <span>
                    Tell us what you want to build and your long and short-term
                    goals
                  </span>
                </div>
                <div className="listEntries">
                  <div className="number"></div>
                  <span>
                    Tell us what you want to build and your long and short-term
                    goals
                  </span>
                </div>
              </div>
              <div className="bottomBoxer">
                <span>Pricing</span>
                <span>
                  We typically deliver most of our projects within 10 weeks and
                  at a cost of $7500.
                </span>
              </div>
              <div className="modalButton">get your quote now</div>
            </div>
          </ModalBody>
        </Modal>
        <div className="containerBig">
          {!isMobile ? <div className="greenHalf" /> : null}
          <Header />
          <div className="container1">
            <div className="first">
              <span className="headerTitle">
                Nurturing Ideas to Products that Scale
              </span>
              <span className="subtitle">
                At NurtureLabs, we bring together remote tech teams, advanced
                product management skills and best in-class technologies to
                bring your ideas to life and deliver high impact results.
              </span>
              <div className="btnHome">
                <div className="btn1">chat with nurture bot</div>
                <div className="btn1">book a discovery call</div>
              </div>
            </div>

            <div className="second">
              <img src="https://i.imgur.com/q1HaCXR.png" className="bubble" />
              <img src="https://i.imgur.com/cwdZcLQ.png" className="tree" />
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
                Fill gaps in your tech team by tapping into our global network
                of top-performing remote talent, available for roles ranging
                from fractional, full-time to an independent contractor.
              </span>
              <span className="knowMorespan">KNOW MORE</span>
            </div>
            <div className="feature">
              <img
                src="https://i.imgur.com/xFJDILF.png"
                className="featureimg"
              ></img>
              <span className="featureHeading">CTO as a Service</span>
              <span className="featureSubHeading">
                We work with founders and stakeholder m build and manage a team
                of dedicated remote software engineers and designers to design,
                build, and run your product.
              </span>
              <span className="knowMorespan">KNOW MORE</span>
            </div>
            <div className="feature">
              <img
                src="https://i.imgur.com/6PsgV1c.png"
                className="featureimg"
              ></img>
              <span className="featureHeading">Rapid MVP Development</span>
              <span className="featureSubHeading">
                We've helped early-stage founders around the world with ideas
                across industries to systematically test and launch the first
                version of their product and raise first round of funding.{" "}
              </span>
              <span className="knowMorespan">KNOW MORE</span>
            </div>
          </div>
        </div>
        <div className="container3">
          <span className="headingText">
            Work With Pre-Vetted Remote Tech Talent Skilled In New Technologies
            And Tailor Matched To Your Needs
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
          {!isMobile ? (
            <span className="headingText">
              Work With Pre-Vetted Remote Tech Talent Skilled In New
              Technologies And Tailor Matched To Your Needs
            </span>
          ) : null}
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
                  <span className="skillSub">Machine Learning</span>
                  <span className="skillSub">Machine Learning</span>
                </div>
                <div className="skillSingle">
                  <img
                    src="https://i.imgur.com/n6aAZn1.png"
                    className="skillImg"
                  />
                  <span className="skillHeader">Web/Mobile Apps</span>
                  <span className="skillSub">Front end development</span>
                  <span className="skillSub">Backend development</span>
                  <span className="skillSub">Quality Assurance</span>
                </div>
                <div className="skillSingle">
                  <img
                    src="https://i.imgur.com/zSlHS2G.png"
                    className="skillImg"
                  />
                  <span className="skillHeader">Devops and Architecture</span>
                  <span className="skillSub">Database Architecture</span>
                  <span className="skillSub">System design</span>
                  <span className="skillSub">Devops engineering</span>
                </div>
                <div className="skillSingle">
                  <img
                    src="https://i.imgur.com/3NxfmYc.png"
                    className="skillImg"
                  />
                  <span className="skillHeader">Product and Design</span>
                  <span className="skillSub">Product management</span>
                  <span className="skillSub">Product analytics</span>
                  <span className="skillSub">UI/UX designing</span>
                </div>
              </div>
            </div>
            <div className="secondBox">
              <span className="firstText">Technologies</span>
              <img
                src="https://i.imgur.com/c6Tsz5v.png"
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
              <span className="boxheading">25M+</span>
              <span className="boxsubheading">Reusable Features Built</span>
            </div>
          </div>
          <span className="headingCont5">
            Save your time and money by only focusing on the things that make
            your idea unique
          </span>
          <span className="subheadCont5">
            Directly pick and plug components from our pre-built reusable
            feature library to launch your product faster and at a fraction of
            the cost.
          </span>
          <div className="bottomBox">
            <div className="firstBotbox">
              <span>Marketplaces</span>
              <span>Membership sites</span>
              <span>E-commerce</span>
              <span>Login</span>
              <span>Email Verification</span>
              <span>In-app chat</span>
            </div>

            <div className="secondBotbox" />
          </div>
        </div>
        <div className="container6">
          <span className="container6Heading">Our Work</span>
          <div className="bottomBoxer">
            <div className="firstBox">
              <div className="childbox">
                <div className="firstChild">
                  <img src="https://i.imgur.com/zODrXFt.png" />
                </div>
                <div className="secondChild">
                  <span className="headline">Project Name</span>
                  <span className="subtitleline">
                    Digital Media, Los Angeles, California, USA
                  </span>
                  <div className="technologyBox">
                    <img src="https://i.imgur.com/Tz8RR4F.png" />
                    <img src="https://i.imgur.com/OP0Ek0B.png" />
                    <img src="https://i.imgur.com/9SgQBl0.png" />
                    <img src="https://i.imgur.com/28JDguE.png" />
                  </div>
                </div>
              </div>
              <div className="childbox selectedBox">
                <div className="firstChild">
                  <img src="https://i.imgur.com/zODrXFt.png" />
                </div>
                <div className="secondChild">
                  <span className="headline">Project Name</span>
                  <span className="subtitleline">
                    Digital Media, Los Angeles, California, USA
                  </span>
                  <div className="technologyBox">
                    <img src="https://i.imgur.com/Tz8RR4F.png" />
                    <img src="https://i.imgur.com/OP0Ek0B.png" />
                    <img src="https://i.imgur.com/9SgQBl0.png" />
                    <img src="https://i.imgur.com/28JDguE.png" />
                  </div>
                </div>
              </div>
              <div className="childbox">
                <div className="firstChild">
                  <img src="https://i.imgur.com/zODrXFt.png" />
                </div>
                <div className="secondChild">
                  <span className="headline">Project Name</span>
                  <span className="subtitleline">
                    Digital Media, Los Angeles, California, USA
                  </span>
                  <div className="technologyBox">
                    <img src="https://i.imgur.com/Tz8RR4F.png" />
                    <img src="https://i.imgur.com/OP0Ek0B.png" />
                    <img src="https://i.imgur.com/9SgQBl0.png" />
                    <img src="https://i.imgur.com/28JDguE.png" />
                  </div>
                </div>
              </div>
              <div className="childbox">
                <div className="firstChild">
                  <img src="https://i.imgur.com/zODrXFt.png" />
                </div>
                <div className="secondChild">
                  <span className="headline">Project Name</span>
                  <span className="subtitleline">
                    Digital Media, Los Angeles, California, USA
                  </span>
                  <div className="technologyBox">
                    <img src="https://i.imgur.com/Tz8RR4F.png" />
                    <img src="https://i.imgur.com/OP0Ek0B.png" />
                    <img src="https://i.imgur.com/9SgQBl0.png" />
                    <img src="https://i.imgur.com/28JDguE.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="secondBox">
              {isMobile ? (
                <div className="secondChild">
                  <span className="headline">Project Name</span>
                  <span className="subtitleline">
                    Digital Media, Los Angeles, California, USA
                  </span>
                  <div className="technologyBox">
                    <img src="https://i.imgur.com/Tz8RR4F.png" />
                    <img src="https://i.imgur.com/OP0Ek0B.png" />
                    <img src="https://i.imgur.com/9SgQBl0.png" />
                    <img src="https://i.imgur.com/28JDguE.png" />
                  </div>
                </div>
              ) : null}
              <div className="firstimage">
                <img src="https://i.imgur.com/xdSxfy3.png" />
              </div>
              <div className="secondimage">
                <img src="https://i.imgur.com/xdSxfy3.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="container7">
          <span className="container7Heading">
            What Our Client Says About Us
          </span>
          <div className="contentBox">
            <div className="prevButton">
              <img src="https://i.imgur.com/kD3vPld.png" />
            </div>
            <div className="sliderContent">
              <img className="sideimg" src="https://i.imgur.com/NfmquoL.png" />
              <div className="contentText">
                <img
                  className="floating"
                  src="https://i.imgur.com/IEsOLEN.png"
                />
                <span>
                  s excepturi sint occaecati cupiditate non provident, similique
                  sunt in culpa qui officia deserunt mollitia animi, id est
                  laborum et dolorum fuga. Et harum quidem rerum facilis est et
                  expedita distinctio. Nam libero tempore, cum soluta nobis est
                  eligendi optio cumque nihil impedit quo minus id quod maxime
                  placeat facere possimus, omnis voluptas assumenda est, omnis
                  dolor repellendus. Te ia deserunt mollitia animi, id est
                  laborum et dolorum fuga. Et harum qu . Nam libero tempore, cum
                  soluta nobis est eligendi optio cumque nihil impedit quo minus
                  id quod ma
                </span>
                <img src="https://i.imgur.com/1rmNfH4.png" />
              </div>
            </div>
            <div className="nextButton">
              <img src="https://i.imgur.com/V6Ycu1z.png" />
            </div>
          </div>
        </div>
        <div className="container8">
          <div className="formBox">
            <div className="inputBox">
              <span>Name</span>
              <input placeholder="" />
            </div>
            <div className="inputBox">
              <span>Email</span>
              <input placeholder="" />
            </div>
            <div className="inputBox">
              <span>Name</span>
              <textarea placeholder="" />
            </div>
            <div className="bottomButton">SEND US MESSAGE</div>
          </div>
          <div className="supportBox">
            <span className="headercontainer8">
              If you want to get on a call with us
            </span>
            <div className="bookacall">BOOK A CALL</div>
            <div className="dottedLine">
              {`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  `}
            </div>
            <div className="contactUsStrip">
              <img src="https://i.imgur.com/bm0rg5G.png" />
              <span>support@doyleandsmith.com</span>
            </div>
            <div className="contactUsStrip">
              <img src="https://i.imgur.com/IM81cXW.png" />
              <span>+91 79800 23053</span>
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

export default connect(mapStateToProps, null)(Home);
