/**
 * Created by vivek ajage on 12/5/20.
 */
import styled from "styled-components";
import base from "../../styles/base";

const HeaderCss = styled.div`
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
      font-family: Poppins;
      font-weight: 500;
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
`;
export { HeaderCss };
