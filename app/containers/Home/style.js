/**
 * Created by vivek ajage on 12/5/20.
 */
import styled from "styled-components";
import base from "../../styles/base";

const DahsboardCss = styled.div`
  ${base.flex};
  width: 100%;
  flex-direction: column;
  .containerBig {
    position: relative;
    height: 100vh;
  }
  .header {
    display: flex;
    flex: 1;
    height: 20vh;
    padding: 0px 100px;
    align-items: center;
    img {
      width: 130px;
      height: 50px;
    }
    .first {
      flex: 1;
      display: flex;
    }
    .second {
      flex: 5;
      font-family: Poppins-Medium;
      font-size: 16px;
      color: #303030;
      display: flex;
      justify-content: flex-end;
    }
    .menuItem {
      margin: 0px 40px;
      cursor: pointer;
      font-size: 17px;
      display: flex;
      min-width: 9vw;
      align-items: center;
      justify-content: center;
    }
    .roundButton {
      border: solid 2px #303030;
      border-radius: 5px;
      display: flex;
      padding: 15px 25px;
      align-items: center;
      justify-content: center;
      :hover {
        background-color: #303030;
        color: #ffffff;
      }
    }
  }
  .greenHalf {
    width: 50vw;
    height: 100vh;
    position: absolute;
    z-index: -1;
    right: 0;
    background-color: #f0f6f2;
  }
  .container8 {
    display: flex;
    flex: 1;
    flex-direction: row;
    padding: 60px 130px;
    background-color: #f5f5f9;
    .supportBox {
      display: flex;
      flex: 1;
      padding-left: 10%;
      justify-content: flex-start;
      padding-top: 5%;
      flex-direction: column;
      .dottedLine {
        width: 100%;
        font-family: Poppins-Medium;
        letter-spacing: 2px;
        overflow: hidden;
        height: 15px;
        margin-bottom:60px;
      }
      .headercontainer8 {
        width: 80%;
        font-family: Poppins-Medium;
        color: #303030;
        font-size: 24px;
        margin-bottom: 55px;
      }
      .bookacall {
        border-radius: 5px;
        border: solid 2px #303030;
        font-family: Poppins-Medium;
        background-size: #fff;
        cursor: pointer;
        color: #303030;
        padding: 15px;
        text-align: center;
        margin-bottom: 55px;
        width: 50%;
        :hover {
          background-color: #303030;
          color: #fff;
        }
      }
      .contactUsStrip {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin: 20px 0px;
        img {
          width: 30px;
          margin-right: 20px;
        }
        span {
          font-family: Poppins-Regular;
          font-size: 22px;
          color: #303030;
        }
      }
    }
    .formBox {
      display: flex;
      flex: 1;
      flex-direction: column;
      .bottomButton {
        background-color: #303030;
        width: 90%;
        padding: 14px;
        cursor: pointer;
        border: solid 2px #303030;
        font-family: Poppins-Medium;
        color: #fff;
        font-size: 15px;
        text-align: center;
        :hover {
          background-color: #fff;
          color: #303030;
        }
      }

      .inputBox {
        span {
          font-family: Poppins-Regular;
          color: #000;
          font-size: 20px;
          margin-bottom: 10px;
        }
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 40px;
        input {
          border: solid 1px #dddddd;
          padding: 10px;
          width: 90%;
        }
        textarea {
          border: solid 1px #dddddd;
          padding: 10px;
          width: 90%;
          min-height: 200px;
        }
      }
    }
  }
  .container7 {
    display: flex;
    flex-direction: column;
    background-color: #e1ede5;
    padding: 0px 100px;
    padding-top: 10vh;
    position: relative;
    padding-bottom: 10vh;
    .container7Heading {
      font-family: Poppins-Medium;
      font-size: 28px;
      color: #303030;
      padding-left: 20px;
      margin-bottom: 60px;
    }
    .contentBox {
      display: flex;
      flex-direction: row;
      .prevButton {
        display: flex;
        flex: 1;
        align-items: center;
        img {
          width: 40px;
          cursor: pointer;
          object-fit: contain;
        }
      }
      .nextButton {
        display: flex;
        flex: 1;
        align-items: center;
        img {
          width: 40px;
          cursor: pointer;
          object-fit: contain;
        }
      }
      .sliderContent {
        display: flex;
        .sideimg {
          display: flex;
          height: 50vh;
          flex: 2;

          object-fit: contain;
        }
        .contentText {
          display: flex;
          position: relative;
          flex: 4;
          align-items: flex-start;
          justify-content: flex-start;
          padding-top: 5%;
          flex-direction: column;
          font-family: Poppins-Regular;
          font-size: 19px;
          color: #303030;
          span {
            z-index: 9;
            text-align: justify;
            width: 90%;
          }
          .floating {
            position: absolute;
            height: 100px;
            z-index: 0;
            width: 100px;
            left: 20px;
            top: 5%;
            margin-top: 0px;
            object-fit: contain;
          }
          img {
            height: 50px;
            margin-top: 30px;
            object-fit: contain;
          }
        }
      }
    }
  }
  .container6 {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding-top: 30vh;
    position: relative;
    .container6Heading {
      font-family: Poppins-Medium;
      font-size: 28px;
      color: #303030;
      padding-left: 16vw;
      margin-bottom: 30px;
    }
    .bottomBoxer {
      display: flex;
      flex-direction: row;
      padding-left: 50px;
      .firstBox {
        display: flex;
        flex-direction: column;
        padding-bottom: 25vh;
        flex: 1;
        .childbox {
          display: flex;
          padding: 40px 70px;
          flex-direction: row;
          border: solid 2px #fff;
          cursor: pointer;
          :hover {
            border: solid 2px #f0f6f2;
          }
          .firstChild {
            display: flex;
            flex-direction: row;
            flex: 1;
            img {
              width: 60px;

              object-fit: contain;
            }
          }
          .secondChild {
            display: flex;
            flex-direction: column;
            flex: 4;
            .headline {
              font-family: Poppins-Medium;
              font-size: 22px;
              color: #303030;
              margin-bottom: 10px;
            }
            .subtitleline {
              font-family: Poppins-Regular;
              color: #79818c;
              font-size: 19px;
              margin-bottom: 20px;
            }
            .technologyBox {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              img {
                height: 40px;
                margin-right: 10px;
                object-fit: contain;
              }
            }
          }
        }
      }
      .selectedBox {
        background-color: #f0f6f2;
        border: solid 2px #f0f6f2 !important;
      }

      .secondBox {
        display: flex;
        flex-direction: column;
        background-color: #f0f6f2;
        flex: 1;
        .firstimage {
          display: flex;
          position: relative;
          flex: 1;
          img {
            position: absolute;
            right: -10vw;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 50vw;
            object-fit: contain;
          }
        }
        .secondimage {
          display: flex;
          flex: 1;

          position: relative;
          img {
            position: absolute;
            left: -7.5vw;
            top: 0;
            bottom: 0;
            margin: auto;
            z-index: 9;
            width: 45vw;
            object-fit: contain;
          }
        }
      }
    }
  }
  .container5 {
    display: flex;
    flex-direction: column;
    padding: 0px 100px;
    background-color: #f0f6f2;
    padding-top: 100px;
    position: relative;
    .rightimg {
      height: 100%;
      position: absolute;
      right: 0;
    }
    .leftimg {
      height: 100%;
      position: absolute;
      left: 0;
    }
    .rightbottombox {
      position: absolute;
      width: 45vw;
      display: flex;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
      right: 0;
      bottom: -10%;
      z-index: 9;
      .firstrbbox {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 40px;
        background-color: #fff;
      }
      .secondrbbox {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 40px;
        background-color: #cde2d4;
      }
      .boxheading {
        font-family: Poppins-Regular;
        font-size: 50px;
        color: #303030;

        margin: 10px 0px;
        margin-top: 30px;
      }
      .boxsubheading {
        font-family: Poppins-Regular;
        font-size: 20px;
        color: #303030;
        line-height: 20px;
      }
    }
    .headingCont5 {
      font-family: Poppins-Medium;
      font-size: 28px;
      text-align: center;
      padding: 0px 20%;
      color: #404040;
    }
    .subheadCont5 {
      font-family: Poppins-Regular;
      font-size: 19px;
      text-align: center;
      padding: 0px 30%;
      margin-top: 35px;
      margin-bottom: 130px;
      color: #303030;
    }
    .bottomBox {
      display: flex;
      flex-direction: row;
      .firstBotbox {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100px;
        margin-bottom: 100px;
        flex-wrap: wrap;
        span {
          font-family: Poppins-Medium;
          font-size: 19px;
          color: #303030;
          margin: 10px 0px;
        }
      }
      .secondBotbox {
        display: flex;
        flex: 1%;
      }
    }
  }
  .container4 {
    display: flex;
    padding-top: 30vh;
    flex-direction: column;
    .headingText {
      font-family: Poppins-Medium;
      font-size: 28px;
      color: #303030;
      line-height: 40px;
      text-align: center;
      padding: 0px 200px;
      margin-bottom: 100px;
    }
    .containerBox {
      display: flex;

      flex-direction: row;
      .firstBox {
        display: flex;
        background-color: #f0f6f2;
        padding-left: 100px;
        flex-direction: column;
        flex: 1;
        .skillSet {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;

          .skillSingle {
            width: 50%;
            display: flex;
            margin: 55px 0px;
            flex-direction: column;
            align-items: flex-start;
            .skillImg {
              width: 45px;
              height: 45px;
              margin-bottom: 20px;
            }
            .skillHeader {
              font-family: Poppins-SemiBold;
              font-size: 19px;
              color: #303030;
              margin: 8px 0px;
            }
            .skillSub {
              font-family: Poppins-Regular;
              font-size: 19px;
              color: #79818c;
              margin: 8px 0px;
            }
          }
        }
        .firstText {
          font-family: Poppins-Medium;
          font-size: 23px;
          color: #303030;
          margin: 40px;
          margin-left: 0px;
          text-align: left;
        }
      }
      .secondBox {
        display: flex;
        padding-right: 100px;
        flex: 1;
        flex-direction: column;
        .firstText {
          font-family: Poppins-Medium;
          font-size: 23px;
          margin: 40px;
          color: #303030;
          text-align: left;
        }
        .sideImage {
          width: 100%;
          object-fit: contain;
          margin-top: 50px;
          margin-left: 10%;
        }
      }
    }
  }
  .container3 {
    display: flex;
    height: 70vh;
    padding: 0px 100px;
    padding-top: 150px;
    flex-direction: column;
    .headingText {
      font-family: Poppins-Medium;
      font-size: 28px;
      color: #303030;
      line-height: 40px;
      text-align: center;
      padding: 0px 100px;
    }
    .teamSize {
      display: flex;
      flex: 1;
      margin-top: 100px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .team {
        display: flex;
        width: 22.5%;
        flex-direction: column;
        align-items: flex-start;
        .box {
          background-color: #f0f6f2;
          width: 12vw;
          height: 7.5vw;
          border-radius: 20px;
          position: absolute;
          z-index: -1;
        }
        .firstGreenFload {
          transform: rotate(-10deg);
        }
        .secondGreenFload {
          transform: rotate(10deg);
        }
        .thirdGreenFload {
          transform: rotate(20deg);
        }
        .fourthGreenFload {
          transform: rotate(-25deg);
        }
        .teamHeading {
          font-family: Poppins-Regular;
          color: #36d28f;
          font-size: 49px;
          margin-bottom: 15px;
        }
        .teamSubtitle {
          font-family: Poppins-Regular;
          color: #303030;
          font-size: 20px;
        }
      }
    }
  }
  .container2 {
    display: flex;
    height: 100vh;
    padding: 0px 100px;
    padding-top: 100px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .headingText {
      font-family: Poppins-Medium;
      font-size: 28px;
      color: #303030;
      line-height: 40px;
      text-align: center;
      padding: 0px 100px;
    }
    .features {
      display: flex;
      flex: 1;
      margin-top: 100px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .feature {
        display: flex;
        width: 30%;
        flex-direction: column;
        align-items: flex-start;
        .featureHeading {
          font-family: Poppins-Medium;
          color: #303030;
          margin-top: 70px;
          font-size: 23px;
          margin-bottom: 30px;
        }
        .featureSubHeading {
          font-family: Poppins-Regular;
          color: #79818c;
          font-size: 19px;
        }
        .featureimg {
          object-fit: contain;
          width: 12.5vw;
        }
      }
    }
  }
  .container1 {
    display: flex;
    height: 80vh;
    padding: 0px 100px;
    .first {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding-top: 5%;
      .headerTitle {
        font-family: Poppins-Medium;
        font-size: 43px;
        color: #303030;
        line-height: 60px;
        margin-bottom: 30px;
      }
      .subtitle {
        color: #79818c;
        font-family: Poppins-Regular;
        font-size: 19px;
        margin-bottom: 75px;
      }
      .btnHome {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        .btn1 {
          background-color: #303030;
          color: #ffffff;
          border: solid 2px #303030;
          font-family: Poppins-Medium;
          font-size: 16px;
          padding: 15px 0px;
          border-radius: 5px;
          display: flex;
          width: 48%;
          justify-content: center;
          cursor: pointer;
          :hover {
            background-color: #fff;
            border: solid 2px #303030;
            color: #303030;
          }
        }
      }
    }
    .second {
      display: flex;
      flex: 1;
      position: relative;
      .bubble {
        width: 100%;
        object-fit: contain;
        height: 100%;
        margin-left: 5%;
      }
      .tree {
        object-fit: contain;
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        left: 10%;
        right: 0;
        margin: auto;
      }
    }
  }
`;
export { DahsboardCss };
