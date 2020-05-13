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
    height: 75vh;
    position: absolute;
    z-index: -1;
    right: 0;
    background-color: #f0f6f2;
  }
  .container4 {
    background-color: #fff;
    padding: 0px 10vw;
    padding-top: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .headinContainer2 {
      font-family: Poppins-Medium;
      font-size: 28px;
      text-align: center;
      color: #303030;
      margin: 0px 10vw;
      margin-bottom: 110px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .faq {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 20vh;
      .faqsingle {
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 25px 0px;
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
          .headerspanBox {
            font-family: Poppins-Regular;
            font-size: 19px;
          }
          .contentBox {
            font-family: Poppins-Regular;
            font-size: 16px;
            transition: all 0.3s ease;
            display:none;
            margin-top: 15px;
            color: #777;
          }
          .showContent{
            display:flex;
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
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        .headerText {
          font-family: Poppins-Medium;
          font-size: 19px;
          margin-top: 45px;
          text-align: center;
          color: #303030;
        }
        img {
          height: 80px;
          object-fit: contain;
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
      font-family: Poppins-Medium;
      font-size: 28px;
      text-align: center;
      color: #303030;
      margin: 0px 10vw;
      margin-bottom: 110px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .applyBox {
      display: flex;
      flex-direction: row;
      margin-bottom: 20vh;

      .textDataBox {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .headerSpan {
          font-family: Poppins-Medium;
          font-size: 23px;
          margin-bottom: 15px;
          color: #303030;
        }
        .subtitleSpan {
          font-family: Poppins-Regular;
          font-size: 19px;
          color: #303030;
        }
      }
      .imageDiv {
        flex: 1;
        padding-left: 10%;
        display: flex;
        justify-content: flex-start;
        img {
          height: 125px;
          object-fit: contain;
        }
      }
      .reverseImg {
        padding-left: 0%;
        padding-right: 10%;
        justify-content: flex-end;
      }
    }
    .reverseFlex {
      flex-direction: row-reverse;
    }
  }
  .container2 {
    display: flex;
    padding: 0px 100px;
    display: flex;
    flex-direction: column;
    padding-top: 20vh;
    padding-bottom: 30vh;
    .techBox {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      .singleTechbox {
        background-color: #e8f1eb;
        padding: 10px;
        align-items: center;
        font-family: Poppins-Medium;
        font-size: 19px;
        color: #303030;
        width: 22.5vw;
        margin: 10px 0px;
        text-align: center;
      }
    }
    .headinContainer2 {
      font-family: Poppins-Medium;
      font-size: 28px;
      text-align: center;
      color: #303030;
      margin: 0px 10vw;
      margin-bottom: 110px;
    }
    .container2Box {
      display: flex;
      flex-direction: row;
      padding-bottom: 20vh;
      .childbox {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 1;
        img {
          height: 80px;
          object-fit: contain;
          width: 80px;
          margin-bottom: 55px;
        }
        .childboxheader {
          font-family: Poppins-Medium;
          color: #303030;

          font-size: 23px;
        }
        .childboxsubhead {
          font-family: Poppins-Regular;
          width: 90%;
          margin-top: 30px;
          color: #79818c;
          font-size: 19px;
        }
      }
    }
  }

  .container1 {
    display: flex;
    height: 60vh;
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
      flex-direction: column;
      flex: 1;
      padding-top: 5%;
      padding-left: 5%;
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
  }
`;
export { DahsboardCss };
