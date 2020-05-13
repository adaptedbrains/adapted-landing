import { injectGlobal } from "styled-components";
import base from "./base";

/* eslint no-unused-expressions: 0 */
export default () => injectGlobal`
    html, body {
        margin:0px;
        height: 100%;
    }
    p{
        margin-bottom:0
    }
    img{
    }

    ::placeholder { /* Firefox, Chrome, Opera */ 
    color: #B1BDC6 !important; 
    font-size:14px;
        }   
    .logo-img{
    width: 50px;
    height: 50px;
    margin-right: 10px;
    margin-bottom: 20px;
}

.modal-backdrop.show{
    opacity: 0.6 !important;
}

.modal-dialog-centered{
    max-width:50% !important;
}
.custom-control-description{
    margin-right:10px;
}
.custom-control{
    margin-left:10px;
    margin-top: 12px;
}
.custom-control-input:checked ~ .custom-control-label::before{
    background-color:#04b455 !important;
}
.modal-content{
}

.navbar-topbar{
}
.side-bar{
    width: 100%;
    align-items: flex-start !important;
    justify-content: center !important;
    display: flex;
}
.top-bar{
    width: 100%;
    align-items: flex-start !important;
    justify-content: center !important;
    display: flex;
    flex-direction:row;
    @media (max-width: ${base.small}) {
    }
}
.logo-box{
    font-size: 26px;
    display:flex;
    font-weight: bold;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column !important;
    align-items: center !important;
    margin-bottom: 20px;
}


.navbar-nav{
    font-size: 16px;
    flex-direction: column !important;
    font-weight: 400;
}
.navbar-nav-row{
    font-size: 16px;
    flex-direction: row !important;
    font-weight: 400;
}
.nav-link{
    padding-right: 1.625rem !important;
    padding-left: 1.625rem !important;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    border-bottom: solid 2px #00000000;
}

.nav-bar-part{
    cursor: pointer;
    padding: 10px 0px;
    margin: 5px 0px;
}
.Collapsible__trigger{
    font-family: noto-sans, sans-serif !important;
}
.modal-body{
    @media (max-width: ${base.small}) {
        max-height:500px ;
        overflow:scroll;
        padding:15px !important;
       padding-top:0px !important;
       padding-bottom:30px !important;
        
    }
}
.modal-dialog-centered{
    @media (max-width: ${base.small}) {
        max-width:95% !important;
    }
}
.nav-bar-part-top{
    cursor: pointer;
    @media (max-width: ${base.small}) {
        margin:20px 0px
    }
}
.selected-nav{
}
.navbra-brand{
    margin-right: 3.5rem !important;
}

.dropdown-toggle::after{
    margin-left: 1.255em;
    vertical-align: 0.15em;
}

.custom-checkbox {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 2px solid #76838f;
  background-color: transparent;
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #2196f3;
}

.custom-checkbox:after {
  content: '';
  position: absolute;
  display: none;
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.custom-checkbox .checkmark:after {
  content: '';
  position: relative;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  display: none;
}

`;
