import styled from "styled-components";
import base from "../../styles/base";

const PaymentCss = styled.div`
  .checkout {
    max-width: 480px;
    margin: 0 auto;
    padding: 30px 0;
    font-family: "Poppins", sans-serif;

    #payment-form {
      width: 100%;
      margin: 0 -30px;
      padding: 20px 30px 30px;
      border-radius: 4px;
      border: 1px solid #e8e8fb;
      display: inline-table;
      margin-top: -32px;

      text-align: center;
      background: #f8fbfd;

      font-size: 15px;

      p.instruction {
        display: inline-table;
        margin-top: -32px;
        padding: 0 5px;
        text-align: center;
        background: #f8fbfd;
      }

      section {
        display: flex;
        flex-direction: column;
        position: relative;
        text-align: left;
        h2 {
          margin: 15px 0;
          color: #32325d;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          font-size: 13px;
          font-weight: 500;
        }
        fieldset {
          margin-bottom: 20px;
          background: #fff;
          box-shadow: 0 1px 3px 0 rgba(50, 50, 93, 0.15),
            0 4px 6px 0 rgba(112, 157, 199, 0.15);
          border-radius: 4px;
          border: none;
          font-size: 0;

          label {
            position: relative;
            display: flex;
            flex-direction: row;
            height: 42px;
            padding: 10px 0;
            align-items: center;
            justify-content: flex-start;
            color: #8898aa;
            font-weight: 400;

            span {
              min-width: 125px;
              padding: 0 15px;
              text-align: right;
              font-size: 15px;
              color: #525f7f;
            }
            input {
              border-style: none;
              .field {
                flex: 1;
                padding: 0 15px;
                background: transparent;
                font-weight: 400;
                color: #31325f;
                outline: none;
                cursor: text;
              }
            }
          }
          label .state {
            display: inline-flex;
            width: 75%;
          }

          label .country {
            display: flex;
          }
          .field {
            flex: 1;
            select {
              font-family: "Poppins", sans-serif;
              width: 100%;
              border-style: none;
              outline: none;
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              outline: none;
              color: #313b3f;
              cursor: pointer;
              background: transparent;
              margin: 0 -15px 0 -30px;
              padding: 0 15px 0 30px;

              ::after {
                content: "";
                position: absolute;
                width: 9px;
                height: 5px;
                right: 20px;
                top: 50%;
                margin-top: -2px;
                background-image: url(/images/dropdown.svg);
                pointer-events: none;
              }
            }
          }
        }
      }
      nav {
        display: flex;
        margin-bottom: 30px;
        .tab {
          border: none;
          margin: 0 20px;
          background: none;
          padding: 10px;
          cursor: pointer;
          font-family: "Poppins", sans-serif;
          :hover {
            color: #6772e5;
            border-bottom: 2px solid #6772e5;
          }
          :active {
            border: none;
          }
        }
        .active {
          border-bottom: 2px solid #6772e5;
        }
      }
    }
    .card-pay {
      width: 100%;
      margin-bottom: 50px;

      .StripeElement {
        flex: 1;
        box-sizing: border-box;

        height: 40px;

        padding: 10px 12px;

        border: 1px solid transparent;
        border-radius: 4px;
        background-color: white;

        -webkit-transition: box-shadow 150ms ease;
        transition: box-shadow 150ms ease;
      }
      .form-row {
        display: flex;
        background: white;
        label {
          align-self: center;
          margin: 0 30px;
          color: #525f7f;
          font-size: 14px;
        }
      }

      .StripeElement--focus {
        /* box-shadow: 0 1px 3px 0 #cfd7df; */
      }

      .StripeElement--invalid {
        border-color: #fa755a;
      }

      .StripeElement--webkit-autofill {
        background-color: #fefde5 !important;
      }
      .payment-button {
        display: block;
        background: #666ee8;
        color: #fff;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
          0 1px 3px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        border: 0;
        font-weight: 700;
        width: 100%;
        height: 40px;
        outline: none;
        cursor: pointer;
        transition: all 0.15s ease;
        margin-top: 20px;
      }
      label {
        margin-bottom: 10px;
      }
    }
    .bank {
      input,
      .StripeElement {
        flex: 1;
        height: 30px;
        padding: 10px 12px 0 12px;

        color: #32325d;
        background-color: white;
        border: 1px solid transparent;
        border-radius: 4px;

        -webkit-transition: box-shadow 150ms ease;
        transition: box-shadow 150ms ease;

        ._PrivateStripeElement {
          padding: 10px;
        }
      }

      .form-row {
        display: flex;
        background: white;
        margin-bottom: 20px;
        label {
          align-self: center;
          margin: 0 30px;
          color: #525f7f;
        }
      }

      input:focus,
      .StripeElement--focus {
        /* box-shadow: 0 1px 3px 0 #cfd7df; */
      }

      .StripeElement--invalid {
        border-color: #fa755a;
      }

      .StripeElement--webkit-autofill {
        background-color: #fefde5 !important;
      }

      .payment-button {
        display: block;
        background: #666ee8;
        color: #fff;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
          0 1px 3px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        border: 0;
        font-weight: 700;
        width: 100%;
        height: 40px;
        outline: none;
        cursor: pointer;
        transition: all 0.15s ease;
        margin-top: 20px;
      }
      .t {
        margin-bottom: 10px;
      }
    }
  }
`;
export { PaymentCss };
