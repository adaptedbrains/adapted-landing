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
      margin-top: 25px;
      cursor: pointer;
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
            font-weight: 500;
            font-size: 15px;
            height: 10px;
            width: 10px;
            border-radius: 19px;
            background-color: #303030;
            border: solid 1px #303030;
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
            background-color: #000;
            height: 100%;
          }
        }
        .number {
          font-weight: 500;
          font-size: 14px;
          height: 18px;
          padding: 5px 7px;
          border-radius: 20px;
          border: solid 1px #303030;
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
      font-size: 17px;
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
  .container3 {
    display: flex;
    height: 70vh;
    width: 93vw;
    padding: 0px 7.5vw;
    align-items: center;
    padding-top: 10vh;
    margin-bottom: 10vh;
    flex-direction: row;
    padding-left: 0px;
    @media (max-width: ${base.small}) {
      display: flex;
      height: auto;
      width: 85vw;
      padding: 0px 7.5vw;
      padding-top: 5vh;
      position: relative;
      margin-bottom: 0vh;
      flex-direction: column-reverse;
    }
    .phoneimg {
      position: relative;
      height: 33vw;
      width: 40vw;
      margin-right: 5vw;
      align-items: center;
      display: flex;
      @media (max-width: ${base.small}) {
        margin-right: 0vw;
        height: 30vh;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 35px;
      }
      position: relative;
      img {
        height: 33vw;
        width: 40vw;
        @media (max-width: ${base.small}) {
          height: 30vh;
          width: 60vh;
        }
      }
      video {
        height: 33vw;
        position: absolute;
        left: 0;
        width: 40vw;
        :focus {
          outline: none;
        }
        @media (max-width: ${base.small}) {
          height: 30vh;
          width: 85vw;
        }
      }
    }
    .rightbox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: 5vw;
      .logoboxworth {
        width: 5vw;
        height: 100px;
        object-fit: contain;
        margin-bottom: 15px;
        @media (max-width: ${base.small}) {
          width: 15vw;
          height: 10vh;
          object-fit: contain;
          margin-bottom: 5px;
        }
      }
      .subtitletext {
        font-size: 16px;
        font-family: Poppins;
        font-weight: 300;
        color: #000;
        @media (max-width: ${base.small}) {
          font-size: 12px;
          font-family: Poppins;
          font-weight: 300;
          margin-bottom: 20px;
          color: #000;
        }
      }
      .bolderheader {
        font-size: 25px;
        font-family: Poppins;
        margin-bottom: 10px;
        font-weight: 600;
        color: #000;
        @media (max-width: ${base.small}) {
          font-size: 18px;
          margin-bottom: 25px;
        }
      }
      .nameimgbox {
        flex-direction: row;
        display: flex;
        img {
          width: 5vw;
          height: 5vw;
          object-fit: cover;
          border-radius: 5vw;
          @media (max-width: ${base.small}) {
            width: 5vh;
            height: 5vh;
            object-fit: cover;
            border-radius: 5vh;
          }
        }
        .contactinfo {
          flex-direction: column;
          display: flex;
          margin-left: 20px;
          justify-content: center;
          span {
            font-size: 17px;
            font-family: Poppins;
            font-weight: 400;
            @media (max-width: ${base.small}) {
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  .container2 {
    display: flex;
    height: 70vh;
    width: 85vw;
    padding: 0px 7.5vw;
    padding-top: 10vh;
    margin-bottom: 10vh;
    flex-direction: row;
    @media (max-width: ${base.small}) {
      display: flex;
      height: auto;
      position: relative;
      width: 85vw;
      padding: 0px 7.5vw;
      padding-top: 0vh;
      margin-bottom: 0vh;
      flex-direction: column-reverse;
    }
    .phoneimg {
      position: relative;
      height: 40vw;
      width: 20vw;
      margin-right: 5vw;
      align-items: center;
      display: flex;
      @media (max-width: ${base.small}) {
        margin-right: 0vw;
        height: 60vh;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 35px;
      }
      img {
        z-index: 9;
        object-fit: contain;
        height: 65vh;
        width: 30vh;
        top: 6vw;
        @media (max-width: ${base.small}) {
          height: 60vh;
          width: 30vh;
          z-index: 9;
        }
      }
      video {
        height: 54vh;
        width: 30vh;
        top: 111px;
        position: absolute;

        height: 54vh;
        width: 30vh;
        top: 10vh;
        position: absolute;

        @media (max-width: ${base.small}) {
          height: 51vh;
          width: 30vh;
          top: 44px;
        }
      }
    }
    .rightbox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: 5vw;
      .logoboxworth {
        width: 5vw;
        height: 100px;
        object-fit: contain;
        margin-bottom: 15px;
        @media (max-width: ${base.small}) {
          width: 15vw;
          height: 10vh;
          object-fit: contain;
          margin-bottom: 5px;
        }
      }
      .subtitletext {
        font-size: 16px;
        font-family: Poppins;
        font-weight: 300;
        color: #000;
        @media (max-width: ${base.small}) {
          font-size: 12px;
          font-family: Poppins;
          font-weight: 300;
          margin-bottom: 20px;
          color: #000;
        }
      }
      .bolderheader {
        font-size: 25px;
        font-family: Poppins;
        margin-bottom: 10px;
        font-weight: 600;
        color: #000;
        @media (max-width: ${base.small}) {
          font-size: 18px;
          margin-bottom: 25px;
        }
      }
      .nameimgbox {
        flex-direction: row;
        display: flex;
        img {
          width: 5vw;
          height: 5vw;
          object-fit: cover;
          border-radius: 5vw;
          @media (max-width: ${base.small}) {
            width: 5vh;
            height: 5vh;
            object-fit: cover;
            border-radius: 5vh;
          }
        }
        .contactinfo {
          flex-direction: column;
          display: flex;
          margin-left: 20px;
          justify-content: center;
          span {
            font-size: 17px;
            font-family: Poppins;
            font-weight: 400;
            @media (max-width: ${base.small}) {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  .marginbottombox {
    margin-bottom: 40vh;
    @media (max-width: ${base.small}) {
      margin-bottom: 5vh;
    }
  }
  .reversevideorow {
    flex-direction: row-reverse;
    padding-right: 0px;
    padding-left: 7.5vw;
    @media (max-width: ${base.small}) {
      flex-direction: column-reverse;
    }
    .phoneimg {
      position: relative;
      margin-left: 5vw;
      margin-right: 0px;
      align-items: center;
      display: flex;
      @media (max-width: ${base.small}) {
        margin-left: 0vw;
        height: auto;
        width: 85vw;
        /* top: 86px; */
        object-fit: contain;
        margin-bottom: 0px;
        position: relative;
      }
    }
  }
  .reverserow {
    flex-direction: row-reverse;
    @media (max-width: ${base.small}) {
      flex-direction: column-reverse;
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
      padding-top: 10%;
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
          cursor: pointer;
          text-transform: uppercase;
          @media (max-width: ${base.small}) {
            width: 90%;
            margin: 10px 0px;
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
        width: 85%;
        height: 85%;
        position: absolute;
        top: 0;
        left: 10%;
        bottom: 0;
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
