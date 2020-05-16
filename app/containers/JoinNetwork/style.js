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
    height: 65vh;
    @media (max-width: ${base.small}) {
      background-color: #f0f6f2;
    }
  }
  .greenHalf {
    width: 50vw;
    height: 75vh;
    position: absolute;
    z-index: -1;
    right: 0;
    background-color: #f0f6f2;
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
  .container4 {
    background-color: #fff;
    padding: 0px 10vw;
    padding-top: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: ${base.small}) {
      padding: 0px 20px;
      padding-top: 10vh;
    }
    .headinContainer2 {
      font-family: Poppins;
      font-weight: 500;
      font-size: 28px;
      text-align: center;
      color: #303030;
      margin: 0px 10vw;
      margin-bottom: 110px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: ${base.small}) {
        font-size: 19px;
        margin: 0px 0vw;
        margin-bottom: 60px;
      }
    }
    .faq {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 20vh;
      @media (max-width: ${base.small}) {
        flex-direction: column;
        margin-bottom: 5vh;
      }
      .faqsingle {
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 25px 0px;
        @media (max-width: ${base.small}) {
          width: auto;
        }
        img {
          width: 30px;
          margin-right: 20px;
          cursor: pointer;
        }
        .spanBox {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 75%;
          @media (max-width: ${base.small}) {
            width: 100%;
          }
          .headerspanBox {
            font-family: Poppins;
            font-weight: 400;
            font-size: 19px;
          }
          .contentBox {
            font-family: Poppins;
            font-weight: 400;
            font-size: 16px;
            transition: all 0.3s ease;
            display: none;
            margin-top: 15px;
            color: #777;
          }
          .showContent {
            display: flex;
          }
        }
      }
    }
    .socialPlatforms {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 20vh;
      width: 100%;
      @media (max-width: ${base.small}) {
        flex-wrap: wrap;
      }
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (max-width: ${base.small}) {
          width: 50%;
          margin-bottom: 50px;
          justify-content: space-between;
        }
        .headerText {
          font-family: Poppins;
          font-weight: 500;
          font-size: 19px;
          margin-top: 45px;
          text-align: center;
          color: #303030;
        }
        img {
          height: 80px;
          object-fit: contain;
          @media (max-width: ${base.small}) {
            width: 80px;
          }
        }
      }
    }
  }
  .container3 {
    background-color: #e1ede5;
    padding: 0px 15vw;
    padding-top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    @media (max-width: ${base.small}) {
      padding: 0px 30px;
      padding-top: 7.5vh;
    }
    .rightImgFloat {
      position: absolute;
      right: 0;
      width: 10vw;
      top: 20vh;
    }
    .leftImgFloat {
      position: absolute;
      left: -3vw;
      width: 10vw;
      bottom: 20vh;
    }
    .headinContainer2 {
      font-family: Poppins;
      font-weight: 500;
      font-size: 28px;
      text-align: center;
      color: #303030;
      margin: 0px 10vw;
      margin-bottom: 110px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: ${base.small}) {
        margin-bottom: 50px;
      }
    }

    .applyBox {
      display: flex;
      flex-direction: row;
      margin-bottom: 20vh;
      @media (max-width: ${base.small}) {
        flex-direction: column-reverse;
        margin-bottom: 7.5vh;
      }
      .textDataBox {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .headerSpan {
          font-family: Poppins;
          font-weight: 500;
          font-size: 23px;
          margin-bottom: 15px;
          color: #303030;
        }
        .subtitleSpan {
          font-family: Poppins;
          font-weight: 400;
          font-size: 19px;
          color: #303030;
        }
      }
      .imageDiv {
        flex: 1;
        padding-left: 10%;
        display: flex;
        justify-content: flex-start;
        @media (max-width: ${base.small}) {
          padding-left: 0%;
          padding-bottom: 5vh;
        }
        img {
          height: 125px;
          object-fit: contain;
          @media (max-width: ${base.small}) {
            height: 100px;
          }
        }
      }
      .reverseImg {
        padding-left: 0%;
        padding-right: 10%;
        justify-content: flex-end;
        @media (max-width: ${base.small}) {
          justify-content: flex-start;
        }
      }
    }
    .reverseFlex {
      flex-direction: row-reverse;
      @media (max-width: ${base.small}) {
        flex-direction: column-reverse;
      }
    }
  }
  .container2 {
    display: flex;
    padding: 0px 100px;
    display: flex;
    flex-direction: column;
    padding-top: 20vh;
    padding-bottom: 30vh;
    @media (max-width: ${base.small}) {
      padding: 0px 20px;
      padding-bottom: 10vh;
      padding-top: 10vh;
    }
    .techBox {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      @media (max-width: ${base.small}) {
        flex-direction: column;
      }
      .singleTechbox {
        background-color: #e8f1eb;
        padding: 10px;
        align-items: center;
        font-family: Poppins;
        font-weight: 500;
        font-size: 19px;
        color: #303030;
        width: 22.5vw;
        margin: 10px 0px;
        text-align: center;
        @media (max-width: ${base.small}) {
          width: auto;
        }
      }
    }
    .headinContainer2 {
      font-family: Poppins;
      font-weight: 500;
      font-size: 28px;
      text-align: center;
      color: #303030;
      margin: 0px 10vw;
      margin-bottom: 110px;
      @media (max-width: ${base.small}) {
        padding: 0px;
        font-size: 22px;
        line-height: 27px;
        text-align: center;
        margin: 0px;
        margin-bottom: 80px;
      }
    }
    .container2Box {
      display: flex;
      flex-direction: row;
      padding-bottom: 20vh;
      @media (max-width: ${base.small}) {
        flex-direction: column;
        align-items: center;
        padding-bottom: 10vh;
      }
      .childbox {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 1;
        @media (max-width: ${base.small}) {
          align-items: center;
          margin-bottom: 50px;
        }
        img {
          height: 80px;
          object-fit: contain;
          width: 80px;
          margin-bottom: 55px;
          @media (max-width: ${base.small}) {
            margin-bottom: 20px;
          }
        }
        .childboxheader {
          font-family: Poppins;
          font-weight: 500;
          color: #303030;

          font-size: 23px;
        }
        .childboxsubhead {
          font-family: Poppins;
          font-weight: 400;
          width: 90%;
          margin-top: 30px;
          color: #79818c;
          font-size: 19px;
          @media (max-width: ${base.small}) {
            text-align: center;
          }
        }
      }
    }
  }

  .container1 {
    display: flex;
    height: 60vh;
    padding: 0px 100px;
    @media (max-width: ${base.small}) {
      padding: 0px 20px;
      flex-direction: column;
      align-items: center;
      height: auto;
    }
    .first {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding-top: 5%;
      .headerTitle {
        font-family: Poppins;
        font-weight: 500;
        font-size: 43px;
        color: #303030;
        line-height: 60px;
        margin-bottom: 30px;
        @media (max-width: ${base.small}) {
          padding: 0px;
          font-size: 22px;
          line-height: 23px;
          text-align: center;
          margin-bottom: 30px;
        }
      }
      .subtitle {
        color: #79818c;
        font-family: Poppins;
        font-weight: 400;
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
          font-family: Poppins;
          font-weight: 500;
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
      flex-direction: column;
      flex: 1;
      padding-top: 5%;
      padding-left: 5%;
      @media (max-width: ${base.small}) {
        padding-left: 0%;
        flex: 4;
        align-items: center;
        padding-top: 0%;
      }
      .headerTitle {
        font-family: Poppins;
        font-weight: 500;
        font-size: 43px;
        color: #303030;
        line-height: 60px;
        margin-bottom: 30px;
      }
      .subtitle {
        color: #79818c;
        font-family: Poppins;
        font-weight: 400;
        font-size: 19px;
        margin-bottom: 10px;
        @media (max-width: ${base.small}) {
          font-size: 14px;
          text-align: center;
        }
      }
      .btnHome {
        display: flex;
        margin-top: 65px;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        @media (max-width: ${base.small}) {
          justify-content: center;
          margin-top: 30px;
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
          width: 48%;
          @media (max-width: ${base.small}) {
            width: 90%;
          }
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
  }
`;
export { DahsboardCss };
