import React from "react";
import { connect } from "react-redux";
import { DahsboardCss } from "./style";

class JoinNetwork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showfaq: [false, false, false, false],
    };
  }
  componentDidMount() {
    this.setState({
      loading: false,
    });
  }
  render() {
    const { loading, showfaq } = this.state;
    if (loading) {
      return null;
    }
    return (
      <DahsboardCss>
        <div className="containerBig">
          <div className="greenHalf" />
          <div className="header">
            <div className="first">
              <img src="https://i.imgur.com/oFgkGUI.png" />
            </div>
            <div className="second">
              <div className="menuItem">Partner with us</div>
              <div className="menuItem">Join Network</div>
              <div className="menuItem">Portfolio</div>
              <div className="menuItem roundButton">Contact us</div>
            </div>
          </div>
          <div className="container1">
            <div className="first">
              <span className="headerTitle">
                Nurturing Ideas to Products that Scale
              </span>
            </div>
            <div className="second">
              <span className="subtitle">
                At NurtureLabs, we bring together remote tech teams, advanced
                product management skills and best in-class technologies to
                bring your ideas to life and deliver high impact results.
              </span>
              <div className="btnHome">
                <div className="btn1">chat with nurture bot</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <span className="headinContainer2">
            How's our platform different from other job platforms and freelancer
            marketplaces
          </span>
          <div className="container2Box">
            <div className="childbox">
              <img src="https://i.imgur.com/D0njnKC.png" />
              <span className="childboxheader">Flexible Roles</span>
              <span className="childboxsubhead">
                Opportunities ranging from contract work to fractional roles to
                full-time
              </span>
            </div>
            <div className="childbox">
              <img src="https://i.imgur.com/Gn5ovT5.png" />
              <span className="childboxheader">Fully Verified</span>
              <span className="childboxsubhead">
                No spams, hidden information or
              </span>
            </div>
            <div className="childbox">
              <img src="https://i.imgur.com/R6Viyga.png" />
              <span className="childboxheader">100% Remote</span>
              <span className="childboxsubhead">
                We make sure all opportunities that land in your inbox are
                fully-remote
              </span>
            </div>
          </div>
          <span className="headinContainer2">Find your tech stack</span>
          <div className="techBox">
            <div className="singleTechbox">Product Designer</div>
            <div className="singleTechbox">Devops Engineer</div>
            <div className="singleTechbox">Product Manager</div>
            <div className="singleTechbox">Software Engineer</div>
            <div className="singleTechbox">QA Engineer</div>
            <div className="singleTechbox">System Architect</div>
            <div className="singleTechbox">Data Scientist</div>
            <div className="singleTechbox">Full-stack developer</div>
            <div className="singleTechbox">App Developer</div>
          </div>
        </div>
        <div className="container3">
          <img
            src="https://i.imgur.com/fA5yU7Q.png"
            className="rightImgFloat"
          />
          <img src="https://i.imgur.com/QSK675H.png" className="leftImgFloat" />
          <span className="headinContainer2">How It Works</span>
          <div className="applyBox">
            <div className="textDataBox">
              <span className="headerSpan">1. Apply</span>
              <span className="subtitleSpan">
                Fill out our application form with your skill set, work
                experience and preferences
              </span>
            </div>
            <div className="imageDiv">
              <img src="https://i.imgur.com/Nw3nzER.png" />
            </div>
          </div>
          <div className="applyBox reverseFlex">
            <div className="textDataBox">
              <span className="headerSpan">2. Profile Review</span>
              <span className="subtitleSpan">
                Our recruiter will review your profile and past experience to
                assess your suitability
              </span>
            </div>
            <div className="imageDiv reverseImg">
              <img src="https://i.imgur.com/yIGKJkU.png" />
            </div>
          </div>
          <div className="applyBox">
            <div className="textDataBox">
              <span className="headerSpan">3. Test Assignment</span>
              <span className="subtitleSpan">
                Once profile is reviewed we will send you a tailor made
                assignment to test your skills
              </span>
            </div>
            <div className="imageDiv">
              <img src="https://i.imgur.com/T1M28Vm.png" />
            </div>
          </div>
          <div className="applyBox reverseFlex">
            <div className="textDataBox">
              <span className="headerSpan">4. 1:1 Interview</span>
              <span className="subtitleSpan">
                We will assess your problem solving skills, motivations and
                ability to work in remote roles
              </span>
            </div>
            <div className="imageDiv reverseImg">
              <img src="https://i.imgur.com/6mlkq3s.png" />
            </div>
          </div>
          <div className="applyBox">
            <div className="textDataBox">
              <span className="headerSpan">5. Join</span>
              <span className="subtitleSpan">
                If you are the right match we will send you an invitation to
                join our talent network
              </span>
            </div>
            <div className="imageDiv">
              <img src="https://i.imgur.com/uVPh3oA.png" />
            </div>
          </div>
        </div>
        <div className="container4">
          <span className="headinContainer2">
            We broadcast all job opportunities on all channels
          </span>
          <div className="socialPlatforms">
            <div className="box">
              <img src="https://i.imgur.com/zM1qRdD.png" />
              <span className="headerText">Whatsapp</span>
            </div>
            <div className="box">
              <img src="https://i.imgur.com/bCuHt3f.png" />
              <span className="headerText">Telegram</span>
            </div>
            <div className="box">
              <img src="https://i.imgur.com/Cc4iwaE.png" />
              <span className="headerText">Slack</span>
            </div>
            <div className="box">
              <img src="https://i.imgur.com/tYpTgbT.png" />
              <span className="headerText">Gmail Group</span>
            </div>
          </div>
          <span className="headinContainer2">Genral FAQ</span>
          <div className="faq">
            <div className="faqsingle">
              <img
                onClick={() => {
                  const showFaqDup = [...showfaq];
                  showFaqDup[0] = !showfaq[0];
                  this.setState({
                    showfaq: showFaqDup,
                  });
                }}
                src="https://i.imgur.com/irie2Wg.png"
              />
              <div className="spanBox">
                <span className="headerspanBox">
                  What are the requirements to join the network?
                </span>
                <span
                  className={
                    showfaq[0] ? "contentBox showContent" : "contentBox"
                  }
                >
                  em ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim venia m, quis nostrud exercitation ullamco
                  laboris n isi ut aliquip ex ea commodo consequ
                </span>
              </div>
            </div>
            <div className="faqsingle">
              <img
                onClick={() => {
                  const showFaqDup = [...showfaq];
                  showFaqDup[1] = !showfaq[1];
                  this.setState({
                    showfaq: showFaqDup,
                  });
                }}
                src="https://i.imgur.com/irie2Wg.png"
              />
              <div className="spanBox">
                <span className="headerspanBox">
                  What does the test assignment includes?
                </span>
                <span
                  className={
                    showfaq[1] ? "contentBox showContent" : "contentBox"
                  }
                >
                  em ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim venia m, quis nostrud exercitation ullamco
                  laboris n isi ut aliquip ex ea commodo consequ
                </span>
              </div>
            </div>
            <div className="faqsingle">
              <img
                onClick={() => {
                  const showFaqDup = [...showfaq];
                  showFaqDup[2] = !showfaq[2];
                  this.setState({
                    showfaq: showFaqDup,
                  });
                }}
                src="https://i.imgur.com/irie2Wg.png"
              />
              <div className="spanBox">
                <span className="headerspanBox">
                  How much time does it take to get accepted to the network?
                </span>
                <span
                  className={
                    showfaq[2] ? "contentBox showContent" : "contentBox"
                  }
                >
                  em ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim venia m, quis nostrud exercitation ullamco
                  laboris n isi ut aliquip ex ea commodo consequ
                </span>
              </div>
            </div>
            <div className="faqsingle">
              <img
                onClick={() => {
                  const showFaqDup = [...showfaq];
                  showFaqDup[3] = !showfaq[3];
                  this.setState({
                    showfaq: showFaqDup,
                  });
                }}
                src="https://i.imgur.com/irie2Wg.png"
              />
              <div className="spanBox">
                <span className="headerspanBox">
                  After getting accepted how can I apply for the opportunities?
                </span>
                <span
                  className={
                    showfaq[3] ? "contentBox showContent" : "contentBox"
                  }
                >
                  em ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim venia m, quis nostrud exercitation ullamco
                  laboris n isi ut aliquip ex ea commodo consequ
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footerBox">
          <div className="footerContainer">
            <div className="firstFooterBox">
              <img src="https://i.imgur.com/kK7cxAz.png" />
              <span className="firstHeading">
                Sed ut perspiciatis unde omnis iste natus error sit volu ptatem
                accusantium doloremque laud
              </span>
              <span className="subheadingFooter">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo invent
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
        <div className="bottomFooter">
          <div className="rowBox">
          <img src="https://i.imgur.com/EiQJ3KT.png"/>
          <span>
          +1 12345666
          </span>
          </div>
          <div className="rowBox">
          <img src="https://i.imgur.com/2aAwphY.png"/>
          <span>
          support@companyname.com
          </span>
          </div>
          <div className="line">

          </div>
          <div className="rowBox">
          <span>
          Follow-Us
          </span>
         
          <img src="https://i.imgur.com/pStgaAW.png"/>
          </div>
          <span>
          All rights reserved by company name
          </span>
        </div>
      </DahsboardCss>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.utils.is_mobile,
  };
};

export default connect(mapStateToProps, null)(JoinNetwork);
