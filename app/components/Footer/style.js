/**
 * Created by vivek ajage on 12/5/20.
 */
import styled from "styled-components";
import base from "../../styles/base";

const FooterCss = styled.div`
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
            cursor: pointer;
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
      margin: 0 10px;
    }
    .social {
      display: flex;
      flex-direction: row;
    }
    .rowBox {
      display: flex;
      align-items: center;
      a {
        height: 20px;
        object-fit: contain;
        margin: 0 20px 0 10px;
      }
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
      color: #303030;

      @media (max-width: ${base.small}) {
        font-size: 12px;
      }
    }
  }
`;
export { FooterCss };
