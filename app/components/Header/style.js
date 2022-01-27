/**
 * Created by vivek ajage on 12/5/20.
 *
 * @format
 */

import styled from "styled-components";
import base from "../../styles/base";

const HeaderCss = styled.div`
  display: flex;
  flex: 1;
  height: 20vh;
  padding: 0px 100px;
  align-items: center;
  position: relative;
  @media (max-width: ${base.small}) {
    justify-content: space-between;
    padding: 0px 20px;
    padding-bottom: 25px;
    height: 15vh;
    padding-bottom: 5vh;
  }
  img {
    ${"" /* width: 130px; */}
    height: 80px;
    @media (max-width: ${base.small}) {
      object-fit: contain;
      width: 100px;
    }
  }
  .burgerMenu {
    width: 30px;
    height: 30px;
  }
  .first {
    flex: 1;
    display: flex;
    font-family: Poppins;
    justify-content: center;
    font-weight: 450;
    color: black;
    font-size: 1.5rem;
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
    color: #303030;
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
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-100vh);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0px);
    }
    to {
      opacity: 0;
      transform: translateY(-100vh);
    }
  }
  .fullscreenMode {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 999;
    background-color: #d7e8dd;
    top: 0;
    right: 0;
    flex-direction: column;
    justify-content: flex-start;
  }

  .secondAnim {
    animation: fadeOut 0.5s linear;
  }
  .firstAnim {
    animation: fadeIn 0.5s linear;
  }
`;
export { HeaderCss };
