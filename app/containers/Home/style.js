/**
 * Created by vivek ajage on 12/5/20.
 */
import styled from "styled-components";
import base from "../../styles/base";

const DahsboardCss = styled.div`
  ${base.flex};
  width: 100%;
  flex-direction: column;
  .ModalBox {
    width: 70vw;
  }

  .headerBox {
    background-color: #cde2d4;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 10px 35px;
    position: relative;
    padding-top: 25px;
    img {
      width: 30px;
      object-fit: contain;
      position: absolute;
      top: 25px;
      right: 35px;
      z-index: 9999;
      cursor: pointer;
    }
    span {
      font-family: Poppins;
      font-weight: 500;
      margin-bottom: 20px;
      font-size: 25px;
    }
  }

  .modalBodyHome {
    padding: 25px 30px !important;
    display: flex;
    flex-direction: row;
    .flexStartButton {
      align-self: flex-start !important;
    }
    .modalButton {
      text-transform: uppercase;
      padding: 10px 25px;
      font-family: Poppins;
      font-weight: 500;
      border-radius: 5px;
      align-self: center;
      color: #fff;
      background-color: #303030;
      font-size: 15px;
      display: flex;
      align-items: center;
      align-items: center;
      width: 55%;
      justify-content: center;
      cursor: pointer;
      margin-top: 25px;
      @media (max-width: ${base.small}) {
        width: 85%;
        font-size: 12px;
        padding: 10px 10px;
      }
    }
    .rightBoxModal {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
      .colorblack {
        color: #303030 !important;
      }
      .ctogreen {
        font-size: 16px;
        padding-bottom: 5%;
        width: 90%;
        font-family: Poppins;
        font-weight: 600;
        text-transform: uppercase;
        color: #36d28f;
        @media (max-width: ${base.small}) {
          font-size: 12px;
          padding-bottom: 15px;
        }
      }
      .elastictext {
        font-size: 16px;
        padding-bottom: 5%;
        width: 90%;
        font-family: Poppins;
        font-weight: 300;
        color: #79818c;
        @media (max-width: ${base.small}) {
          font-size: 12px;
          padding-bottom: 15px;
        }
      }
      .topBoxer {
        display: flex;
        flex: 1;
        flex-direction: column;
        .listwrapper {
          display: flex;
          flex-direction: column;
        }
        .listEntries {
          padding: 10px 0px;
          display: flex;
          flex-direction: row;
          .number {
            font-family: Poppins;
            font-weight: 100;
            font-size: 15px;
            height: 10px;
            width: 10px;
            border-radius: 19px;
            background-color: #898989;
            margin-top: 1vh;
            margin-right: 15px;
          }
          span {
            font-size: 16px;
            font-family: Poppins;
            width: 90%;
            font-weight: 300;
            color: #79818c;
            @media (max-width: ${base.small}) {
              font-size: 12px;
            }
          }
        }
      }
      .bottomBoxer {
        display: flex;
        display: flex;
        flex-direction: column;
        background-color: #cde2d4;
        border-radius: 5px;
        padding: 10px 15px;
        .priceTag {
          font-weight: 600;
          font-size: 24px;
          margin-right: 10px;
        }
        span {
          font-family: Poppins;
          font-size: 16px;
          margin: 2px 0px;
          font-weight: 400;
          align-items: center;
          display: flex;
          color: #303030;
          @media (max-width: ${base.small}) {
            font-size: 12px;
          }
        }
      }
    }
    .leftBoxModal {
      display: flex;
      flex: 1;
      flex-direction: column;
      margin-right: 10px;
      justify-content: space-between;
      .listwrapper {
        display: flex;
        flex-direction: column;
      }
      .listEntries {
        display: flex;
        flex-direction: row;
        .numberBox {
          display: flex;
          flex-direction: column;
          align-items: center;
          /* justify-content: center; */
          margin-right: 15px;
          .linebelow {
            width: 1px;
            background-color: #898989;
            height: 100%;
          }
        }
        .number {
          font-family: Poppins;
          font-weight: 500;
          color: #898989;
          font-size: 14px;
          height: 18px;
          width: 18px;
          padding: 5px;
          border-radius: 50%;
          justify-content: center;
          align-items: center;
          display: flex;
          border: solid 1px #898989;
        }
        span {
          font-size: 16px;
          padding-bottom: 25px;
          width: 90%;
          font-family: Poppins;
          font-weight: 300;
          color: #79818c;
          @media (max-width: ${base.small}) {
            font-size: 12px;
            padding-bottom: 15px;
          }
        }
      }
    }
  }

  .headerSubeheader {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    justify-content: space-between;
    span {
      font-family: Poppins;
      flex: 1;
      margin: 0px;
      font-weight: 500;
      font-size: 18px;
    }
  }

  .containerBig {
    position: relative;
    height: 100vh;
  }
  .footerBox {
    display: flex;
    padding: 20px 100px;
    padding-top: 10vh;
    background-color: #cde2d450;
    .footerContainer {
      display: flex;
      width: 100%;
      .firstFooterBox {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: flex-start;
        img {
          height: 50px;
          object-fit: contain;
          margin-bottom: 50px;
        }
        .firstHeading {
          font-family: Poppins;
          font-weight: 500;
          font-size: 17px;
          color: #303030;
          margin-bottom: 20px;
          width: 75%;
        }
        .subheadingFooter {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          width: 100%;
          color: #79818c;
        }
      }
      .secondfooter {
        display: flex;
        flex: 1;
        align-items: center;
        flex-direction: column;
        .footerLinks {
          width: 70%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          span {
            width: 50%;
            margin: 10px 0px;
            font-family: Poppins;
            font-weight: 500;
            font-size: 17px;
            color: #303030;
          }
        }
        .subscribenow {
          display: flex;
          flex-direction: row;
          margin-top: 100px;
          margin-bottom: 50px;
          width: 70%;
          input {
            border: solid 1px #dddddd;
            padding: 10px;
            font-family: Poppins;
            font-weight: 500;
            font-size: 19px;
            width: 70%;
          }
          .subscribeNowButton {
            padding: 10px 25px;
            font-family: Poppins;
            font-weight: 400;
            border-radius: 5px;
            color: #fff;
            background-color: #303030;
            font-size: 15px;
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
  .bottomFooter {
    display: flex;
    padding: 25px 5vw;
    align-items: center;
    background-color: #d7e8dd;
    justify-content: space-between;
    .line {
      height: 30px;
      width: 2px;
      background-color: #303030;
    }
    .rowBox {
      display: flex;
      align-items: center;
    }
    img {
      height: 20px;
      object-fit: contain;
      margin-right: 20px;
    }
    span {
      font-family: Poppins;
      font-weight: 400;
      font-size: 15px;
      margin-right: 30px;
      color: #303030;
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
    @media (max-width: ${base.small}) {
      flex-direction: column;
      padding: 60px 20px;
    }
    .supportBox {
      display: flex;
      flex: 1;
      padding-left: 10%;
      justify-content: flex-start;
      padding-top: 5%;
      flex-direction: column;
      @media (max-width: ${base.small}) {
        align-items: center;
        padding-left: 0%;
      }
      .dottedLine {
        width: 100%;
        font-family: Poppins;
        font-weight: 500;
        letter-spacing: 2px;
        overflow: hidden;
        height: 15px;
        margin-bottom: 60px;
      }
      .headercontainer8 {
        width: 80%;
        font-family: Poppins;
        font-weight: 500;
        color: #303030;
        font-size: 24px;
        margin-bottom: 55px;
        @media (max-width: ${base.small}) {
          text-align: center;
          margin-top: 20px;
        }
      }
      .bookacall {
        border-radius: 5px;
        border: solid 2px #303030;
        font-family: Poppins;
        font-weight: 500;
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
        @media (max-width: ${base.small}) {
          margin-bottom: 35px;
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
          @media (max-width: ${base.small}) {
            width: 20px;
          }
        }
        span {
          font-family: Poppins;
          font-weight: 400;
          font-size: 22px;
          color: #303030;
          @media (max-width: ${base.small}) {
            font-size: 15px;
          }
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
        font-family: Poppins;
        font-weight: 500;
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
          font-family: Poppins;
          font-weight: 400;
          color: #000;
          font-size: 20px;
          margin-bottom: 10px;
        }
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 25px;
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
    @media (max-width: ${base.small}) {
      padding: 0px 20px;
      padding-top: 10vh;
      padding-bottom: 5vh;
    }
    .container7Heading {
      font-family: Poppins;
      font-weight: 500;
      font-size: 28px;
      color: #303030;
      padding-left: 20px;
      margin-bottom: 60px;
      @media (max-width: ${base.small}) {
        padding: 0px;
        font-size: 18px;
        line-height: 32px;
        text-align: center;
        margin-bottom: 30px;
      }
    }
    .contentBox {
      display: flex;
      flex-direction: row;
      .prevButton {
        display: flex;
        flex: 1;
        align-items: center;
        @media (max-width: ${base.small}) {
          display: none;
        }
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
        @media (max-width: ${base.small}) {
          display: none;
        }
        img {
          width: 40px;
          cursor: pointer;
          object-fit: contain;
        }
      }
      .sliderContent {
        display: flex;
        @media (max-width: ${base.small}) {
          flex-direction: column;
        }
        .sideimg {
          display: flex;
          border-radius: 50%;
          width: 15%;
          padding: 2.5%;
          flex: 1;
          object-fit: contain;
          @media (max-width: ${base.small}) {
            width: 50%;
            align-self: center;
          }
        }
        .contentText {
          display: flex;
          position: relative;
          flex: 4;
          align-items: flex-start;
          justify-content: flex-start;
          padding-top: 5%;
          flex-direction: column;
          font-family: Poppins;
          font-weight: 400;
          font-size: 19px;
          color: #303030;
          @media (max-width: ${base.small}) {
            align-items: center;
          }
          span {
            z-index: 9;
            text-align: justify;
            width: 90%;
            @media (max-width: ${base.small}) {
              margin-top: 20%;
            }
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
    @media (max-width: ${base.small}) {
      padding-top: 25vh;
    }
    .container6Heading {
      font-family: Poppins;
      font-weight: 500;
      font-size: 28px;
      color: #303030;
      padding-left: 16vw;
      margin-bottom: 30px;
    }
    .bottomBoxer {
      display: flex;
      flex-direction: row;
      padding-left: 50px;
      @media (max-width: ${base.small}) {
        padding-left: 0px;
        flex-direction: column;
      }
      .btn1 {
        background-color: #fff;
        color: #303030;
        border: solid 2px #303030;
        font-family: Poppins;
        font-weight: 500;
        font-size: 16px;
        padding: 15px 0px;
        border-radius: 5px;
        display: flex;
        width: 45%;
        align-self: center;
        justify-content: center;
        margin-top: 50px;
        text-transform: uppercase;
        cursor: pointer;
        @media (max-width: ${base.small}) {
          width: 90%;
          margin: 10px 0px;
          padding: 10px 0px;
        }
        :hover {
          background-color: #303030;
          color: #fff;
        }
      }
      .firstBox {
        display: flex;
        flex-direction: column;
        padding-bottom: 15vh;
        flex: 1;
        @media (max-width: ${base.small}) {
          padding-bottom: 0vh;
          overflow: scroll;
          flex-direction: row;
        }
        .childbox {
          display: flex;
          padding: 20px 70px;
          flex-direction: row;
          border: solid 2px #fff;
          cursor: pointer;
          :hover {
            border: solid 2px #f0f6f2;
          }
          @media (max-width: ${base.small}) {
            padding: 15px;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
          }
          .firstChild {
            display: flex;
            flex-direction: row;
            flex: 1;
            img {
              width: 60px;
              object-fit: contain;
              align-self: start;
              margin-top: 1vh;
              @media (max-width: ${base.small}) {
                width: 50px;
              }
            }
          }
          .secondChild {
            @media (max-width: ${base.small}) {
              display: none;
            }
            display: flex;
            flex-direction: column;
            flex: 5;
            .headline {
              font-family: Poppins;
              font-weight: 500;
              font-size: 22px;
              color: #303030;
            }
            .subtitleline {
              font-family: Poppins;
              font-weight: 400;
              color: #79818c;
              font-size: 16px;
              margin-bottom: 20px;
            }
            .technologyBox {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              img {
                width: 25vw;
                margin-right: 24px;
                margin-bottom: 5px;
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
        @media (max-width: ${base.small}) {
          height: 80vh;
        }
        .secondChild {
          display: flex;
          flex-direction: column;
          padding: 35px 25px;
          .headline {
            font-family: Poppins;
            font-weight: 500;
            font-size: 20px;
            color: #303030;
            margin-bottom: 10px;
          }
          .subtitleline {
            font-family: Poppins;
            font-weight: 400;
            color: #79818c;
            font-size: 15px;
            margin-bottom: 20px;
          }
          .technologyBox {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            img {
              height: 25px;
              margin-right: 20px;
              margin-bottom: 5px;
              object-fit: contain;
              @media (max-width: ${base.small}) {
                width: 70vw;
                height: auto;
              }
            }
          }
        }
        .firstVideo {
          display: flex;
          position: relative;
          flex: 1;
          img {
            position: absolute;
            right: 10vw;
            top: 0;
            bottom: 0;
            margin: auto;
            height: 100vh;
            object-fit: contain;
            @media (max-width: ${base.small}) {
              position: absolute;
              right: 0;
              left: 0;
              top: 0;
              bottom: 0;
              margin: auto;
              height: 50vh;
              object-fit: contain;
            }
          }
          video {
            position: absolute;
            right: 11.5vw;
            top: 21px;
            bottom: 0;
            margin: auto;
            height: 84vh;
            object-fit: contain;
            @media (max-width: ${base.small}) {
              position: absolute;
              right: 0;
              top: 9px;
              left: 0;
              bottom: 0;
              margin: auto;
              height: 43vh;
              object-fit: contain;
            }
          }
        }
        .firstVideoImage {
          display: flex;
          position: relative;
          flex: 1;
          img {
            position: absolute;
            right: -2vw;
            top: 10vw;
            /* bottom: 0; */
            margin: auto;
            width: 50vw;
            object-fit: contain;
            @media (max-width: ${base.small}) {
              position: absolute;
              right: 0vw;
              top: 10vw;
              margin: auto;
              width: 100vw;
              object-fit: contain;
            }
          }
          video {
            position: absolute;
            right: 4vw;
            top: 13.1vw;
            margin: auto;
            width: 38vw;
            object-fit: contain;
            @media (max-width: ${base.small}) {
              position: absolute;
              right: 0;
              left: 0;
              top: 16.4vw;
              margin: auto;
              width: 75vw;
              object-fit: contain;
            }
          }
        }
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
            @media (max-width: ${base.small}) {
              width: 90vw;
              right: auto;
              left: -11vw;
              margin: 0px;
            }
          }

          .floatingImg {
            width: 33vw;
            left: 50px;
            @media (max-width: ${base.small}) {
              width: 65vw;
              left: 0;
              top: 10px;
            }
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
            @media (max-width: ${base.small}) {
              width: 90vw;
              left: auto;
              right: -20vw;
              margin: 0px;
            }
          }
          .floatingImg {
            width: 33vw;
            left: -17px;
            @media (max-width: ${base.small}) {
              width: 57vw;
              right: 0px;
              left: auto;
              top: 15px;
            }
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
    @media (max-width: ${base.small}) {
      padding: 0px 20px;
      padding-top: 60px;
      padding-bottom: 22vh;
    }
    .rightimg {
      height: 100%;
      position: absolute;
      right: 0;
      @media (max-width: ${base.small}) {
        display: none;
      }
    }
    .leftimg {
      height: 100%;
      position: absolute;
      left: 0;
      @media (max-width: ${base.small}) {
        height: 50vh;
        right: -10vw;
        height: 40vh;
        left: auto;
        bottom: 20px;
      }
    }
    .rightbottombox {
      position: absolute;
      width: 45vw;
      display: flex;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
      right: 0;
      bottom: -10%;
      z-index: 9;
      @media (max-width: ${base.small}) {
        width: 100vw;
        box-shadow: none;
        bottom: -15%;
        flex-direction: column;
      }
      .firstrbbox {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 40px;
        background-color: #fff;
        text-transform: uppercase;
        @media (max-width: ${base.small}) {
          padding: 20px;
          margin-right: 20%;
          box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
        }
      }
      .secondrbbox {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 40px;
        background-color: #cde2d4;
        @media (max-width: ${base.small}) {
          padding: 20px;
          margin-left: 20%;
          box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
        }
      }
      .boxheading {
        font-family: Poppins;
        font-weight: 400;
        font-size: 50px;
        color: #303030;
        margin: 10px 0px;
        margin-top: 30px;
        @media (max-width: ${base.small}) {
          margin-top: 10px;
          font-size: 40px;
        }
      }
      .boxsubheading {
        font-family: Poppins;
        font-weight: 400;
        font-size: 20px;
        color: #303030;
        line-height: 20px;
        text-transform: none;
        @media (max-width: ${base.small}) {
          font-size: 19px;
        }
      }
    }
    .headingCont5 {
      font-family: Poppins;
      font-weight: 500;
      font-size: 28px;
      text-align: center;
      padding: 0px 15%;
      margin-bottom: 130px;
      color: #404040;
      @media (max-width: ${base.small}) {
        padding: 0px;
        font-size: 16px;
        margin-bottom: 60px;
      }
    }
    .subheadCont5 {
      font-family: Poppins;
      font-weight: 400;
      font-size: 19px;
      text-align: center;
      padding: 0px 30%;
      margin-top: 35px;
      margin-bottom: 130px;
      color: #303030;
      @media (max-width: ${base.small}) {
        padding: 0px;
        font-size: 16px;
        margin-bottom: 60px;
        margin-top: 20px;
      }
    }
    .bottomBox {
      display: flex;
      flex-direction: row;
      @media (max-width: ${base.small}) {
        flex-direction: column;
      }
      .firstBotbox {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 150px;
        margin-bottom: 70px;
        flex-wrap: wrap;
        @media (max-width: ${base.small}) {
          height: auto;
          flex-direction: row;
          margin-bottom: 75px;
        }
        span {
          font-family: Poppins;
          font-weight: 500;
          font-size: 19px;
          color: #303030;
          margin: 10px 0px;
          @media (max-width: ${base.small}) {
            width: 50%;
            font-size: 15px;
          }
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
    padding-top: 10vh;
    flex-direction: column;
    @media (max-width: ${base.small}) {
      padding-top: 20px;
    }
    .headingText {
      font-family: Poppins;
      font-weight: 500;
      font-size: 28px;
      color: #303030;
      line-height: 40px;
      text-align: center;
      padding: 0px 200px;
      margin-bottom: 60px;
      @media (max-width: ${base.small}) {
        padding: 0px;
        font-size: 16px;
        line-height: 32px;
      }
    }
    .containerBox {
      display: flex;

      flex-direction: row;
      @media (max-width: ${base.small}) {
        flex-direction: column;
      }
      .firstBox {
        display: flex;
        background-color: #f0f6f2;
        padding-left: 100px;
        flex-direction: column;
        flex: 1;
        @media (max-width: ${base.small}) {
          align-items: center;
          padding: 0px 20px;
          padding-bottom: 30px;
        }
        .skillSet {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          @media (max-width: ${base.small}) {
            flex-direction: column;
          }
          .skillSingle {
            width: 50%;
            display: flex;
            margin: 55px 0px;
            flex-direction: column;
            align-items: flex-start;
            @media (max-width: ${base.small}) {
              width: 100%;
              flex-wrap: wrap;
              padding-left: 5%;
              margin: 25px 0px;
              flex-direction: row;
            }
            .skillImg {
              width: 45px;
              height: 45px;
              margin-bottom: 20px;
              @media (max-width: ${base.small}) {
                margin-right: 20px;
                margin-bottom: 0px;
              }
            }
            .skillHeader {
              font-family: Poppins;
              font-weight: 700;
              font-size: 19px;
              color: #303030;
              margin: 8px 0px;
              @media (max-width: ${base.small}) {
                font-weight: 500;
              }
            }
            .skillSub {
              font-family: Poppins;
              font-weight: 400;
              font-size: 19px;
              color: #79818c;
              margin: 8px 0px;
              @media (max-width: ${base.small}) {
                margin: 2px 0px;
                margin-left: 65px;
              }
            }
          }
        }
        .firstText {
          font-family: Poppins;
          font-weight: 500;
          font-size: 23px;
          color: #303030;
          margin: 40px;
          margin-left: 0px;
          text-align: left;
          @media (max-width: ${base.small}) {
            margin-left: 40px;
            width: 90%;
            margin-bottom: 10px;
          }
        }
      }
      .secondBox {
        display: flex;
        padding-right: 100px;
        flex: 1;
        flex-direction: column;
        @media (max-width: ${base.small}) {
          padding: 20px;
        }
        .firstText {
          font-family: Poppins;
          font-weight: 500;
          font-size: 23px;
          margin: 40px;
          color: #303030;
          text-align: left;
          @media (max-width: ${base.small}) {
            display: none;
          }
        }
        .sideImage {
          width: 100%;
          object-fit: contain;
          margin-left: 10%;
          @media (max-width: ${base.small}) {
            margin-left: 0%;
          }
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
    @media (max-width: ${base.small}) {
      padding: 0px 20px;
      padding-top: 40px;
      height: auto;
    }
    .headingText {
      font-family: Poppins;
      font-weight: 500;
      font-size: 28px;
      color: #303030;
      line-height: 40px;
      text-align: center;
      padding: 0px 100px;
      @media (max-width: ${base.small}) {
        padding: 0px;
        font-size: 16px;
        line-height: 32px;
      }
    }
    .teamSize {
      display: flex;
      flex: 1;
      margin-top: 50px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      @media (max-width: ${base.small}) {
        flex-direction: column;
      }
      .team {
        display: flex;
        width: 22.5%;
        flex-direction: column;
        align-items: flex-start;
        @media (max-width: ${base.small}) {
          align-items: center;
          margin-bottom: 70px;
          width: 100%;
        }
        .box {
          background-color: #f0f6f2;
          width: 12vw;
          height: 7.5vw;
          border-radius: 20px;
          position: absolute;
          z-index: -1;
          @media (max-width: ${base.small}) {
            width: 35vw;
            height: 20vw;
          }
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
          font-family: Poppins;
          font-weight: 400;
          color: #36d28f;
          font-size: 49px;
          margin-bottom: 15px;
        }
        .teamSubtitle {
          font-family: Poppins;
          font-weight: 400;
          color: #303030;
          font-size: 20px;
        }
      }
    }
  }
  .container2 {
    display: flex;
    padding: 0px 100px;
    padding-top: 100px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: ${base.small}) {
      padding: 0px 20px;
      padding-top: 70px;
    }
    .headingText {
      font-family: Poppins;
      font-weight: 500;
      font-size: 28px;
      color: #303030;
      line-height: 40px;
      text-align: center;
      padding: 0px 100px;
      @media (max-width: ${base.small}) {
        padding: 0px;
        font-size: 16px;
        margin-bottom: 10vh;
        line-height: 32px;
      }
    }
    .features {
      display: flex;
      flex: 1;
      margin-top: 100px;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      @media (max-width: ${base.small}) {
        margin-top: 10px;
        flex-direction: column;
      }
      .feature {
        display: flex;
        width: 30%;
        flex-direction: column;
        align-items: flex-start;
        @media (max-width: ${base.small}) {
          width: 100%;
          align-items: center;
        }
        .featureHeading {
          font-family: Poppins;
          font-weight: 500;
          color: #303030;
          margin-top: 70px;
          font-size: 23px;
          margin-bottom: 30px;
          @media (max-width: ${base.small}) {
            font-size: 18px;
            margin-top: 30px;
            text-align: center;
            margin-bottom: 15px;
          }
        }
        .knowMorespan {
          color: #36d28f;
          font-family: Poppins;
          font-size: 16px;
          cursor: pointer;
          text-align: center;
          margin-top: 25px;
          margin-bottom: 70px;
          @media (max-width: ${base.small}) {
            display: flex;
          }
        }
        .featureSubHeading {
          font-family: Poppins;
          font-weight: 400;
          color: #79818c;
          font-size: 19px;
          @media (max-width: ${base.small}) {
            font-size: 16px;
            text-align: center;
            width: 90%;
          }
        }
        .featureimg {
          object-fit: contain;
          width: 12.5vw;
          height: 8vw;
          @media (max-width: ${base.small}) {
            width: 37.5vw;

            height: auto;
          }
        }
      }
    }
  }
  .container1 {
    display: flex;
    height: 80vh;
    padding: 0px 100px;
    @media (max-width: ${base.small}) {
      padding: 0px 20px;
      flex-direction: column-reverse;
    }
    .first {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding-top: 5%;
      @media (max-width: ${base.small}) {
        align-items: center;
      }
      .headerTitle {
        font-family: Poppins;
        font-weight: 500;
        font-size: 43px;
        color: #303030;
        line-height: 60px;
        margin-bottom: 30px;
        @media (max-width: ${base.small}) {
          line-height: 30px;
          margin-bottom: 15px;
          font-size: 22px;
          text-align: center;
        }
        .spanboxchangingtext {
          color: #5dbc7d;
          display: contents;
        }
      }
      .subtitle {
        color: #79818c;
        font-family: Poppins;
        font-weight: 400;
        font-size: 19px;
        margin-bottom: 75px;
        @media (max-width: ${base.small}) {
          margin-bottom: 15px;
          text-align: center;
          font-size: 15px;
        }
      }
      .btnHome {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        @media (max-width: ${base.small}) {
          flex-direction: column;
          width: 80%;
        }
        .btn1 {
          background-color: #303030;
          color: #ffffff;
          border: solid 2px #303030;
          font-family: Poppins;
          font-weight: 500;
          font-size: 16px;
          padding: 15px 0px;
          border-radius: 5px;
          display: flex;
          width: 45%;
          justify-content: center;
          text-transform: uppercase;
          cursor: pointer;
          @media (max-width: ${base.small}) {
            width: 90%;
            margin: 10px 0px;
            padding: 10px 0px;
          }
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
        @media (max-width: ${base.small}) {
          margin-left: 0;
        }
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
        @media (max-width: ${base.small}) {
          left: 0;
        }
      }
    }
  }
`;
export { DahsboardCss };
